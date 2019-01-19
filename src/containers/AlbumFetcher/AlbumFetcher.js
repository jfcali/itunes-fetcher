import React, { Component } from 'react';
import styles from './AlbumFetcher.module.css';

import SearchBar from '../../components/SearchBar/SearchBar';
import Catalogue from '../../components/Catalogue/Catalogue';

class AlbumFetcher extends Component {
  render() {
    return (
      <div className={styles.AlbumFetcher}>
        <SearchBar />
        <Catalogue />
      </div>
    );
  }
}

export default AlbumFetcher;
