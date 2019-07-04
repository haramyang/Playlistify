import React from 'react';
import logo from './logo.svg';
import TopArtists from './topArtists.js';
import FeaturedArtist from './featuredArtist.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        Your favorite Artists and Tracks
      </header>

      <div className = "topArtists">
        <div className = "favArtists">
          <p> Your Favorite Artists </p>
        </div>
        <TopArtists />
      </div>

      <div className="featuredArtist">
        <p> Your Top Artist </p>
        <FeaturedArtist />
      </div>

      <div className = "suggested">
        <p> Suggested Artists and Tracks </p>
      </div>
    </div>
  );
}

export default App;
