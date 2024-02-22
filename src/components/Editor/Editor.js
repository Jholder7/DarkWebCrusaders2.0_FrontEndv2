import React, {useState} from "react";
import AceEditor from "react-ace";
import "./Editor.css"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorText: "",
            markers: []
        };
    }

    onChange = () => {
        console.log("changed")
    }

    render() {
        return (
            <div className="editorContainer">
                <header>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
                    <link type="text/css" href="Editor.css" />
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
                    editorProps={{ $blockScrolling: true }}
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
