import "./Application.css";
import Editor from "../../components/Editor/Editor";
import SettingsButton from "../../components/SettingsButton/SettingsButton";
import StatBox from "../../components/StatBox/StatBox";
import React from 'react';
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard";
import FileExplorer from "../../components/FileExplorer/FileExplorer";
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
            stylisticCorrections: 0,
            improvements: 0,
            estimatedGrade: "100%",
            username: "",
            suggestions: [],
            lineCount: 1,
            processTime: 0,
            status: "Waiting...",
            focusedSuggestionID: null
        }
        // Fix it flashing react app before changing
        document.title = 'Programtastic - App';
        document.appContext = this;
        this.timer = null;
        this.editor = null;
    }

    componentDidMount = () => {
        // We can just pull all needed data and update out finish flash using the async finish function, the update this variable when we have all the data
        // We sorta want the whole screen to load so that way we can inject the data as we receive it so its ready once done loading.
        setTimeout(() => {this.setState({isLoading: false})}, 1000);
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

    createNewSuggestionCard(id, title, correction, correctionLiteral, message, startIndex, endIndex){
        this.setState(prevState => ({suggestions: [...prevState.suggestions, {id: id, title: title, correction: correction, correctionLiteral: correctionLiteral, message: message, startIndex: startIndex, endIndex: endIndex, focused: false}]}));
        this.setState({improvements: 0});
        let total = this.editor.getText().split("\n").length;
        this.setState(prevState => ({estimatedGrade: (Math.floor(((total-prevState.suggestions.length)/total)*100) <= 0 ? 0 : Math.floor(((total-prevState.suggestions.length)/total)*100)) + "%"}));
        this.setState(prevState => ({stylisticCorrections: prevState.stylisticCorrections + 1}));
    }

    clearSuggestionCard(){
        //We clear card and data because we will only show info for the currently open file
        this.setState({stylisticCorrections: 0});
        this.setState({suggestions: []});
        this.setState({improvements: 0});
        this.setState({estimatedGrade: "100%"})
    }

    resolveSuggestion(id, isAccepted) {
        if (isAccepted){
            let suggestion = this.state.suggestions.find((suggestion => suggestion.id === id));
            let text = this.editor.getText();
            let before = text.substring(0, suggestion.startIndex);
            // If you come back to work on this god bless you, there is slight shifting with ending newlines, no fucking clue why.
            // My initial guess is a character encoding issue, where newline is actually one character on the backend and two
            // character on the front end. No clue how to prove this, but it is the only possible way this could happen.
            // The below code causes the double character shift to go away in the specific case it matters, I'm going to ignore
            // that this is an actual pressing issue everywhere else because we cant visually see it.
            // (Total time spent: 2.25hrs)
            if (before[before.length-1] === "\n") {
                before = text.substring(0, suggestion.startIndex-1);
            }
            let after = text.substring(suggestion.endIndex+1, text.length);
            this.editor.setText(before + suggestion.correctionLiteral + after);
            this.editor.removeMarker(id, before + suggestion.correctionLiteral + after);
        } else {
            // This is not fully implemented, it will temporally hide the issue until recalculate happens
            this.state.suggestions.forEach(suggestion => {
                if (suggestion.id === id) {
                    suggestion.hide = true;
                }
            })
        }
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
                                    <Editor/>
                                </section>
                                <div className="bottomPanelQuickInfo">
                                    <h4 className="bottomPanelQuickInfoStat ">src/folder/sourceFile.txt</h4>
                                    <h4 className="bottomPanelRightAlign bottomPanelQuickInfoStat bottomPanelQuickInfoPad">{this.state.status}</h4>
                                    <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">{this.state.processTime}ms</h4>
                                    <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">UTF-8</h4>
                                    <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">{this.state.lineCount} Lines</h4>
                                </div>
                            </div>
                        </section>
                        <section className="suggestionsViewerContainer">
                            <div className="suggestions">
                                <div className="suggestionsStats">
                                    <StatBox value={this.state.stylisticCorrections} title="Stylistic Corrections"/>
                                    <StatBox value={this.state.improvements} title="Improvements"/>
                                    <StatBox value={this.state.estimatedGrade} title="Estimated Grade"/>
                                </div>
                                <div className="suggestionCards">
                                    {this.state.suggestions.map(suggestion => suggestion.hide ? <></> : <SuggestionCard id={suggestion.id} title={suggestion.title} correction={suggestion.correction} message={suggestion.message}/>)}
                                </div>
                                <div className="suggestionSettingsSection">
                                    <SettingsButton title="Evaluation Settings" callback={() => {
                                        window.settingsModal.setDisplay(true);
                                    }}/>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Application;
