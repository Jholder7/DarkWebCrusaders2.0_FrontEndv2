import React from "react";
import "./SuggestionCard.css"

class SuggestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            container: document.appContext,
            id: props.id
        }
    }

    markFocused = () => {
        this.state.container.setState({focusedSuggestionID: this.state.id});
        this.state.container.editor.setActiveMarker(this.state.id);
    }

    resolveCard = (isApproved) => {
        this.state.container.resolveSuggestion(this.state.id, isApproved);
    }

    render() {
        return (
            <div className="cardContainer" onClick={() => {this.markFocused()}}>
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
                {this.state.id===this.state.container.state.focusedSuggestionID ?
                    <div className="buttonContainer">
                        <button className="cardButton" onClick={() => this.resolveCard(true)}><div>Accept</div></button>
                        <button className="cardButton" onClick={() => this.resolveCard(false)}><div>Deny</div></button>
                    </div>
                    :
                    <div></div>}
            </div>
        );
    }
}

export default SuggestionCard;