import React, { Component } from 'react';
import './topTracks.css';
import Button from '@material-ui/core/Button';

class TopTracks extends Component {
	render() {
		return (
			<div>
				<Button variant="contained" color="primary">
			      Top Tracks
			    </Button>
			</div>
		);
	}
}

export default TopTracks