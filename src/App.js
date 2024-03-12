import React, { Component } from "react";
// Rework router later once I get the change but for now module swapping works fine. - Justin
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";
import "./App.css";

// Import pages from ./routes
import Application from "./routes/application/Application";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Recovery from "./routes/recovery/Recovery";
import AuthContent from "./components/AuthContent/AuthContent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToShow: "base",
        }
    }

    onUpdateShownPage = (pageName) => {
        // This check is to confirm we don't get invalid page state issues.
        if (["application", "login", "register", "recovery", "authContent"].find((el) => el === pageName)) {
            this.setState({pageToShow: pageName})
        }
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
                        <button onClick={() => {
                            this.login()
                        }}>Login</button>
                        <button onClick={() => {
                            this.register()
                        }}>Register
                        </button>
                    </div>}
                    {/* Make sure to add page to page transition check in this.onUpdateShownPage()*/}
                    {this.state.pageToShow === "application" && <Application/> }
                    {this.state.pageToShow === "login" && <Login onUpdateShownPage={this.onUpdateShownPage} /> }
                    {this.state.pageToShow === "register" && <Register onUpdateShownPage={this.onUpdateShownPage} />}
                    {this.state.pageToShow === "recovery" && <Recovery/> }
                    {this.state.pageToShow === "authContent" && <AuthContent/> /* <- This is an example page for debugging / testing*/}
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