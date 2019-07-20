import React from 'react';
import ReactDOM from 'react-dom';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/js/App.js';
import Recent from './components/js/recent.js';
import TopArtists from './components/js/topArtists.js';
import TopTracks from './components/js/topTracks.js';
import Header from './components/js/Header.js';
import Login from "./components/js/login";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
	<Router>
		<Route exact path = '/' component = {Login} />
		<Route path ='/login' component = {Login} />
		<Route path = '/home' component = {App} />
		<Route path = '/profile' component = {Recent} />
		<Route path = '/top-artists' component = {TopArtists} />
		<Route path = '/top-tracks' component = {TopTracks} />
	</Router>
)

//ReactDOM.render(<Header />, document.getElementById('App-header'));
ReactDOM.render(routing, document.getElementById('content'));
