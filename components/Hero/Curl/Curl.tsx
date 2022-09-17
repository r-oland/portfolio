// Components==============
import React from 'react';
import styles from './Curl.module.scss';
// =========================

export default function Curl() {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 511 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M510 65.1088C499.871 70.0785 484.677 80.3906 459.353 78.527C413.771 75.1725 346.241 21.8727 373.254 15.9088C403.642 9.19974 385.915 83 330.204 83C274.493 83 231.443 1 180.796 1C130.149 1 168.134 54.6727 117.488 56.1636C66.8408 57.6545 76.9701 17.4 0.999998 24.8545"
          stroke="#bdd3cc"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
