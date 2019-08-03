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
            items: []
        }
    }
    componentWillMount() {
        this.getTopTracks();
    }
    getTopTracks() {
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getMyTopTracks({'limit': 50})
          .then((data) => {
            let tempItems = this.state.items;
            tempItems = data.items;
            this.setState({
                items: tempItems
            });
          }, function(err) {
            console.error(err);
          });
    }
    render() {
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
                            <button> Tracks </button>
                            <button> Artists </button>
                            <button> Recent </button>
                        </span>
                    </div>
                    <div className = "content">
                        <div className = "data">
                            {this.state.items.map((item,key) =>
                                /*
                                (<div className = "item" key = {item.id}>
                                    <p> {item.name} </p>
                                </div>),
                                 */
                                <Item item={item} key={item.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display