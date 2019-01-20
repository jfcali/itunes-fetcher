import React from 'react';
import styles from './Catalogue.module.css';

import Album from './Album/Album';

const getVisibleAlbums = ({
  albums,
  albumsPerPage,
  totalPages,
  currentPage
}) => {
  const longList = [...albums];
  let albumShortlist = [];

  if (longList && longList.length < albumsPerPage) {
    albumShortlist = [...longList];
    console.log('list is less than total albums per page, so no nav is needed');

    return albumShortlist;
  }

  if (totalPages === currentPage) {
    albumShortlist = [...longList].splice(
      (currentPage - 1) * albumsPerPage,
      longList.length + 1
    );
    console.log('last page');
  } else {
    console.log('intermediate');
    albumShortlist = [...longList].splice(
      (currentPage - 1) * albumsPerPage,
      (currentPage - 1) * albumsPerPage + albumsPerPage
    );
  }
  return albumShortlist;
};

const Catalogue = props => {
  const albumShortlist = getVisibleAlbums({
    albums: props.albums,
    albumsPerPage: props.albumsPerPage,
    totalPages: props.totalPages,
    currentPage: props.currentPage
  });
  return (
    <div
      className={styles.Catalogue}
      style={{
        marginTop: props.sticky ? '100px' : null
      }}
    >
      {albumShortlist.map(a => {
        const { artist, album, imageUrl, id } = a;
        return (
          <Album key={id} artist={artist} album={album} imageUrl={imageUrl} />
        );
      })}
    </div>
  );
};

export default Catalogue;
