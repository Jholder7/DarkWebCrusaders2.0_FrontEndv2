import React from "react";
import "./SettingsButton.css"

function SettingsButton(props) {
    return (
        <button className="evalButton">
            <header>
                <link rel="stylesheet" href="SettingsButton.css" />
            </header>
            <span className="evalButtonText">{props.title}</span>
        </button>
    )
}

export default SettingsButton