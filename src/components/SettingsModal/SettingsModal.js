import React, {useState} from "react";
import "./SettingsModal.css"
import ColorTabs from "../Tabs/ColorTabs";

class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        window.settingsModal = this;
    }

    setDisplay(newBoolean) {
        this.setState({display: newBoolean});
    }

    render() {
        return (
            <div className={this.state.display ? "settingsModal" : "hidden"}>
                <header>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                        rel="stylesheet"/>
                    <link type="text/css" href="SettingsModal.js"/>
                </header>
                <section className="settingsPanel">
                    <div className="topBar">
                        <h3 className="topBarHeader">Style Options</h3>
                        <button className="closeModal" onClick={() => {
                            this.setDisplay(false)
                        }}>
                            <div>Close</div>
                        </button>
                    </div>
                    <ColorTabs />
                </section>
            </div>
        )
    }
}

export default SettingsModal