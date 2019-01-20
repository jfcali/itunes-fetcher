import React from 'react';
import styles from './Navigation.module.css';

const navigation = props => {
  return (
    <div className={styles.Navigation}>
      <button onClick={() => props.goTo({ index: props.currentPage - 1 })}>
        PREV
      </button>
      {`${props.currentPage} / ${props.totalPages}`}
      <button onClick={() => props.goTo({ index: props.currentPage + 1 })}>
        NEXT
      </button>
    </div>
  );
};

export default navigation;
