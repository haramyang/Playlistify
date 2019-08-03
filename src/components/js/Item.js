import React, {Component} from 'react';

let counter = 0;
class Item extends Component { 
	render() {
		console.log("ITEM" + counter);
		console.log(this.props.item.name);
		console.log(this.props.item);
		counter++;
		return(
			<div className = "item">
				<a href = {this.props.item.external_urls.spotify}> <p> {this.props.item.name}</p></a>
				<img src = {this.props.item.album.images[2].url} />
			</div>
		)
	}
}

export default Item;