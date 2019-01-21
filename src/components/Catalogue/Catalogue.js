import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Catalogue.module.css';

import Album from './Album/Album';

const catalogue = props => {
  return (
    <div
      className={styles.Catalogue}
      style={{
        marginTop: props.sticky ? '100px' : null
      }}
    >
      {props.albums && props.albums.length
        ? props.albums[props.currentPage - 1].map(a => {
            const { artist, album, imageUrl, id } = a;
            return (
              <Album
                key={id}
                artist={artist}
                album={album}
                imageUrl={imageUrl}
              />
            );
          })
        : null}
    </div>
  );
};

catalogue.propTypes = {
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

export default catalogue;
