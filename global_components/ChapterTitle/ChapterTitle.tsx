// Components==============
import React from 'react';
import styles from './ChapterTitle.module.scss';
// =========================

export default function ChapterTitle({
  name,
  color,
}: {
  name: string;
  color: 'grey' | 'white';
}) {
  return (
    <div className={`${styles.wrapper} ${styles[color]}`}>
      <p>{name}</p>
      <div className={styles.bar} />
    </div>
  );
}
