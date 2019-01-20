import React from 'react';
import styles from './Album.module.css';

const ellipsis = ({ text, tail = '...', length = 100 }) => {
  console.log(text);
  if (!text) return null;
  return text.length <= length
    ? text
    : [...text].splice(length).join('') + tail;
};

const album = props => {
  return (
    <div className={styles.Album}>
      <img
        src={props.imageUrl}
        className={styles.Cover}
        alt={props.album}
        longdesc={props.album}
      />
      <div>
        <h1 className={styles.AlbumName}>{props.album}</h1>
        <p className={styles.Artist}>{ellipsis({ text: props.artist })}</p>
      </div>
    </div>
  );
};

export default album;
