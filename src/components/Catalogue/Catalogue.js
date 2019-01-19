import React from 'react';
import styles from './Catalogue.module.css';

import Album from './Album/Album';

const Catalogue = props => {
  return (
    <div className={styles.Catalogue}>
      <Album />
    </div>
  );
};

export default Catalogue;
