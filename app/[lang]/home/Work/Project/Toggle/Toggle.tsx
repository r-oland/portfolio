// Components==============
import { SelectedTextType } from 'app/[lang]/home/Work/Project/Project';
import React from 'react';
import { MotionDiv } from 'utils/clientMotion';
import styles from './Toggle.module.scss';
// =========================

export default function Toggle({
  selectedText,
  setSelectedText,
  options,
}: {
  selectedText: SelectedTextType;
  setSelectedText: React.Dispatch<React.SetStateAction<SelectedTextType>>;
  options: SelectedTextType[];
}) {
  return (
    <div
      className={styles.wrapper}
      onClick={() =>
        setSelectedText((prev) => (prev === 'Project' ? 'Role' : 'Project'))
      }
    >
      {options.map((option) => (
        <p
          key={option}
          className={selectedText === option ? styles.active : ''}
        >
          {option}
        </p>
      ))}
      <div className={styles.track} />
      <MotionDiv
        className={styles.toggle}
        initial={{ x: 0, scaleX: 1 }}
        animate={{
          x: selectedText === 'Project' ? 0 : 43,
          scaleX: selectedText === 'Project' ? 1 : 0.74,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
