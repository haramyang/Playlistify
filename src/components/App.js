import React from 'react';
import logo from './logo.svg';
import TopArtists from './topArtists.js';
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

      <div className="topArtist">
        <p> Your Top Artist </p>
      </div>

      <div className = "footer">
        <p> footer here </p>
      </div>
    </div>
  );
}

export default App;
