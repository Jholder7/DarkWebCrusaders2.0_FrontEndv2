import React from "react";
import "./Login.css"
import {request, setAuthToken} from "../../axios_helper";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            username: "",
            password: "",
        };
    }

    onLogin = (e) => {
        e.preventDefault();
        request(
            "POST",
            "api/v1/login",
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then((response) => {
            console.log(e, this.state.username, this.state.password)
            setAuthToken(response.data.token);
            window.location.replace("/account");
        }).catch((error) => {
            //Debug data should change later!
            // Display the actual issue such as invalid username of password on webpage
            console.log(error, this.state.username, this.state.password)
        });
    }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <header>
                    <title>Programtastic - Login</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                        rel="stylesheet"/>
                    <link rel="stylesheet" href="Login.css"/>
                </header>
                <div className="body">
                    <main className="main">
                        <h2>Login</h2>
                        <h3>Unlock the power of Programtastic and get to typing!</h3>
                        <form onSubmit={this.onLogin}>
                            <label htmlFor="loginName">Username or Email</label>
                            <br />
                            <input className="inputfield" type="text" id="loginName" name="username" placeholder="Username or Email" onChange={this.onChangeHandler}/>
                            <br />
                            <label htmlFor="loginPassword">Password</label>
                            <br />
                            <input className="inputfield" type="password" id="loginPassword" name="password" placeholder="Password" onChange={this.onChangeHandler}/>
                            <p><a href="./recovery">Forget Password?</a></p>
                            <br />
                            <input className="inputsubmit" type="submit" id="submit" value="Login" />
                            <p>Need an account? What are you waiting on, <a href="./register">Register Now!</a></p>
                        </form>
                        <div className="accentObject1"/>
                        <div className="accentObject2"/>
                        <div className="accentObject3"/>
                        <footer>
                            &copy;2024 Programtastic All rights reserved
                        </footer>
                    </main>
                    <section>
                    </section>
                </div>
            </div>
        );
    }
}
    export default Login;