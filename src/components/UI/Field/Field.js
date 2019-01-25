import React from 'react';
import styles from './Field.module.css';

const field = props => {
  return (
    <input className={styles.Field} {...props} aria-label={props.placeholder} />
  );
};

export default field;
