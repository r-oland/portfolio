// Components==============
import { faSpinnerThird } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '../Hero.module.scss';
// =========================

export default function Loading() {
  return (
    <FontAwesomeIcon icon={faSpinnerThird} spin className={styles.loader} />
  );
}
