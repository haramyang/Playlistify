import React, {Component} from 'react';

let counter = 0;
class Item extends Component { 
	render() {
		let images = [];
		console.log(this.props.type);
		switch(this.props.type) {
			case 'tracks':
				images = this.props.item.album.images;
				break;
			case 'artists':
				images = this.props.item.images;
				break;
			default:
				break;
		}
		console.log("ITEM" + counter);
		console.log(this.props.item.name);
		console.log(this.props.item);
		counter++;
		return(
			<div className = "item">
				<a href = {this.props.item.external_urls.spotify}> <p> {this.props.item.name}</p></a>
				<img src = {images[1].url} />
			</div>
		)
	}
}

export default Item;