import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'

const style = {
	background: '#E1D7D6',
	opacity: '0.8',
	height: '70px',
}

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home: '/',
			profile: '/',
			topArtists: '/',
			topTracks: '/'
		}
	}

	componentDidMount() {
		if(window.localStorage.getItem('jwt') !== null) {
			this.setState({
				home: '/',
				profile: '/profile',
				topArtists: '/top-artists',
				topTracks: '/top-tracks'
			})
		}
	}

	render() {
		return(
			<AppBar style = {style}>
          	  <Toolbar>
				<div className = "header-wrapper">
		          <div className = "logo"> 
		            <div><a href = {this.state.recent}><i className="large material-icons" style={{fontSize: "50px"}}>library_music</i></a></div>
		          </div>
		          <div className = "nav-bar">
		            <div className = "profile"><Link to = '/home'><p> Recent </p></Link></div>
		            <div className = "artist"><Link to = '/top-artists'><p> Artists </p></Link></div>
		            <div className = "tracks"><Link to = '/top-tracks'><p> Tracks </p></Link></div>
		          </div>
		        </div>
		      </Toolbar>
		    </AppBar>
		);
	}
}

export default Header