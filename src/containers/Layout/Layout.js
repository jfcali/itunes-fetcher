import React, { Component, Fragment } from 'react';
import AlbumFetcher from '../../components/AlbumFetcher/AlbumFetcher';
import AlbumCatalogue from '../../components/AlbumCatalogue/AlbumCatalogue';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <AlbumFetcher />
        <AlbumCatalogue />
      </Fragment>
    );
  }
}

export default Layout;
