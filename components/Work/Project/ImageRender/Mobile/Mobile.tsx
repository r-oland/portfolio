// Components==============
import { ProjectType } from 'database/work';
import { AnimatePresence, m } from 'framer-motion';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { wrap } from 'popmotion';
import styles from './Mobile.module.scss';
// =========================

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function Mobile({
  project,
  inView,
}: {
  project: ProjectType;
  inView: boolean;
}) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, project.amountOfImages, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const url = `/projects/${project.id}/image ${imageIndex}.jpg`;
  const prevUrl = `/projects/${project.id}/image ${
    imageIndex === 0 ? project.amountOfImages - 1 : imageIndex - 1
  }.jpg`;
  const nextUrl = `/projects/${project.id}/image ${
    imageIndex >= project.amountOfImages - 1 ? 0 : imageIndex + 1
  }.jpg`;

  const dots = Array.from(Array(project.amountOfImages).keys());

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        <m.img
          key={page}
          src={url}
          alt={project.name}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      {inView && (
        <>
          <link rel="preload" as="image" href={prevUrl} />
          <link rel="preload" as="image" href={nextUrl} />
        </>
      )}
      {project.amountOfImages > 1 && (
        <div className={styles.dots}>
          {dots.map((dot, i) => (
            <div
              key={i}
              className={`${styles.dot} ${
                i === imageIndex ? styles.active : ''
              }`}
              onClick={() => setPage([i, 0])}
            />
          ))}
        </div>
      )}
    </div>
  );
}
