import React, {Component} from 'react';

let counter = 0;
class Item extends Component { 
	render() {
		let images = [];
		if(this.props.artist === 1) {
			images = this.props.item.images;
		}
		else{
			images = this.props.item.album.images;
		}
		console.log("ITEM" + counter);
		console.log(this.props.item.name);
		console.log(this.props.item);
		counter++;
		return(
			<div className = "item">
				<a href = {this.props.item.external_urls.spotify}> <p> {this.props.item.name}</p></a>
				<img src = {images[2].url} />
			</div>
		)
	}
}

export default Item;