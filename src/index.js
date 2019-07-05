import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App.js';
import TopArtists from './components/topArtists.js';
import TopTracks from './components/topTracks.js';

const routing = (
	<Router>
		<div>
			<Route exact path = '/' component = {App} />
			<Route path = '/top-artists' component = {TopArtists} />
			<Route path = '/top-tracks' component = {TopTracks} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
