import React, { Component } from 'react';
import './App.css';
import background from '../static/background.jpg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

console.log(background)

class App extends Component {
  render(){
    return (
      <div className="App">
       <div className = "links">
          <div className = "links-wrapper">
            <div className = "profile">
              <a href = "/"> Personal Profile </a>
            </div>
            <div className = "artist">
              <a href = "/top-artists"> Artists </a>
            </div>
            <div className = "tracks">
              <a href = "/top-tracks"> Tracks </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 
