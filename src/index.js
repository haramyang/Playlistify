import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App.js';
import TopArtists from './components/topArtists.js';
import TopTracks from './components/topTracks.js';
import Header from './components/Header.js';

const routing = (
	<Router>
		<Route exact path = '/' component = {App} />
		<Route path = '/top-artists' component = {TopArtists} />
		<Route path = '/top-tracks' component = {TopTracks} />
	</Router>
)
//ReactDOM.render(<Header />, document.getElementById('App-header'));
ReactDOM.render(routing, document.getElementById('content'));
