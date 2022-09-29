/* eslint-disable @next/next/no-img-element */
// Components==============
import React from 'react';
import styles from './Cursor.module.scss';
// =========================

export default function Cursor() {
  return (
    <div className={styles.wrapper} id="cursor">
      <img src="/images/chevron-right-white.svg" alt="cursor" />
    </div>
  );
}
