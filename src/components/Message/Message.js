import React from 'react';
import styles from './Message.module.css';

const message = props => {
  const messageText = props.loading ? (
    <div className={styles.MessageArea} style={{ textAlign: 'center' }}>
      <p className={[styles.Loading, styles.Text].join(' ')}>Searching!</p>
    </div>
  ) : props.error ? (
    <div className={styles.MessageArea}>
      <p className={[styles.Error, styles.Text].join(' ')}>Oops!</p>
      <p className={[styles.Error, styles.Text].join(' ')}>Something</p>
      <p className={[styles.Error, styles.Text].join(' ')}>went</p>
      <p className={[styles.Error, styles.Text].join(' ')}>wrong</p>
      <p className={styles.ErrorMini}>TRY AGAIN LATER</p>
    </div>
  ) : props.emptySearch ? (
    <div className={styles.MessageArea}>
      <p className={styles.Text}>No results.</p>
      <p className={styles.Text}>Try again :)</p>
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
