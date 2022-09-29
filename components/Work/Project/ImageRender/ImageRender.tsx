/* eslint-disable @next/next/no-img-element */
// Components==============
import { ProjectType } from 'database/work';
import { m } from 'framer-motion';
import { useMediaQ } from 'hooks/useMediaQ';
import { useState } from 'react';
import styles from './ImageRender.module.scss';
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

export default function ImageRender({
  project,
  left,
  inView,
}: {
  project: ProjectType;
  left: boolean;
  inView: boolean;
}) {
  const [image, setImage] = useState(0);
  const url = `/projects/${project.id}/image ${image + 1}.jpg`;

  const query = useMediaQ('min', 1024);

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
      transformTemplate={transformTemplate}
      animate={!query ? 'hovering' : inView ? 'mounted' : 'initial'}
      whileHover="hovering"
      initial={!query ? 'hovering' : 'initial'}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      variants={variants}
      onMouseMove={(e) => {
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
      <m.img
        src={url}
        alt={project.name}
        variants={{
          hovering: { scaleY: 0.92, scaleX: 0.95, transition: { delay: 0.3 } },
          initial: { scaleY: 1, scaleX: 1 },
          mounted: { scaleY: 1, scaleX: 1 },
        }}
      />
      <div className={styles.left} />
      <div className={styles.right} />
      {query && (
        <>
          <div
            className={styles.bottom}
            style={{ background: project.color }}
          />
          <div className={styles.side} style={{ background: project.color }} />
        </>
      )}
    </m.div>
  );
}
