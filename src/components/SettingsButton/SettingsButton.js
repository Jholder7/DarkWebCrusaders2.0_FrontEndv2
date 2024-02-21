import React, {useCallback} from "react";
import "./SettingsButton.css"

function SettingsButton(props) {

    let [callback, setCallback] = useCallback([props.callback])

    return (
        <button className="evalButton" onClick={callback}>
            <header>
                <link rel="stylesheet" href="SettingsButton.css" />
            </header>
            <span className="evalButtonText">{props.title}</span>
        </button>
    )
}

export default SettingsButton