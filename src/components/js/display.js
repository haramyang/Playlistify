import React, {Component} from 'react';
import Header from "./Header";
import Item from './Item';
import {spotifyApi} from './App';
import '../css/display.css';

spotifyApi.setAccessToken(sessionStorage.getItem('jwt'));

class Display extends Component {
    constructor(props) {
        super(props);
        this.getTopTracks = this.getTopTracks.bind(this);
        this.state = {
            items: []
        }
    }
    componentWillMount() {
        this.getTopTracks();
    }
    getTopTracks() {
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getMyTopTracks({'limit': 2})
          .then((data) => {
            let tempItems = this.state.items;
            tempItems.push(data.items);
            this.setState({
                items: tempItems
            });
            //console.log("ASDFASDF:", this.state.items)
            console.log(JSON.stringify(this.state.items));
            console.log(JSON.stringify(this.state.items[0][0].name));
            //console.log(JSON.stringify(this.state.items[0][0].name));
            //console.log(this.state.items[0].length)
            //console.log('Artist albums', data);
          }, function(err) {
            console.error(err);
          });
    }
    render() {
        return(
            <div>
                <Header />
                <div className = "data">
                    <button onClick = {this.getTopTracks}>
                    GET ALBUMS
                    </button>
                    {this.state.items.map((item,key) =>
                        (<div className = "item" key = {item.id}>
                            <p> {item.name} </p>
                        </div>),
                        //<Item item={item} key={item.id} />
                    )}
                </div>
            </div>
        );
    }
}

export default Display