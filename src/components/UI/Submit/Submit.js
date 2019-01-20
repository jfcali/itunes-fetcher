import React from 'react';
import styles from './Submit.module.css';

const submit = props => {
  return (
    <button
      tabIndex={0}
      onClick={props.clicked}
      className={styles.Submit}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default submit;
