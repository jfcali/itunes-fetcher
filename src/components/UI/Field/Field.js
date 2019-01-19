import React from 'react';
import styles from './Field.module.css';

const field = props => {
  console.log(styles);
  return <input className={styles.Field} {...props} />;
};

export default field;
