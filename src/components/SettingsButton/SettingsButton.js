import React, {useCallback} from "react";
import "./SettingsButton.css"

class SettingsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            callback: {},
            title: ""
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            callback: props.callback,
            title: props.title
        };
    }

    render () {
        return (
            <button className="evalButton" onClick={() => {this.state.callback()}}>
                <header>
                    <link type="text/css" href="SettingsButton.css"/>
                </header>
                <div>
                    <span className="evalButtonText">{this.state.title}</span>
                </div>
            </button>
        );
    }

}

export default SettingsButton