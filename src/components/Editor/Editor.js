import React, {useState} from "react";
import AceEditor from "react-ace";
import "./Editor.css"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

function Editor() {
    let [editorText, setEditorText] = useState("");
    let [markers, setMarkers] = useState([]);

    function onChange() {

    }

    return (
        <div className="editorContainer">
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="Editor.css" />
            </header>
            <AceEditor
                style={{"border-radius": "0 0 5px 5px", "background": "none"}}
                value={editorText}
                markers={markers}
                className="editor"
                mode="java"
                theme="one_dark"
                placeholder="Type a program here or drag and drop a file here to upload!"
                onChange={onChange}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    printMargin: false,
                    useSoftTabs: false
                }}
            />
        </div>
    )
}

export default Editor;