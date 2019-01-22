import React from 'react';
import styles from './Submit.module.css';

import Button from '../Button/Button';
const submit = props => {
  return (
    <Button
      tabIndex={0}
      onClick={props.clicked}
      className={styles.Submit}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default submit;
