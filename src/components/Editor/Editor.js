import React, {useState} from "react";
import AceEditor from "react-ace";
import "./Editor.css"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import {request, tokenErrorHandler} from "../../axios_helper";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorText: "",
            markers: [],
            container: this.props.container
        };
        this.oldValue = null;
        this.timer = null;
    }

    onChange = (newValue) => {
        this.setState({editorText: newValue});
        this.state.container.setState({lineCount: newValue.split('\n').length});
        this.state.container.setState({status: "Waiting..."})
        if (this.timer == null) {
            this.timer = setTimeout(() =>{this.executeEval(newValue); this.state.container.setState({status: "Computing..."})}, 1000);
        } else {
            clearTimeout(this.timer)
            this.timer = setTimeout(() =>{this.executeEval(newValue); this.state.container.setState({status: "Computing..."})}, 1000);
        }
    }

    //This should be moved into editor, so we can have multiple instance, on error creation we just call out to application.
    // This will make our work easier when handling multiple files
    executeEval(sourceCode) {
        request(
            "POST",
            "/api/v1/application/evalFile",
            {
                fileTitle: "TestFileName.js",
                fileContents: sourceCode.replaceAll("\r", "").replaceAll("\"", "\u0022"),
                settings: ["3Allman"]
            }
        ).then((response) => {
            console.log(response.data);
            for(let i = 0; i < response.data.styleErrors; i++) {
                console.log("beep");
                this.state.container.createNewSuggestionCard("Issue (generate titles later)", response.data.issueSegmentLiterals[i].segmentLiteralData[1], [], [])
            }
        }).then(() =>
            this.state.container.setState({status: "Complete"})
        ).catch((e) => {
            console.log(e);
            tokenErrorHandler(e);
        })
    }

    render() {
        return (
            <div className="editorContainer">
                <header>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
                        rel="stylesheet"/>
                    <link type="text/css" href="Editor.css"/>
                </header>
                <AceEditor
                    style={{"borderRadius": "0 0 5px 5px", "background": "none"}}
                    value={this.state.editorText}
                    markers={this.state.markers}
                    className="editor"
                    mode="java"
                    theme="one_dark"
                    placeholder="Type a program here or drag and drop a file here to upload!"
                    onChange={this.onChange}
                    name="editor"
                    editorProps={{$blockScrolling: true}}
                    setOptions={{
                        printMargin: false,
                        useSoftTabs: false
                    }}
                />
            </div>
        );
    }
}

export default Editor;
