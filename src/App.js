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

// {this.state.pageToShow === "base" && <div style={{"color": "black"}}>
//     Base Page Needs designing
//     <button onClick={() => {
//         this.login()
//     }}>Login</button>
//     <button onClick={() => {
//         this.register()
//     }}>Register
//     </button>
// </div>}
// {/* Make sure to add page to page transition check in this.onUpdateShownPage()*/}
// {this.state.pageToShow === "application" && <Application/> }
// {this.state.pageToShow === "login" && <Login onUpdateShownPage={this.onUpdateShownPage} /> }
// {this.state.pageToShow === "register" && <Register onUpdateShownPage={this.onUpdateShownPage} />}
// {this.state.pageToShow === "recovery" && <Recovery/> }
// {this.state.pageToShow === "authContent" && <AuthContent/> /* <- This is an example page for debugging / testing*/}

// <Router>
//</Router>
{/*<Routes>*/
}
{/*    <Route*/
}
{/*        exact*/
}
{/*        path="/login"*/
}
{/*        element={<Login />}*/
}
{/*    ></Route>*/
}
{/*    <Route*/
}
{/*        exact*/
}
{/*        path="/register"*/
}
{/*        element={<Register />}*/
}
{/*    ></Route>*/
}
{/*    <Route*/
}
{/*        exact*/
}
{/*        path="/recovery"*/
}
{/*        element={<Recovery />}*/
}
{/*    ></Route>*/
}
{/*    <Route*/
}
{/*        exact*/
}
{/*        path="/application"*/
}
{/*        element={<Application />}*/
}
{/*    ></Route>*/
}
{/*    <Route*/
}
{/*        exact*/
}
{/*        path="/needsAuth"*/
}
{/*        element={<AuthContent />}*/
}
{/*    ></Route>*/
}
{/*    <Route*/
}
{/*        path="*"*/
}
{/*        element={<div style={{"color": "black"}}>Base Page Needs designing*/
}
{/*                <button></button></div>}*/
}
{/*    ></Route>*/
}
{/*</Routes>*/
}