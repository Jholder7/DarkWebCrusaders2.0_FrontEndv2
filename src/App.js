import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import "./App.css";

// Import pages from ./routes
import Application from "./routes/application/Application";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Recovery from "./routes/recovery/Recovery";
import AuthContent from "./components/AuthContent/AuthContent";
import Account from "./routes/account/Account";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToShow: "base",
        }
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route
                        path="*"
                        element={<div>404, page not found</div>}
                    ></Route>
                    <Route
                        exact
                        title="Programtastic - Login"
                        path="/login"
                        element={<Login/>}
                    ></Route>
                    <Route
                        exact
                        title="Programtastic - Register"
                        path="/register"
                        element={<Register/>}
                    ></Route>
                    <Route
                        exact
                        title="Programtastic - Recovery"
                        path="/recovery"
                        element={<Recovery/>}
                    ></Route>
                    <Route
                        exact
                        title="Programtastic - App"
                        path="/application"
                        element={<Application/>}
                    ></Route>
                    <Route
                        exact
                        title="Programtastic - Debug"
                        path="/needsAuth"
                        element={<AuthContent/>}
                    ></Route>
                    <Route
                        exact
                        title="Programtastic - Projects"
                        path="/account"
                        element={<Account/>}
                    ></Route>
                    <Route
                        exact
                        path="/"
                        element={
                            <div style={{"color": "black"}}>
                                Base Page Needs designing
                                <button onClick={() => {
                                    window.location.replace("/login");
                                }}>Login</button>
                                <button onClick={() => {
                                    window.location.replace("/register");
                                    this.register()
                                }}>Register
                                </button>
                            </div>
                        }
                    ></Route>
                </Routes>
            </Router>
        );
    }
}

export default App;