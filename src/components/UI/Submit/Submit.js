import React from 'react';
import styles from './Submit.module.css';

const submit = props => {
  return <button className={styles.Submit}>{props.children}</button>;
};

export default submit;
