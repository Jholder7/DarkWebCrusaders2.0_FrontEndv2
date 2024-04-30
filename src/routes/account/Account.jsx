import React from 'react';
import "./Account.css"
import "../application/Application.css"
import menuIcon from './resources/menu.svg'
import projectIcon from './resources/project.svg'
import bugIcon from './resources/bug.svg'
import dropIcon from './resources/drop.svg'
import accountIcon from './resources/account.svg'
import reportIcon from './resources/report.svg'
import newIcon from './resources/new.svg'
import uploadIcon from './resources/upload.svg'
import downloadIcon from './resources/download.svg'
import Dropzone from 'react-dropzone'
import {request, tokenErrorHandler} from "../../axios_helper";
import JSZip from "jszip";
import { saveAs } from 'file-saver';

export default class Account extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isUploading: false,
            isDownloading: false,
            uploadStarted: false,
            fileLoadComplete: false,
            newFiles: [],
            projects: [],
            loadStatus: 0,
        }
        this.filesLoaded = 0
        this.newFileData = []
        document.title = 'Programtastic - Account';
    }

    HandleFile(event) {
        for(let file of event.target.files) {
            console.log("")
        }
    }

    componentDidMount() {
        request(
            "POST",
            "/api/v1/application/project/getUsersProjects",
            {}
        ).then((response) => {
            this.setState({projects: response.data})
        }).catch((e) => {
            console.log(e)
            tokenErrorHandler(e);
        });
    }

    createProject(newFiles) {
        let formattedFilesData = []
        for (let file of newFiles) {
            let tempFileData = {
                fileName: file.name,
                filePath: file.path,
                fileContents: file.contents
            }
            formattedFilesData.push(tempFileData);
        }
        request(
            "POST",
            "/api/v1/application/project/createNewProject",
            {
                projectName: formattedFilesData[0].filePath.split("/")[1],
                lastEdited: (new Date()).toISOString(),
                projectSize: 14.2,
                files: formattedFilesData
            }
        ).then((response) => {
            window.localStorage.setItem("currentProject", response.data.id)
            window.location.replace("/application");
        }).catch((e) => {
            //Debug data should change later!
            // Display the actual issue such as invalid username of password on webpage
            console.log(e)
            tokenErrorHandler(e);
        });
    }

    downloadProject(project) {
        request(
            "POST",
            "/api/v1/application/project/getFilesForProjectByID",
            {
                ID: project.id
            }
        ).then((response) => {
            let zip = new JSZip();
            for (let file of response.data) {
                zip.file(file.filePath.slice(1), file.fileContents);
            }
            zip.generateAsync({type:"blob"})
                .then(function(content) {
                    saveAs(content, project.projectName + ".zip");
                });
        }).catch((e) => {
            //Debug data should change later!
            // Display the actual issue such as invalid username of password on webpage
            console.log(e)
            tokenErrorHandler(e);
        });
    }


    render() {
        return (
            <main className="body">
                <div className={this.state.isUploading ? "projectUploadLayover" : "hiddenEl"}>
                    <div className="projectUpload">
                        <Dropzone onDrop={acceptedFiles => {
                            //Files are uploading correctly but we will need to make the progress bar show this
                            // Then when create is pressed send data to server and display loading screen until complete
                            this.setState({loadStatus: 0})
                            this.setState({uploadStarted: true});
                            let total = 100 / acceptedFiles.length;
                            this.newFileData = []
                            for (let file of acceptedFiles) {
                                let data = {name: file.name, path: file.path, contents: -1};
                                file.text().then(con => {
                                    data.contents = con
                                    this.setState(prevState => ({loadStatus: prevState.loadStatus + total}));
                                    this.filesLoaded = this.filesLoaded + 1
                                    if (this.filesLoaded >= acceptedFiles.length) {
                                        this.setState({fileLoadComplete: true})
                                    }
                                });
                                this.newFileData.push(data);
                            }
                        }}>
                            {({getRootProps, getInputProps}) => (
                                <section className="upload">
                                    <div {...getRootProps({className: 'uploadInner'})}>
                                        <input {...getInputProps()} />
                                        <h1 className="uploadHeader">Upload Project</h1>
                                        <img src={uploadIcon} alt="Upload Project" className="uploadIcon"/>
                                        <h2 className="uploadSubheader">Drag and Drop or Press To Upload</h2>
                                        <progress
                                            className={this.state.uploadStarted ? "uploadProgressBar" : "hiddenEl"}
                                            max={100} value={this.state.loadStatus}></progress>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        <div className="buttonBar">
                            <div className="subheadingBar padLeft uploadButton">
                                <button className="subheadingBarButton" onClick={() => {
                                    this.setState({isUploading: false});
                                    this.setState({uploadStarted: false});
                                    this.setState({loadStatus: 0})
                                    this.setState({fileLoadComplete: false})
                                    this.setState({newFiles: []})
                                    this.filesLoaded = 0;
                                }}>
                                    <div>Cancel</div>
                                </button>
                            </div>
                            <div className={this.state.fileLoadComplete ? "subheadingBar uploadButton" : "hidden"}>
                                <button className="subheadingBarButton" onClick={() => {
                                    this.createProject(this.newFileData);
                                }}>
                                    <div>Create</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.isDownloading ? "projectUploadLayover" : "hiddenEl"}>
                    <div className="projectUpload">
                        <section className="upload">
                            <div className="uploadInner">
                                <h1 className="uploadHeader">Project Download</h1>
                                <img src={downloadIcon} alt="Upload Project" className="uploadIcon"/>
                                <h2 className="uploadSubheader">Download Beginning Shortly</h2>
                            </div>
                        </section>
                        <div className="buttonBar">
                            <div className="subheadingBar padLeft uploadButton">
                                <button className="subheadingBarButton" onClick={() => {
                                    this.setState({isDownloading: false});
                                }}>
                                    <div>Done</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                    rel="stylesheet"/>
                <nav className="accountNav">
                    <img src={menuIcon} alt="Menu Button" className="accountNavImg"/>
                    <h1 className={"accountNavHeader "}></h1>
                    <div className="AccountNavAccountInfo">
                        <img src={dropIcon} alt="Drop Button" className="dropIcon"/>
                        <div className="accountNavPicture"></div>
                    </div>
                </nav>
                <section className="accountBodyContent">
                    <div className="leftPanel">
                        <section className="leftPanelContent">
                            <div className="bugReport">
                                <button className="bugReportButton">
                                    <div><img className="leftPanelPageIcon"
                                              style={{
                                                  "width": "17px",
                                                  "height": "auto",
                                                  "marginRight": "10px",
                                                  "marginLeft": "-8px"
                                              }}
                                              alt="Bug" src={bugIcon}/>Report Bug
                                    </div>
                                </button>
                            </div>
                            <h2 className="leftPanelPage leftPanelPageSelected">
                                <img className="leftPanelPageIcon" alt="Project Icon" src={projectIcon}/>
                                Projects
                            </h2>
                            <h2 className="leftPanelPage">
                                <img style={{"height": "16px", "width": "auto", "marginLeft": "17px"}}
                                     className="leftPanelPageIcon" alt="Project Icon" src={accountIcon}/>
                                Account
                            </h2>
                            <h2 className="leftPanelPage">
                                <img className="leftPanelPageIcon" alt="Project Icon" src={reportIcon}/>
                                Reports
                            </h2>
                            <h2 className="copyrightTab">&copy;2024 Programtastic All rights reserved</h2>
                        </section>
                    </div>
                    <div className="rightPanel">
                        <section className="rightPanelContent">
                            <div className="rightPanelInnerContent">
                                <h2 className="pageHeader">My Projects</h2>
                                <div className="pageHeaderLine"></div>
                                <div className="pageSubheadingButtonBar">
                                    <div className="subheadingBar">
                                        <button className="subheadingBarButton" onClick={() => {
                                            this.setState({isUploading: true});
                                        }}>
                                            <div>
                                                <img className="leftPanelPageIcon"
                                                     style={{
                                                         "width": "15px",
                                                         "height": "auto",
                                                         "marginRight": "5px",
                                                         "marginLeft": "-5px"
                                                     }}
                                                     alt="Bug" src={newIcon}/>
                                                New
                                            </div>
                                        </button>
                                    </div>
                                    <div className="subheadingBar">
                                        All /
                                    </div>
                                </div>
                                <section className="projectListContainer">
                                    {
                                        this.state.projects.map((project, index) => (
                                            <div onClick={() => {
                                                window.localStorage.setItem("currentProject", project.id)
                                                window.location.replace("/application");
                                            }} key={index} className="project">
                                                <div className="projectBar">
                                                    <div className="projectIcon"></div>
                                                    <h4 className="projectTitle">{project.projectName}</h4>
                                                    <h4 className="projectTimeStamp">{(new Date(project.lastEdited)).toDateString()}</h4>
                                                    <h4 className="projectLang">Java</h4>
                                                    <h4 className="projectSize">{project.projectSize} KB</h4>
                                                </div>
                                                <div className="projectBar">
                                                    <button className="subheadingBarButton"
                                                            style={{
                                                                "width": "80px",
                                                                "height": "25px",
                                                                "marginRight": "auto",
                                                                "marginLeft": "-5px"
                                                            }}
                                                            onClick={(event) => {
                                                                event.stopPropagation();
                                                                this.setState({isDownloading: true});
                                                                this.downloadProject(project);
                                                            }}>
                                                        <div>Download</div>
                                                    </button>
                                                    <h4 className="projectStat">{"Style Corrections: " + project.projectStyleCorrections}</h4>
                                                    <h4 className="projectStat">{"General Improvements: " + project.projectGeneralImprovements}</h4>
                                                    <h4 className="projectStat">{"Estimated Grade: " + project.projectEstimatedGrade}</h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </section>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        )
    }
}