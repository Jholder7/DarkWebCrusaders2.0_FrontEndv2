import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./App.css";

// Import pages from ./routes
import Application from "./routes/application/Application";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Recovery from "./routes/recovery/Recovery";
import AuthContent from "./components/AuthContent/AuthContent";
import {request, setAuthToken} from "./axios_helper";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToShow: "base",
        }
    }

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }
        ).then((response) => {
            this.setState({pageToShow: "needsauth"})
            setAuthToken(response.data.token);
        }).catch((error) => {
            this.setState({pageToShow: "base"})
        });
    }

    onRegister = (e, firstName, lastName, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/register",
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }
        ).then((response) => {
            this.setState({pageToShow: "authContent"})
            setAuthToken(response.data.token);
        }).catch((error) => {
            this.setState({pageToShow: "base"})
        });
    }

    login = () => {
        this.setState({pageToShow: "login"})
    }

    register = () => {
        this.setState({pageToShow: "register"})
    }

    render() {
        return (
            <div>
                <div className="App">
                    {this.state.pageToShow === "base" && <div style={{"color": "black"}}>
                        Base Page Needs designing
                        <button onClick={() => {this.register()}} >Login</button>
                    </div>}
                    {this.state.pageToShow === "application" && <Application/> }
                    {this.state.pageToShow === "login" && <Login onLogin={this.onLogin} /> }
                    {this.state.pageToShow === "register" && <Register onRegister={this.onRegister} />}
                    {this.state.pageToShow === "recovery" && <Recovery/> }
                    {this.state.pageToShow === "authContent" && <AuthContent/> }
                </div>
            </div>
        );
    }
}

export default App;

// <Router>
//</Router>
{/*<Routes>*/}
{/*    <Route*/}
{/*        exact*/}
{/*        path="/login"*/}
{/*        element={<Login />}*/}
{/*    ></Route>*/}
{/*    <Route*/}
{/*        exact*/}
{/*        path="/register"*/}
{/*        element={<Register />}*/}
{/*    ></Route>*/}
{/*    <Route*/}
{/*        exact*/}
{/*        path="/recovery"*/}
{/*        element={<Recovery />}*/}
{/*    ></Route>*/}
{/*    <Route*/}
{/*        exact*/}
{/*        path="/application"*/}
{/*        element={<Application />}*/}
{/*    ></Route>*/}
{/*    <Route*/}
{/*        exact*/}
{/*        path="/needsAuth"*/}
{/*        element={<AuthContent />}*/}
{/*    ></Route>*/}
{/*    <Route*/}
{/*        path="*"*/}
{/*        element={<div style={{"color": "black"}}>Base Page Needs designing*/}
{/*                <button></button></div>}*/}
{/*    ></Route>*/}
{/*</Routes>*/}