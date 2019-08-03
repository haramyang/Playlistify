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

export const spotifyApi = new Spotify();

class App extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            loggedIn: false,
            route: '',
        }
    }
    componentWillMount() {
        console.log("will mount");
        const params = this.getHashParams();
        const token = params.access_token;
        console.log("TOKEN", token);
        if(token) {
            console.log("Received Token");
            this.setState({
                loggedIn: true,
                route: this.props.route,
            });
            spotifyApi.setAccessToken(token);
            window.sessionStorage.setItem("jwt", token);
        }
    }
    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        console.log(window.location.hash);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    render() {
        const comp = TopArtists;
        console.log(this.state)
        if (!this.state.loggedIn) {
            console.log("NOT LOGGED IN SO REDIRECTING")
            return <Redirect to='/login'/>
        } else {
            console.log("LOGGED IN");
            return (
                <Redirect to = "/top-tracks" />
            );
        }
    }
}
export default App; 
