import React from 'react';
import styles from './SearchBar.module.css';

import Field from '../UI/Field/Field';
import Clear from '../UI/Clear/Clear';
import Submit from '../UI/Submit/Submit';

const searchBar = props => {
  return (
    <header className={styles.SearchBar}>
      <Field type="text" />
      <Clear disabled>x</Clear>
      <Submit>SEARCH</Submit>
    </header>
  );
};

export default searchBar;
