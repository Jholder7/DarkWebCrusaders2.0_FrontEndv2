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

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul style={{"display": "none"}} className="App-header">
                        <li>
                            <Link to="/app">Application</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route
                            exact
                            path="/login"
                            element={<Login />}
                        ></Route>
                        <Route
                            exact
                            path="/register"
                            element={<Register />}
                        ></Route>
                        <Route
                            exact
                            path="/recovery"
                            element={<Recovery />}
                        ></Route>
                        <Route
                            exact
                            path="/application"
                            element={<Application />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;