import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const style = {
	background: '#E1D7D6',
	opacity: '0.8'
}

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const links = this.props.loggedIn ? {
			home: '/',
			topArtists: '/top-artists',
			topTracks: '/top-tracks'
		} : {
			home: '/',
			topArtists: '/',
			topTracks: '/'
		}
		return(
			<AppBar style = {style}>
          	  <Toolbar>
				<div className = "header-wrapper">
		          <div className = "logo"> 
		            <div><a href = {links.home}><i className="large material-icons" style={{fontSize: "50px"}}>library_music</i></a></div>
		          </div>
		          <div className = "nav-bar">
		            <div><a href = {links.home} className = "profile"><p> Personal Profile </p></a></div>
		            <div><a href = {links.topArtists} className = "artist"><p> Artists </p></a></div>
		            <div><a href = {links.topTracks} className = "tracks"><p> Tracks </p></a></div>
		          </div>
		        </div>
		      </Toolbar>
		    </AppBar>
		);
	}
}

export default Header