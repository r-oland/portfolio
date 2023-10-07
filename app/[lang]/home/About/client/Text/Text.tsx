'use client';

// Components==============
import { user } from 'database/user';
import { useContext } from 'react';
import { AboutContext } from '../AboutContext';
import styles from './Text.module.scss';
// =========================

export default function Text({ lang }: { lang: 'nl' | 'en' }) {
  const { selectedText } = useContext(AboutContext);

  return (
    <div className={styles.text}>
      {user.about[selectedText].map((text, i) => (
        <p key={i}>{text[lang]}</p>
      ))}
    </div>
  );
}
