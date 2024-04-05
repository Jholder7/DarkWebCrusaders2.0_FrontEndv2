import React, { Component } from 'react'
import "./Toggle.css"

export class Toggle extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            open: true,
        };  
        this.togglebutton = this.togglebutton.bind(this);  
    }  
    togglebutton() {  
        const { open } = this.state;  
        this.setState({  
            open: !open,  
        });  
    }  
    render() {  
        var { children } = this.props;
        
        const { open } = this.state;
        return (
            <div className={open ? "toggleBox" : "toggleBox hidden"}>
                <div className="toggleButton" onClick={this.togglebutton}>
                    <div className="toggleButtonInner"></div>
                </div>
                {open && (
                    <div className={open ? "container" : "containerHidden"}>
                        {children}
                    </div>
                )}
            </div>
        );
    }
}
export default Toggle 