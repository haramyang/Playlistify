import React, {Component} from 'react';
import Header from "./Header";
import Item from './Item';
import {spotifyApi} from './App';
import '../css/display.css';
import {Redirect} from 'react-router-dom';

spotifyApi.setAccessToken(sessionStorage.getItem('jwt'));

class Display extends Component {
    constructor(props) {
        super(props);
        this.getTopTracks = this.getTopTracks.bind(this);
        this.state = {
            // will be an array of objects
            items: [],
            type: 'tracks',
        }
    }
    componentWillMount() {
        //this.getTopTracks();
    }
    getTopArtists() {
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getMyTopArtists({'limit': 50})
            .then((data) => {
                let tempItems = this.state.items;
                tempItems = data.items;
                this.setState({
                    items: tempItems,
                    type: 'artists'
                });
            }, function(err) {
                console.error(err);
            });
    }
    getTopTracks() {
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getMyTopTracks({'limit': 50})
          .then((data) => {
            let tempItems = this.state.items;
            tempItems = data.items;
            this.setState({
                items: tempItems,
                type: 'tracks'
            });
          }, function(err) {
            console.error(err);
          });
    }
    getRecentlyPlayed() {
        spotifyApi.getMyRecentlyPlayedTracks({'limit': 50})
            .then((data) => {
                let tempItems = this.state.items;
                tempItems = data.items;
                this.setState({
                    items: tempItems,
                    type: 'recent'
                });
            }, function(err) {
                console.error(err);
            });
    }
    render() {
        // TODO: add this later when you figure out recentplayplayed api
        //<button onClick = {() => this.getRecentlyPlayed()}> Recent </button>
        console.log(sessionStorage.getItem('jwt'));
        if(sessionStorage.getItem('jwt') === null) {
            return <Redirect to='/login'/>
        }
        return(
            <div className = "App">
                <div>
                    <Header />
                </div>
                <div className = "content-wrapper">
                    <div className ="options">
                        <span>
                            <button onClick = {() => this.getTopTracks()}> Tracks </button>
                            <button onClick = {() => this.getTopArtists()}> Artists </button>
                            <button onClick = {() => this.getRecentlyPlayed()}> Recent </button>
                            <button> MAKE PLAYLIST </button>
                        </span>
                    </div>
                    <div className = "content">
                        <div className = "data">
                            {this.state.items.map((item,key) =>
                                <Item item={item} key={item.id} type = {this.state.type} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display