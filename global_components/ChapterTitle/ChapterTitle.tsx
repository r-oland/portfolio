// Components==============
import React from 'react';
import styles from './ChapterTitle.module.scss';
// =========================

export default function ChapterTitle({
  name,
  color,
  marginBottom,
}: {
  name: string;
  color: 'grey' | 'white';
  marginBottom: string;
}) {
  return (
    <div
      className={`${styles.wrapper} ${styles[color]}`}
      style={{ marginBottom }}
    >
      <p>{name}</p>
      <div className={styles.bar} />
    </div>
  );
}
