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
import Dropzone from 'react-dropzone'

export default class Account extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isUploading: false,
            uploadStarted: false,
            projectData: [],
            loadStatus: 0,
        }
        document.title = 'Programtastic - Account';
    }

    HandleFile(event) {
        for(let file of event.target.files) {
            console.log("")
        }
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
                            let newFileData = []
                            for (let file of acceptedFiles) {
                                let data = {name: file.name, path: file.path, contents: -1 };
                                file.text().then(con => {
                                    data.contents = con
                                    this.setState(prevState => ({loadStatus: prevState.loadStatus + total}));
                                });
                                newFileData.push(data);
                                console.log(newFileData)
                            }
                        }}>
                            {({getRootProps, getInputProps}) => (
                                <section className="upload">
                                    <div {...getRootProps({className: 'uploadInner'})}>
                                        <input {...getInputProps()} />
                                        <h1 className="uploadHeader">Upload Project</h1>
                                        <img src={uploadIcon} alt="Upload Project" className="uploadIcon"/>
                                        <h2 className="uploadSubheader">Drag and Drop or Press To Upload</h2>
                                        <progress className={this.state.uploadStarted ? "uploadProgressBar" : "hiddenEl"} max={100} value={this.state.loadStatus}></progress>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        <div className="buttonBar">
                            <div className="subheadingBar padLeft uploadButton">
                                <button className="subheadingBarButton" onClick={() => {
                                    this.setState({isUploading: false});
                                    this.setState({projectData: []});
                                    this.setState({loadStatus: 0})
                                }}><div>Cancel</div></button>
                            </div>
                            <div className="subheadingBar uploadButton">
                                <button className="subheadingBarButton" onClick={() => {
                                }}><div>Create</div></button>
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
                                              style={{"width": "17px", "height": "auto", "marginRight": "10px", "marginLeft": "-8px"}}
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
                                    <div className="project">
                                        <div className="projectBar">
                                            <div className="projectIcon"></div>
                                            <h4 className="projectTitle">Example Project</h4>
                                            <h4 className="projectTimeStamp">2 Days Ago</h4>
                                            <h4 className="projectSize">89 KB</h4>
                                        </div>
                                        <div className="projectBar">
                                            <h4 className="projectLang">Java</h4>
                                            <h4 className="projectStat">Style Corrections: 12</h4>
                                            <h4 className="projectStat">General Improvements: 2</h4>
                                            <h4 className="projectStat">Estimated Grade: 40%</h4>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="projectBar">
                                            <div className="projectIcon"></div>
                                            <h4 className="projectTitle">Another Project</h4>
                                            <h4 className="projectTimeStamp">12 Days Ago</h4>
                                            <h4 className="projectSize">189 MB</h4>
                                        </div>
                                        <div className="projectBar">
                                            <h4 className="projectLang">C#</h4>
                                            <h4 className="projectStat">Style Corrections: 0</h4>
                                            <h4 className="projectStat">General Improvements: 2</h4>
                                            <h4 className="projectStat">Estimated Grade: 98%</h4>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        )
    }
}