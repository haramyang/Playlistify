import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import background from '../static/background.jpg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from "./Header";

const spotifyApi = new Spotify();

class App extends Component {
    constructor() {
        super();
        // stores access token and refresh token
        this.params = this.getHashParams();
        this.state = {
            loggedIn: this.params.access_token ? true : false
        };

        if(this.params.access_token) {
            spotifyApi.setAccessToken(this.params.access_token);
        }
    }
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    render(){
        return (
            <div className="App">
                <header id = "App-header">
                    <Header loggedIn = {this.state.loggedIn} />
                </header>

                <div className = "links">
                    <div className = "name-wrapper">
                    {/*
                    <div className = "App-name">
                    <p> Spotifavorify </p>
                    </div>
                    */}
                    </div>
                    <div className = "login-wrapper">
                        <a href = "http://localhost:8888">
                            <button type="button" className = "login">
                                <p> Login </p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 
