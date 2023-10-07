'use client';

// Components==============
import {
  faLaughSquint,
  faMinusCircle,
  faPlusCircle,
  faSmile,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from 'database/user';
import { AnimatePresence } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { LangContext } from 'app/[lang]/layout/ClientWrapper';
import { MotionDiv, MotionSpan } from 'utils/clientMotion';
import styles from './Tooltip.module.scss';
import { AboutContext } from '../AboutContext';
// =========================

export default function Tooltip({ type }: { type: 'text' | 'image' }) {
  const {
    setSelectedImage,
    setSelectedText,
    selectedImage,
    selectedText,
    hasOpenedTooltip,
    setHasOpenedTooltip,
  } = useContext(AboutContext);
  const { lang } = useContext(LangContext);

  const setSelected = type === 'image' ? setSelectedImage : setSelectedText;
  const selected = type === 'image' ? selectedImage : selectedText;

  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentPosition = parseInt(e.target.value);
    setSelected(currentPosition);
  }

  const content =
    type === 'image'
      ? user.imageTitles[selected][lang]
      : user.aboutTitles[selected][lang];

  const total = type === 'image' ? user.images.length : user.about.length;
  const barWidth = 125;
  const sliderWidth = 8;
  const x =
    (barWidth / (total - 1)) * selected -
    (sliderWidth / (total - 1)) * selected;

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => {
        setIsOpen(true);
        setHasOpenedTooltip(true);
      }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <MotionSpan
        initial={{ y: 0 }}
        whileInView={
          hasOpenedTooltip || type === 'image'
            ? { y: 0 }
            : { y: [0, -3, 0, -3, 0] }
        }
        transition={{ delay: 1, repeat: Infinity, repeatDelay: 4 }}
      >
        {content}
      </MotionSpan>
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            className={`${styles.tooltip} ${
              type === 'image' ? styles.image : ''
            }`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 0, pointerEvents: 'none' }}
            style={{ left: type === 'text' ? -70 : -20 }}
          >
            <FontAwesomeIcon
              icon={type === 'image' ? faSmile : faMinusCircle}
              onClick={() => setSelected((prev) => (prev === 0 ? 0 : prev - 1))}
            />
            <input
              type="range"
              min="0"
              max={total - 1}
              value={selected}
              onChange={handleChange}
            />
            <div className={styles.bar} />
            <MotionDiv
              className={styles.slider}
              initial={{ x }}
              animate={{ x }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            />
            <FontAwesomeIcon
              icon={type === 'image' ? faLaughSquint : faPlusCircle}
              onClick={() =>
                setSelected((prev) =>
                  prev === total - 1 ? total - 1 : prev + 1
                )
              }
            />
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
