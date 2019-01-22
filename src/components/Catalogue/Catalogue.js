import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Catalogue.module.css';

import Album from './Album/Album';

class Catalogue extends Component {
  state = {
    list: false
  };

  toggleViewMode = () => {
    this.setState(state => {
      const currentView = state.list;
      return {
        list: !currentView
      };
    });
  };
  render() {
    return (
      <div
        className={
          this.state.list
            ? [styles.Catalogue, styles.ListView].join(' ')
            : styles.Catalogue
        }
        style={{
          marginTop: this.props.sticky ? '100px' : null
        }}
      >
        <div className={styles.Toggle} onClick={this.toggleViewMode.bind(this)}>
          Toggle
        </div>
        {this.props.albums && this.props.albums.length
          ? this.props.albums[this.props.currentPage - 1].map(a => {
              const { artist, album, imageUrl, id } = a;
              return (
                <Album
                  key={id}
                  artist={artist}
                  album={album}
                  imageUrl={imageUrl}
                  list={this.state.list}
                />
              );
            })
          : null}
      </div>
    );
  }
}

Catalogue.propTypes = {
  loading: PropTypes.bool,
  sticky: PropTypes.bool,
  currentPage: PropTypes.number,
  albumsPerPage: PropTypes.number,
  albums: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        artist: PropTypes.string,
        album: PropTypes.string,
        imageUrl: PropTypes.string,
        id: PropTypes.number
      })
    )
  )
};

export default Catalogue;
