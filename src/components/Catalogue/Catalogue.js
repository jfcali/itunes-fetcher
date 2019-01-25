import React from 'react';
import PropTypes from 'prop-types';
import styles from './Catalogue.module.css';

import Album from './Album/Album';
import ToggleView from '../ToggleView/ToggleView';

const catalogue = props => {
  const classes = [styles.Catalogue];
  if (props.list) {
    classes.push(styles.ListView);
  }
  if (props.sticky) {
    classes.push(styles.Sticky);
  }
  return (
    <div className={classes.join(' ')}>
      {props.albums && props.albums.length
        ? props.albums[props.currentPage - 1].map(a => {
            const { artist, album, imageUrl, id } = a;
            return (
              <Album
                key={id}
                artist={artist}
                album={album}
                imageUrl={imageUrl}
                list={props.list}
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
