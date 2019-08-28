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
            type: 'tracks'
        }
    }
    componentWillMount() {
        this.getTopArtists();
    }
    getTopArtists() {
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getMyTopArtists({'limit': 50, /*'time_range': 'medium_term'*/})
            .then((data) => {
                let tempItems = this.state.items;
                tempItems = data.items;
                this.setState({
                    items: tempItems,
                    type: 'artists',
                });
            }, function(err) {
                console.error(err);
            });
    }
    getTopTracks() {
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getMyTopTracks({'limit': 50, 'time_range': 'medium_term'})
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
    addTracksToPlaylist() {
        spotifyApi.getUserPlaylists()
            .then((data) => {
                console.log(data.items);
                console.log(data.items[0].name);
                let uri_arr = data.items[0].uri.split(':');
                let playListID = uri_arr[2];
                let trackURIs = [];
                if(this.state.type === "recent") {
                    this.state.items.map((item) => {
                        trackURIs.push(item.track.uri);
                    });
                }
                else{
                    this.state.items.map((item) => {
                        trackURIs.push(item.uri);
                    });
                };
                console.log(playListID);
                console.log(trackURIs);
                spotifyApi.addTracksToPlaylist(playListID, trackURIs);
            });
    }
    makePlayList() {
        spotifyApi.getMe()
            .then((data) => {
                let uri = data.uri;
                let uri_arr = uri.split(':');
                let user_id = uri_arr[2];
                let options = {
                                "name": "Custom Playlist",
                                "description": "New playlist description",
                                "public": false
                              };
                spotifyApi.createPlaylist(user_id, options)
                    .then(() => {
                        this.addTracksToPlaylist(user_id);
                    });
            }, function(err) {
                console.error(err);
            });
    }
    render() {
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
                            <button onClick = {() => this.makePlayList()}> MAKE PLAYLIST </button>
                        </span>
                        <button> All Time </button>
                        <button> Past 6 Months </button>
                        <button> Past Month </button>
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