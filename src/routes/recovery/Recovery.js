import React from "react";
import "./Recovery.css"
class Recovery extends React.Component {
    render () {
        return (
            <div>
                <header>
                    <title>Programtastic - Forgot Password</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="Recovery.css" />
                </header>
                <div className="body">
                <main className="main">
                    <h2>Forgot Password</h2>
                    <h3>Forgot the magic word? Don't worry we'll help you get it sorted! Enter your email below, if an account with that email exists we will send the instructions to get your password reset.</h3>
                    <form>
                        <label htmlFor="user">Email</label>
                        <br />
                        <input className="inputfield" type="text" id="user" name="user" placeholder="Enter your email"/>
                        <br />
                        <input className="inputsubmit" type="submit" id="submit" value="Email Reset Link"/>
                        <p>Haven't received the email? Make sure its aren't hiding from you in your junk or spam folder.</p>
                    </form>
                    <div className="accentObject1" />
                    <div className="accentObject2" />
                    <div className="accentObject3" />
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

export default Recovery;