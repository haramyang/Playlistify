import React, {Component} from 'react';
let counter = 0;
class Item extends Component { 
	render() {
		let images = [];
		let name = "";
		let link;
		let html;
		switch(this.props.type) {
			case 'tracks':
				images = this.props.item.album.images;
				name = this.props.item.name;
				link = this.props.item.external_urls.spotify;
				break;
			case 'artists':
				images = this.props.item.images;
				name = this.props.item.name;
				link = this.props.item.external_urls.spotify;
				break;
			case 'recent':
				images = this.props.item.track.album.images;
				name = this.props.item.track.name;
				link = this.props.item.track.external_urls.spotify;
			default:
				break;
		}
		console.log("ITEM" + counter);
		console.log(name);
		console.log(this.props.item);
		console.log(images[0].url);
		counter++;
		return(
			<div className = "item">
				<div className = "item-first-row">
					<span> <a href = {link}> <p> {name} </p></a> </span>
				</div>
				<div className = "item-second-row">
					<img src = {images[0].url} style = {{height: 100, width: 100}} />
				</div>
			</div>
		)
	}
}

export default Item;