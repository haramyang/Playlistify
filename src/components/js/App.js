import React, { Component } from 'react';
import '../css/App.css';
import Spotify from 'spotify-web-api-js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import background from '../static/background.jpg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from "./Header";
import Login from './login';
import Profile from "./profile";
import TopArtists from "./topArtists";
import TopTracks from "./topTracks";
import { createBrowserHistory } from "history";
const history = createBrowserHistory()

const spotifyApi = new Spotify();

class App extends Component {
    constructor() {
        super();
        // stores access token and refresh token
        const params = this.getHashParams();
        const token = params.access_token;
        if(token) {
            spotifyApi.setAccessToken(token);
            window.localStorage.setItem("jwt", token);
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
                    <Header />
                    <TopArtists />
                </header>
            </div>
        );
    }
}

export default App; 
