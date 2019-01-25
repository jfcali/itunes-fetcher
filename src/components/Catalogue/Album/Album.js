import React from 'react';
import styles from './Album.module.css';
import PropTypes from 'prop-types';

import { ellipsis } from '../../../utils/index';

const album = props => {
  const titleLength = props.list ? 100 : 50;
  return (
    <div
      className={
        props.list ? [styles.Album, styles.List].join(' ') : styles.Album
      }
    >
      <img
        src={props.imageUrl}
        className={styles.Cover}
        alt={props.album}
        longdesc={props.album}
      />
      <div className={styles.Info}>
        <h1 className={styles.AlbumName} title={props.album}>
          {ellipsis({ text: props.album, length: titleLength })}
        </h1>
        <p className={styles.Artist} title={props.artist}>
          {ellipsis({ text: props.artist, length: titleLength })}
        </p>
      </div>
    </div>
  );
};

album.propTypes = {
  artist: PropTypes.string,
  album: PropTypes.string,
  imageUrl: PropTypes.string
};

export default album;
