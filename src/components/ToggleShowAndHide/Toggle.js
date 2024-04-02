import React, { Component } from 'react' 

export class Toggle extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            open: false,  
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
        var { title, children } = this.props; 
        
        const { open } = this.state;  
        if (open) {  
            title = 'Close Stat Boxes';  
        } else {  
            title = 'Open Stat Boxes';  
        }  
        return (  
            <div>
                <div onClick={this.togglebutton}>  
                    {title}
                </div>  
                {open && (  
                    <div>  
                        {children}  
                    </div>  
                )}
            </div>  
        );  
    }  
}  
export default Toggle 