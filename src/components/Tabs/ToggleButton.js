import React, {useEffect, useState} from "react";
import "./TabCards.css"
import "./ToggleButton.css"
import "./atom-one-dark.css"
import Highlight from 'react-highlight'

export default function ToggleButton (props) {
    const [isSelected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.initialState);
    })

    return (
        <button onClick={() => {setSelected(!isSelected); if (props.onClick != null) props.onClick();}} className={`toggleButtont ${isSelected ? '.errorCardSelect' : ''}`}>
            <div className="toggleButtonTopt">
                <h3 className="toggleTitlet">{props.title}</h3>
                <div className={`toggleBackingt ${isSelected ? 'backingTickedt' : ''}`}>
                    <div className={`toggleTickert ${isSelected ? 'tickerTickedt' : ''}`}></div>
                </div>
            </div>
            <Highlight className={"codePreviewt " + props.language}>
                {props.preview}
            </Highlight>
            <h4 style={{"margin": "10px", "margin-top": "auto"}}>{"Languages: " + props.supportedLanguages}</h4>
        </button>
    );
}