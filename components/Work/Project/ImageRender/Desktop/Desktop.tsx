/* eslint-disable @next/next/no-img-element */
// Components==============
import { ProjectType } from 'database/work';
import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Desktop.module.scss';
// =========================

// order of transform output
const transformTemplate = ({
  transformPerspective,
  rotateY,
  rotateX,
  scale,
  x,
}: any) =>
  `perspective(${transformPerspective}) rotateY(${rotateY}) rotateX(${rotateX}) scale(${scale}) translateX(${x}) translateZ(0)`;

export default function Desktop({
  project,
  left,
  inView,
}: {
  project: ProjectType;
  left: boolean;
  inView: boolean;
}) {
  const [image, setImage] = useState(0);
  const [hovering, setHovering] = useState(false);

  const url = `/projects/${project.id}/image ${image}.jpg`;
  const prevUrl = `/projects/${project.id}/image ${
    image === 0 ? project.amountOfImages - 1 : image - 1
  }.jpg`;
  const nextUrl = `/projects/${project.id}/image ${
    image >= project.amountOfImages - 1 ? 0 : image + 1
  }.jpg`;

  useEffect(() => {
    if (!hovering && image !== 0) {
      const timeout = setTimeout(() => {
        setImage(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [hovering]);

  const variants = {
    initial: {
      transformPerspective: 1200,
      rotateY: left ? -10 : 10,
      rotateX: 45,
      scale: 0.8,
      x: left ? -60 : 60,
    },
    hovering: {
      transformPerspective: 1200,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      x: 0,
    },
    mounted: {
      transformPerspective: 1200,
      rotateY: left ? -30 : 30,
      rotateX: 45,
      scale: 0.8,
      x: left ? -60 : 60,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <m.div
      className={`${styles.wrapper} ${!left ? styles.reverse : ''}`}
      onClick={() => {
        const toRight = (
          document.getElementById('cursor')?.childNodes[0] as HTMLImageElement
        )?.src.includes('right');

        setImage((prev) => {
          if (toRight) {
            if (prev === project.amountOfImages - 1) return 0;
            return prev + 1;
          }
          if (prev === 0) return project.amountOfImages - 1;
          return prev - 1;
        });
      }}
      style={{
        cursor: project.amountOfImages === 1 ? 'default' : 'none',
      }}
      transformTemplate={transformTemplate}
      animate={hovering ? 'hovering' : inView ? 'mounted' : 'initial'}
      initial={hovering ? 'hovering' : 'initial'}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      variants={variants}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      onMouseMove={(e) => {
        if (project.amountOfImages === 1) return;
        const mouseY = e.pageY;
        const mouseX = e.pageX;
        const cursor = document.getElementById('cursor');
        const cursorImage = cursor?.childNodes[0] as HTMLImageElement;
        const target = e.target as Element;

        const isRightImage = cursorImage.src.includes('right');

        if (target?.classList[0]?.includes('left') && isRightImage)
          cursorImage.src = '/images/chevron-left-white.svg';
        if (target?.classList[0]?.includes('right') && !isRightImage)
          cursorImage.src = '/images/chevron-right-white.svg';

        if (cursor) {
          cursor.style.transform = `translate(${mouseX - 17}px, ${
            mouseY - 17
          }px)`;
          cursor.style.opacity = '1';
        }
      }}
      onMouseLeave={() => {
        const cursor = document.getElementById('cursor');
        if (cursor) cursor.style.opacity = '0';
      }}
    >
      <AnimatePresence>
        <m.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles['image-wrapper']}
        >
          <m.img
            src={url}
            alt={project.name}
            variants={{
              hovering: {
                scaleY: 0.92,
                scaleX: 0.95,
                translateZ: 0,
                transition: { delay: 0.3 },
              },
              initial: { scaleY: 1, scaleX: 1 },
              mounted: { scaleY: 1, scaleX: 1 },
            }}
            // Safari bug where images doesn't change when clicked if it has a positive translateZ value and flashes white with a 0 value.
            // Solution = disable translateZ on image
            transformTemplate={({ scaleY, scaleX }) =>
              `scaleY(${scaleY}) scaleX(${scaleX})`
            }
          />
          <div className={styles.left} />
          <div className={styles.right} />
        </m.div>
      </AnimatePresence>
      <div className={styles.bottom} />
      <div className={styles.side} />
      {inView && hovering && (
        <>
          <link rel="preload" as="image" href={prevUrl} />
          <link rel="preload" as="image" href={nextUrl} />
        </>
      )}
    </m.div>
  );
}
