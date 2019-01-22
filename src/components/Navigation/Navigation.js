import React from 'react';
import styles from './Navigation.module.css';

import Button from '../UI/Button/Button';

const navigation = props => {
  const additionalStyles = {
    padding: '10px 20px',
    boxSizing: 'border-box',
    margin: '0px 20px'
  };
  return (
    <div className={styles.Navigation}>
      <Button
        style={additionalStyles}
        onClick={() => props.goTo({ index: props.currentPage - 1 })}
      >
        PREV
      </Button>
      {`${props.currentPage} / ${props.totalPages}`}
      <Button
        style={additionalStyles}
        onClick={() => props.goTo({ index: props.currentPage + 1 })}
      >
        NEXT
      </Button>
    </div>
  );
};

export default navigation;
