import "./Application.css";
import Editor from "../../components/Editor/Editor";
import SettingsButton from "../../components/SettingsButton/SettingsButton";
import StatBox from "../../components/StatBox/StatBox";
import React from 'react';
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard";
import FileExplorer from "../../components/FileExplorer/FileExplorer";
import Toggle from "../../components/ToggleShowAndHide/Toggle";
import {request, tokenErrorHandler} from "../../axios_helper";

let TestingFileStructure = {
    "name": "SuperCoolProject",
    "type": "baseFolder",
    "items": [
        {
            "name": ".gitignore",
            "type": "file",
        },
        {
            "name": "index.html",
            "type": "file",
        },
        {
            "name": "components",
            "type": "folder",
            "items": [
                {
                    "name": "editor",
                    "type": "folder",
                    "items": [
                        {
                            "name": "Editor.js",
                            "type": "file"
                        },
                        {
                            "name": "Editor.css",
                            "type": "file"
                        }

                    ]
                },
                {
                    "name": "StatBox",
                    "type": "folder",
                    "items": [
                        {
                            "name": "StatBox.js",
                            "type": "file"
                        },
                        {
                            "name": "StatBox.css",
                            "type": "file"
                        }

                    ]
                }
            ]
        },
        {
            "name": "main.java",
            "type": "file",
        },
    ]
}

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            stylisticErrors: "5",
            improvements: "5",
            estimatedGrades: "99%",
            username: ""
        }
        // Fix it flashing react app before changing
        document.title = 'Programtastic - App';
    }

    componentDidMount() {
        // We can just pull all needed data and update out finish flash using the async finish function, the update this variable when we have all the data
        // We sorta want the whole screen to load so that way we can inject the data as we receive it so its ready once done loading.
        setTimeout(() => {this.setState({isLoading: false})}, 5000);
        request(
            "GET",
            "/api/v1/application/baseUserData",
            {}
        ).then((response) => {
            this.setState({username: response.data.username});
            console.log(response.data);
        }).catch ((e) => {
            console.log(e);
            tokenErrorHandler(e);
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.isLoading ? "showLoading" : "hideLoading"}>
                    {/*This div covers the whole screen while isLoading any child components under here will be hidden when loading is done*/}
                    {/*Add any loading animations, svgs, or gifs here and styler her up*/}
                    <div className="spinner">
                        <span>The Power of Programtastic. . .</span>
                        <div className="half-spinner"></div>
                    </div>
                </div>
                <SettingsModal/>
                <header>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                        rel="stylesheet"/>
                    <link type="text/css" href="Application.css"/>
                </header>
                <div className="body">
                    <nav>
                        <div className="accountNavSection">
                            <div className="accountNavSectionProfilePicture">
                                {/*<img className="accountNavSectionProfilePictureImage" alt="Account Profile Picture" src=""/>*/}
                                <div className="accountNavSectionProfilePictureImage"></div>
                            </div>
                            <p className="accountNavSectionUsername">{this.state.username}</p>
                            <div className="navBackgroundChisel">
                                <div className="navBackgroundChiselNegative"/>
                            </div>
                        </div>
                        <div className="tailNavSection">
                            <div className="navBackgroundChunk"/>
                        </div>
                    </nav>
                    <main>
                        <section className="fileViewerContainer">
                            <div className="fileViewer">
                                <section className="panelBody fileViewerPanel">
                                    <FileExplorer filesData={TestingFileStructure} />
                                </section>
                                <div className="bottomPanelQuickInfo">
                                    <h4 className="bottomPanelQuickInfoStat ">SuperCoolProject</h4>
                                </div>
                            </div>
                        </section>
                        <section className="sourceCodeEditorContainer">
                            <div className="sourceCodeEditor">
                                <section className="panelBody">
                                    <div className="fillSpace">
                                        <Editor/>
                                    </div>      
                                </section>
                                <div className="bottomPanelQuickInfo">
                                    <h4 className="bottomPanelQuickInfoStat ">src/folder/sourceFile.txt</h4>
                                    <h4 className="bottomPanelRightAlign bottomPanelQuickInfoStat bottomPanelQuickInfoPad">Waiting...</h4>
                                    <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">0ms</h4>
                                    <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">UTF-8</h4>
                                    <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">0 Lines</h4>
                                </div>
                            </div>
                        </section>
                        <section className="suggestionsViewerContainer">
                            <Toggle>
                                <div className="suggestions">
                                    <div className="suggestionsStats">
                                        <StatBox value={this.state.stylisticErrors} title="Stylistic Errors"/>
                                        <StatBox value={this.state.improvements} title="Improvements"/>
                                        <StatBox value={this.state.estimatedGrades} title="Estimated Grade"/>
                                    </div>
                                    <div className="suggestionCards">
                                        <SuggestionCard/>
                                        <SuggestionCard/>
                                        <SuggestionCard/>
                                        <SuggestionCard/>
                                        <SuggestionCard/>
                                        <SuggestionCard/>
                                    </div>
                                    <div className="suggestionSettingsSection">
                                        <SettingsButton title="Evaluation Settings" callback={() => {
                                            window.settingsModal.setDisplay(true);
                                        }}/>
                                    </div>
                                </div>
                                </Toggle>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Application;
