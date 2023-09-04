'use client';

// Components==============
import React, { useContext } from 'react';
import { MotionDiv } from 'utils/clientMotion';
import styles from './ImageWrapper.module.scss';
import { AboutContext } from '../AboutContext';
// =========================

export default function ImageWrapper({
  children,
  i,
}: {
  children: React.ReactNode;
  i: number;
}) {
  const { selectedImage } = useContext(AboutContext);

  return (
    <MotionDiv
      className={styles.image}
      style={{
        position: i !== selectedImage ? 'absolute' : 'relative',
        zIndex: i === selectedImage ? 1 : 0,
      }}
      animate={{ opacity: i === selectedImage ? 1 : 0 }}
      initial={{ opacity: 1 }}
    >
      {children}
    </MotionDiv>
  );
}
