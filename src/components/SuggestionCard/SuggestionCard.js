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
                <h3 className="cardTitle">{this.props.title}</h3>
                <div className="cardComparison">
                    <div className="cardComparisonBefore">
                        {this.props.correction}
                    </div>
                    <div className="cardMessage">
                        {this.props.message}
                    </div>
                </div>
            </div>
        );
    }
}

export default SuggestionCard;