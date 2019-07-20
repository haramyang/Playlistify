import React, { Component } from 'react';
import '../css/App.css';
import Spotify from 'spotify-web-api-js';
import { Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import background from '../../static/background.jpg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from "./Header";
import Login from './login';
import Recent from "./recent";
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
            console.log("Received Token");
            this.state = {
                loggedIn: true,
            }
            spotifyApi.setAccessToken(token);
            window.localStorage.setItem("jwt", token);
        }
        else {
            this.state = {
                loggedIn: false,
            }
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
        if(this.state.loggedIn !== true) {
            console.log("NOT LOGGED IN SO REDIRECTING")
            return <Redirect to = '/login' />
        }
        else {
            console.log("LOGGED IN");
            return (
                <div className="App">
                    <header id = "App-header">
                        <Route path='/top-artists' component={TopArtists} />
                        /*
                        <Header />
                        <TopArtists />
                         */
                    </header>
                </div>
            );
        }
    }
}

export default App; 
