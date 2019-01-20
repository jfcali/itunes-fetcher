import React from 'react';
import styles from './Catalogue.module.css';

import Album from './Album/Album';

const Catalogue = props => {
  return (
    <div
      className={styles.Catalogue}
      style={{
        marginTop: props.sticky ? '100px' : null
      }}
    >
      {props.albums.map(a => {
        const { artist, album, imageUrl, id } = a;
        return (
          <Album key={id} artist={artist} album={album} imageUrl={imageUrl} />
        );
      })}
      <Album />
    </div>
  );
};

export default Catalogue;
