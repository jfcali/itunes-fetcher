import React from 'react';
import styles from './Clear.module.css';
import Button from '../Button/Button';

const clear = props => {
  return (
    <Button
      tabIndex={0}
      className={styles.Clear}
      onClick={props.clickhandler}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default clear;
