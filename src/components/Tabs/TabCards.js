import React from "react";
import "./TabCards.css"
import Switch from '@mui/material/Switch';

class SuggestionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cardContainerTest">
                <header>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link type="text/css" href="SuggestionCard.css"/>
                </header>
                <h3 className="cardTitle">{this.props.title}</h3>
                <div className="switchButton">
                    <Switch defaultChecked color="secondary"/>
                </div>
                <div className="cardImage">
                    <div >
                        <img src={this.props.img} className="cardImageBefore" ></img>
                    </div>
                </div>
                <div className="cardLanguages">
                    <h3>Languages: Java, C# </h3>
                </div>
            </div>
        );
    }
}

export default SuggestionCard;