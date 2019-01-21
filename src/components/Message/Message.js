import React from 'react';
import styles from './Message.module.css';

const message = props => {
  const messageText = props.loading ? (
    <p className={[styles.Loading, styles.Text].join(' ')}>Searching!</p>
  ) : props.error ? (
    <div className={styles.MessageArea}>
      <p className={[styles.Error, styles.Text].join(' ')}>Oops!</p>
      <p className={[styles.Error, styles.Text].join(' ')}>Something</p>
      <p className={[styles.Error, styles.Text].join(' ')}>f*cked</p>
      <p className={[styles.Error, styles.Text].join(' ')}>up</p>
      <p className={styles.ErrorMini}>TRY AGAIN LATER</p>
    </div>
  ) : (
    <div className={styles.MessageArea}>
      <p className={styles.Text}>Search</p>
      <p className={styles.Text}>for</p>
      <p className={styles.Text}>some</p>
      <p className={styles.Text}>albums!</p>
    </div>
  );

  return messageText;
};

export default message;
