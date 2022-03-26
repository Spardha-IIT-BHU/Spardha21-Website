import React from 'react';
import styles from './Spinner.module.css';
function Spinner() {
  return (
    <>
      <div className={`${styles['cover-spin']}`}></div>
    </>
  );
}

export default Spinner;
