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
      {props.totalPages > 1 ? (
        <Button
          style={additionalStyles}
          onClick={() => props.goTo({ index: props.currentPage - 1 })}
        >
          PREV
        </Button>
      ) : null}
      {`${props.currentPage} / ${props.totalPages}`}
      {props.totalPages > 1 ? (
        <Button
          style={additionalStyles}
          onClick={() => props.goTo({ index: props.currentPage + 1 })}
        >
          NEXT
        </Button>
      ) : null}
    </div>
  );
};

export default navigation;
