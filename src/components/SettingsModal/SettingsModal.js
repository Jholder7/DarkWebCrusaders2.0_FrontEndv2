import React, {useState} from "react";
import "./SettingsModal.css"

function SettingsModal(props) {

    let [display, setDisplay] = useState(false);
    SettingsModal.setDisplay = setDisplay;

    return(
        <div className={display ? "settingsModal" : "hidden"}>
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="SettingsModal.js" />
            </header>
            <button onClick={() => {setDisplay(false)}}>Close</button>
            <h2 className="statBoxNumber">{props.value}</h2>
            <h3 className="statBoxTitle">{props.title}</h3>
        </div>
    )
}

export default SettingsModal