import React from 'react';
import logo from './logo.svg';
import TopArtists from './topArtists.js';
import FeaturedArtist from './featuredArtist.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        <div className = "header-wrapper">
          <span className = "logo">Spotifavorify SKRRTTT</span>
          <span className = "nav-bar">
            <a href = "#"><span className = "profile"> Personal Profile </span></a>
            <a href = "#"><span className = "artist"> Artists </span></a>
            <a href = "#"><span className = "tracks"> Tracks </span></a> 
          </span>
        </div>
      </header>

      <div className = "content">
        <div className = "content-wrapper">
          <a href = "#" className = "profile"> Personal Profile </a>
          <a href = "#" className = "artist"> Artists </a>
          <a href = "#" className = "tracks"> Tracks </a>
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

export default App; 
