import React from 'react';
import styles from './Clear.module.css';

const clear = props => {
  return (
    <button className={styles.Clear} {...props}>
      {props.children}
    </button>
  );
};

export default clear;
