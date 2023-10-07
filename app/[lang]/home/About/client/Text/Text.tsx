'use client';

// Components==============
import React, { useContext } from 'react';
import { LangContext } from 'app/[lang]/layout/ClientWrapper';
import { user } from 'database/user';
import styles from './Text.module.scss';
import { AboutContext } from '../AboutContext';
// =========================

export default function Text() {
  const { selectedText } = useContext(AboutContext);
  const { lang } = useContext(LangContext);

  return (
    <div className={styles.text}>
      {user.about[selectedText].map((text, i) => (
        <p key={i}>{text[lang]}</p>
      ))}
    </div>
  );
}
