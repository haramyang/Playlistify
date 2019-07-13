import React, { Component } from 'react';
import './App.css';
import background from '../static/background.jpg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render(){
    return (
      <div className="App">
       <div className = "links">

          <div className = "name-wrapper">
              {/*
            <div className = "App-name">
              <p> Spotifavorify </p>
            </div>
            */}
          </div>
          <div className = "login-wrapper">
            <button type="button" className = "login">
              <p> Login </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 
