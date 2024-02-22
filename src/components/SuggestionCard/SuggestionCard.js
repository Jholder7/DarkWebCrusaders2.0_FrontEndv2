import React from "react";
import "./SuggestionCard.css"


class SuggestionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cardContainer">
                <header>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link type="text/css" href="SuggestionCard.css"/>
                </header>
            </div>
        );
    }
}

export default SuggestionCard;