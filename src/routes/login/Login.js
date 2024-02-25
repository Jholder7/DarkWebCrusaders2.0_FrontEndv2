import React from "react";
import "./Login.css"

class Login extends React.Component {
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
                        <form>
                            <label htmlFor="user">Username or Email</label>
                            <br />
                            <input className="inputfield" type="text" id="user" name="user" placeholder="Username or Email" />
                            <br />
                            <label htmlFor="pass">Password</label>
                            <br />
                            <input className="inputfield" type="password" id="pass" name="pass" placeholder="Password" />
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