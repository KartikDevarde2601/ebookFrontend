// LoadingSpinner.js
import React from 'react';
import { useSelector } from 'react-redux';
import  styles from './loading.module.css';

const LoadingSpinner = () => {
  const isLoading = useSelector(state => state.books.isLoading);

  if (!isLoading) {
    return null; // Don't render the loading component if isLoading is false
  }

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
