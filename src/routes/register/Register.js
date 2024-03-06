import React from "react";
import "./Register.css"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            onRegister: props.onRegister
        };
    }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    onSubmitRegister = (e) => {
        console.log(e,
            this.state.firstName,
            this.state.lastName,
            this.state.login,
            this.state.password
        );
        this.state.onRegister(
            e,
            this.state.firstName,
            this.state.lastName,
            this.state.login,
            this.state.password
        );
    }
    render () {
        return (
            <div>
                <header>
                    <title>Programtastic - Create Account</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="Register.css" />
                </header>
                <div className="body">
                    <div className="main">
                        <h2>Create Account</h2>
                        <h3>Almost there, fill in the information below and you'll be programming with Programtastic!</h3>
                        <form onSubmit={this.onSubmitRegister}>
                            <label htmlFor="firstname lastname">Full Name</label>
                            <br/>
                            <div className="inputstack">
                            <input className="inputfield stacked" type="text" id="firstname" name="firstName" placeholder="First Name" onChange={this.onChangeHandler}/>
                            <input className="inputfield stacked" type="text" id="lastname" name="lastName" placeholder="Last Name" onChange={this.onChangeHandler}/>
                            </div>
                            <label htmlFor="uername">Username</label>
                            <br/>
                            <input className="inputfield" type="text" id="username" name="login" placeholder="Username" onChange={this.onChangeHandler}/>
                            <br/>
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input className="inputfield" type="text" id="email" name="email" placeholder="Email" onChange={this.onChangeHandler}/>
                            <br/>
                            <label htmlFor="password passwordconfirm">Password</label>
                            <br/>
                            <input className="inputfield" type="password" id="password" name="password" placeholder="Password" onChange={this.onChangeHandler}/>
                            <input className="inputfield spaced" type="password" id="passwordconfirm" name="passwordconfirm" placeholder="Confirm Password" onChange={this.onChangeHandler}/>
                            <br/>
                            <input className="inputsubmit" type="submit" id="submit" value="Create Account"/>
                            <p>Already have an account? <a href="./login">Login Now!</a></p>
                        </form>
                        <div className="accentObject1" />
                        <div className="accentObject2" />
                        <div className="accentObject3" />
                        <footer>
                            &copy;2024 Programtastic All rights reserved
                        </footer>
                    </div>
                    <section>

                    </section>
                </div>
            </div>
        );
    };
}

export default Register;