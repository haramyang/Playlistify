import React, {Component} from 'react';

let counter = 0;
class Item extends Component { 
	render() {
		let images = [];
		let name = "";
		let url = "";
		switch(this.props.type) {
			case 'tracks':
				images = this.props.item.album.images;
				name = this.props.item.name;
				url = this.props.item.external_urls.spotify;
				break;
			case 'artists':
				images = this.props.item.images;
				name = this.props.item.name;
				url = this.props.item.external_urls.spotify;
				break;
			case 'recent':
				images = this.props.item.track.album.images;
				name = this.props.item.track.name;
				url = this.props.item.track.external_urls.spotify;
			default:
				break;
		}
		console.log("ITEM" + counter);
		console.log(name);
		console.log(this.props.item);
		counter++;
		return(
			<div className = "item">
				<a href = {url}> <p>{name} </p></a>
				<img src = {images[0].url} style = {{height: 100, width: 100}} />
			</div>
		)
	}
}

export default Item;