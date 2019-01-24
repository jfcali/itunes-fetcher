import React from 'react';
import styles from './ToggleView.module.css';

const ToggleView = props => {
  return (
    <div className={styles.ToggleView} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default ToggleView;
