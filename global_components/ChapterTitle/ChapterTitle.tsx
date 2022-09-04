// Components==============
import { navItems } from 'database/navItems';
import { useLocale } from 'hooks/useLocale';
import React from 'react';
import styles from './ChapterTitle.module.scss';
// =========================

export default function ChapterTitle({
  id,
  color,
  marginBottom,
}: {
  id: number;
  color: 'grey' | 'white';
  marginBottom: string;
}) {
  const { locale } = useLocale();

  return (
    <div
      className={`${styles.wrapper} ${styles[color]}`}
      style={{ marginBottom }}
    >
      <p>{navItems[id].name[locale]}</p>
      <div className={styles.bar} />
    </div>
  );
}
