import React, {useState} from "react";
import "./SuggestionCard.css"

function Editor() {
    let [editorText, setEditorText] = useState("");
    let [markers, setMarkers] = useState([]);

    return (
        <div className="cardContainer">
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="SuggestionCard.css" />
            </header>
        </div>
    )
}

export default Editor;