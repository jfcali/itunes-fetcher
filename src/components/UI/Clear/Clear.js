import React from 'react';
import styles from './Clear.module.css';

const clear = props => {
  return (
    <button
      tabIndex={0}
      className={styles.Clear}
      onClick={props.clickhandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default clear;
