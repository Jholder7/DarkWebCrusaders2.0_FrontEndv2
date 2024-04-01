import React from "react";
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
            container: document.appContext,
        };
        this.timer = null;
        this.state.container.editor = this;
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

    createMarker = (id, row, column, row1, column1) => {
        this.setState(prevState => ({markers: [...prevState.markers, {id: id, startRow: row, startCol: column, endRow: row1, endCol: column1, className: 'textHighlight', type: 'text' }]}));
    }

    setActiveMarker = (id) => {
        let tempMarkers = this.state.markers
        this.setState({markers: []});
        tempMarkers.forEach(marker => {
            if (marker.id===id){
                this.setState(prevState => ({markers: [...prevState.markers, {id: marker.id, startRow: marker.startRow, startCol: marker.startCol, endRow: marker.endRow, endCol: marker.endCol, className: 'activeTextHighlight', type: 'text' }]}));
            } else {
                this.setState(prevState => ({markers: [...prevState.markers, {id: marker.id, startRow: marker.startRow, startCol: marker.startCol, endRow: marker.endRow, endCol: marker.endCol, className: 'textHighlight', type: 'text' }]}));
            }
        });
    }

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
            this.state.container.clearSuggestionCard();
            this.markerID = 0;
            this.setState({markers: []});
            for(let i = 0; i < response.data.styleErrors; i++) {
                this.state.container.createNewSuggestionCard(i,"Issue (generate titles later)", response.data.issueSegmentLiterals[i].segmentLiteralData[1], "generate msg later", [], [])
                this.setState()

            }
            let rollingID = 0
            response.data.issueSegments.forEach((segment) => {
                let source = this.state.editorText.replaceAll("\r", "").replaceAll("\"", "\u0022")
                let x = source.slice(0, segment.segmentData[0]).split("\n").length-1;
                let y = source.slice(0, segment.segmentData[0]).split("\n").slice(-1)[0].length;
                let x1 = source.slice(0, segment.segmentData[1]).split("\n").length-1;
                let y1 = source.slice(0, segment.segmentData[1]).split("\n").slice(-1)[0].length;
                this.createMarker(rollingID, x, y, x1, y1+1);
                rollingID++;
            });
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
