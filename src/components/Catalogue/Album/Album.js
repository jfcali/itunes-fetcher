import React from 'react';
import styles from './Album.module.css';
import PropTypes from 'prop-types';

const ellipsis = ({ text = '', tail = '...', length = 100 }) => {
  return text.length <= length
    ? text
    : [...text].splice(0, length).join('') + tail;
};

const album = props => {
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
      <div>
        <h1 className={styles.AlbumName}>
          {ellipsis({ text: props.album, length: 20 })}
        </h1>
        <p className={styles.Artist}>
          {ellipsis({ text: props.artist, length: 50 })}
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
