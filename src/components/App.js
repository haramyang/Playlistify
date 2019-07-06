import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/*}
        <header className = "App-header">
          <div className = "header-wrapper">
            <div className = "logo"> 
              <div><a href = '/'><i className="large material-icons" style={{fontSize: '50px'}}>library_music</i></a></div>
            </div>
            <div className = "nav-bar">
              <div><a href = "/" className = "profile"><p> Personal Profile </p></a></div>
              <div><a href = "/top-artists" className = "artist"><p> Artists </p></a></div>
              <div><a href = "/top-tracks" className = "tracks"><p> Tracks </p></a></div>
            </div>
          </div>
        </header>
        */}

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
