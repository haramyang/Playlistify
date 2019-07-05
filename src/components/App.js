import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className = "App-header">
          <div className = "header-wrapper">
            <span className = "logo">Spotifavorify SKRRTTT</span>
            <span className = "nav-bar">
              <a href = "/" className = "profile"> Personal Profile </a>
              <a href = "/top-artists" className = "artist"> Artists </a>
              <a href = "/top-tracks" className = "tracks"> Tracks </a>
            </span>
          </div>
        </header>

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
