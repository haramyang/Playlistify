import React, {Component} from 'react';

const counter = 0;
class Item extends Component { 
	render() {
		return(
			<div className = "item">
				<p> {this.props.item.artists.name} </p>
				<p> {this.props.item.name} </p>
			</div>
		)
	}
}

export default Item;