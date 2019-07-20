import React, { Component } from 'react';
import '../css/topTracks.css';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router';

class TopTracks extends Component {
	render() {
		if(sessionStorage.hasOwnProperty('jwt')) {
			return (
				<div>
					<Button variant="contained" color="primary">
						Top Tracks
					</Button>
				</div>
			);
		}
		else {
			return <Redirect to = '/login' />
		}
	}
}

export default TopTracks