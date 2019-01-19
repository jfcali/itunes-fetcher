import React, { Component } from 'react';
import './App.css';

import AlbumFletcher from './containers/AlbumFetcher/AlbumFetcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumFletcher />
      </div>
    );
  }
}

export default App;
