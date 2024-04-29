import React, { Component } from 'react'
import "./Toggle.css"

export class Toggle extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            open: true,
        };
        this.side = props.side;
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
        if (this.side === 2 ){
            return (
                <div className={open ? "toggleBoxRight" : "toggleBox hidden"}>
                    {open && (
                        <div className={open ? "container" : "containerHidden"}>
                            {children}
                        </div>
                    )}
                    <div className="toggleButtonRight" onClick={this.togglebutton}>
                        <div className="toggleButtonInner"></div>
                    </div>
                </div>
            );
        }
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