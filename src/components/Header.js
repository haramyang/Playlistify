import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const style = {
	background: '#E1D7D6',
	opacity: '0.8'
}

class Header extends Component {
	render() {
		return(
			<AppBar style = {style}>
          	  <Toolbar>
				<div className = "header-wrapper">
		          <div className = "logo"> 
		            <div><a href = '/'><i className="large material-icons" style={{fontSize: "50px"}}>library_music</i></a></div>
		          </div>
		          <div className = "nav-bar">
		            <div><a href = "/" className = "profile"><p> Personal Profile </p></a></div>
		            <div><a href = "/top-artists" className = "artist"><p> Artists </p></a></div>
		            <div><a href = "/top-tracks" className = "tracks"><p> Tracks </p></a></div>
		          </div>
		        </div>
		      </Toolbar>
		    </AppBar>
		);
	}
}

export default Header