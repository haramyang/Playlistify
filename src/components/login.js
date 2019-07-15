import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className = "loginPage">
                <div className = "name-wrapper">
                    <div className = "name">
                        <h1> Spotifavorify </h1>
                    </div>
                </div>
                <div className = "login-wrapper">
                    <a href = "http://localhost:8888">
                        <button type="button" className = "login">
                            <p> Login </p>
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Login