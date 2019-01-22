import React from 'react';
import styles from './Button.module.css';
const button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={[styles.Button, className].join(' ')}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default button;
