import React from 'react';
import styles from './Navigation.module.css';

import Button from '../UI/Button/Button';
import ToggleView from '../ToggleView/ToggleView';

const navigation = props => {
  const additionalStyles = {
    boxSizing: 'border-box'
  };
  return (
    <div className={styles.Navigation}>
      <div className={styles.ButtonContainer}>
        {props.totalPages > 1 ? (
          <Button
            style={additionalStyles}
            onClick={() => props.goTo({ index: props.currentPage - 1 })}
          >
            PREV
          </Button>
        ) : null}
        <p className={styles.CurrentPage}>{`${props.currentPage} / ${
          props.totalPages
        }`}</p>
        {props.totalPages > 1 ? (
          <Button
            style={additionalStyles}
            onClick={() => props.goTo({ index: props.currentPage + 1 })}
          >
            NEXT
          </Button>
        ) : null}
      </div>
      <ToggleView clicked={props.toggleViewMode}>TOGGLE</ToggleView>
    </div>
  );
};

export default navigation;
