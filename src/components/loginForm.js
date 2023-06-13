import React from "react"
export default function Login() {
    return (
        <div className="loginform">
            <h3>Login</h3>
            <form>
                <p>
                    <input type="text" placeholder="username"/>
                </p>
                <p>
                    <input type="password" placeholder="password"/>
                </p>
                <button className="button">Login</button>

                <p className="other">Or login using</p>

                
                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div> 
            </form>
        </div>
    );
}

