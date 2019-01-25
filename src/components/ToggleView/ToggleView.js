import React from 'react';
import styles from './ToggleView.module.css';
import Button from '../UI/Button/Button';

const ToggleView = props => {
  return (
    <Button className={styles.ToggleView} onClick={props.clicked}>
      {props.children}
    </Button>
  );
};

export default ToggleView;
