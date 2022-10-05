// Components==============
import {
  faLaughSquint,
  faMinusCircle,
  faPlusCircle,
  faSmile,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from 'database/user';
import { AnimatePresence, m } from 'framer-motion';
import { useLocale } from 'hooks/useLocale';
import React, { useState } from 'react';
import styles from './Tooltip.module.scss';
// =========================

export default function Tooltip({
  selected,
  setSelected,
  hasOpenedTooltip,
  setHasOpenedTooltip,
  type,
}: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  hasOpenedTooltip?: boolean;
  setHasOpenedTooltip: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'text' | 'image';
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentPosition = parseInt(e.target.value);
    setSelected(currentPosition);
  }

  const { locale } = useLocale();

  const content =
    type === 'image'
      ? user.imageTitles[selected][locale]
      : user.aboutTitles[selected][locale];

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
      <m.span
        initial={{ y: 0 }}
        whileInView={
          hasOpenedTooltip || type === 'image'
            ? { y: 0 }
            : { y: [0, -3, 0, -3, 0] }
        }
        transition={{ delay: 1, repeat: Infinity, repeatDelay: 4 }}
      >
        {content}
      </m.span>
      <AnimatePresence>
        {isOpen && (
          <m.div
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
            <m.div
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
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
