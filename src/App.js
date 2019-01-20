import React, { Component } from 'react';
import './App.css';

import AlbumFetcher from './containers/AlbumFetcher/AlbumFetcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumFetcher />
      </div>
    );
  }
}

export default App;
