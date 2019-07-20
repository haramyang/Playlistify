import React, { Component } from 'react';
import '../css/topArtists.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class TopArtists extends Component {
	render() {
		return (
			<div className = "TopArtists">
			  <div className = "left">
			    <Paper>
				  <div className = "artist">
				    <Typography variant="headline" component="h3">
				      Hillsong United
				    </Typography>
				    <div className="artistName">
			          <p>Hillsong United</p>
			        </div>

		          	<div className = "artistImage">
		          	  <img src='#' alt='artistImage'/>
		          	</div>

			        <div className="content-w">
			          Information about Hillsong United.
			        </div>
			        <button className="playArtist">Play Hillsong United</button>
		          </div>
		        </Paper>
			  </div>
			  <div className = "right">
			  </div>
			</div>
		);
	}
}

export default TopArtists