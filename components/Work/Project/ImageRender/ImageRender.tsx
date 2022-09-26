/* eslint-disable @next/next/no-img-element */
// Components==============
import { ProjectType } from 'database/work';
import { useState } from 'react';
import { m } from 'framer-motion';
import { useMediaQ } from 'hooks/useMediaQ';
import styles from './ImageRender.module.scss';
// =========================

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
      transition: { delay: 0.2 },
    },
  };

  return (
    <m.div
      className={`${styles.wrapper} ${!left ? styles.reverse : ''}`}
      onClick={() =>
        setImage((prev) => (prev === project.amountOfImages - 1 ? 0 : prev + 1))
      }
      // order of transform output
      transformTemplate={({
        transformPerspective,
        rotateY,
        rotateX,
        scale,
        x,
      }) =>
        `perspective(${transformPerspective}) rotateY(${rotateY}) rotateX(${rotateX}) scale(${scale}) translateX(${x}) translateZ(0)`
      }
      animate={!query ? 'hovering' : inView ? 'mounted' : 'initial'}
      whileHover="hovering"
      initial={!query ? 'hovering' : 'initial'}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      variants={variants}
    >
      <img src={url} alt={project.name} />
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
