import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style = {
    height: '20vh',
    background : '#88B9D6',
};

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className = "header">
          <AppBar style={style}>
            <Toolbar>
              <div className = "header-wrapper">
                <div className = "logo"> 
                  <div><a href = '/'><i className="large material-icons" style={{fontSize: '50px'}}>library_music</i></a></div>
                </div>
                <div className = "nav-bar">
                  <div><a href = "/" className = "profile"> Personal Profile </a></div>
                  <div><a href = "/top-artists" className = "artist"> Artists </a></div>
                  <div><a href = "/top-tracks" className = "tracks"> Tracks </a></div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div className = "content">
          <div className = "content-wrapper">
            <a href = "/" className = "profile"> Personal Profile </a>
            <a href = "/top-artists" className = "artist"> Artists </a>
            <a href = "/top-tracks" className = "tracks"> Tracks </a>
          </div>
        </div>

        <footer className = "App-footer">
          <div className = "footer-wrapper">
            footer
          </div>
        </footer>
      </div>
    );
  }
}

export default App; 
