import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className="loadingContainer">
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Loading;
