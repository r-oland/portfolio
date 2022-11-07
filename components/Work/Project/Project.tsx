// Components==============
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faInfoCircle,
  faStore,
} from '@fortawesome/pro-regular-svg-icons';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectType } from 'database/work';
import { m, useInView } from 'framer-motion';
import { useLocale } from 'hooks/useLocale';
import { useMediaQ } from 'hooks/useMediaQ';
import { useRef } from 'react';
import ImageRender from './ImageRender/ImageRender';
import styles from './Project.module.scss';
// =========================

export default function Project({
  project,
  left,
}: {
  project: ProjectType;
  left: boolean;
}) {
  const ref = useRef(null);
  const { locale, t } = useLocale();

  const isDesktop = useMediaQ('min', 768);
  const inView = useInView(ref, { amount: 0.4, once: !isDesktop });
  const isPortfolio = project.url === 'https://rolandbranten.com/';

  const variants = {
    initial: { x: left ? -100 : 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const currentYear = new Date().getFullYear();

  const year = project.endYear
    ? // has end year
      project.endYear === project.startYear
      ? project.startYear
      : `${project.startYear} - ${project.endYear}`
    : // only has start year
    project.startYear === currentYear
    ? project.startYear
    : `${project.startYear} - ${currentYear}`;

  return (
    <m.div
      className={`${styles.wrapper} ${!left ? styles.reverse : ''}`}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={variants}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      ref={ref}
    >
      <div className={styles.content}>
        <h1>{project.name}</h1>
        <p className={styles.functionality}>{project.functionality}</p>
        <p className={styles.description}>{project.description[locale]}</p>
        <div className={styles.labels}>
          <div className={styles.label}>
            <FontAwesomeIcon icon={faCalendar} />
            <p>{year}</p>
          </div>
          <div className={styles.label}>
            <FontAwesomeIcon icon={faStore} />
            {project.clientLink ? (
              <a href={project.clientLink} target="_blank" rel="noreferrer">
                {project.client}
              </a>
            ) : (
              <p>{project.client}</p>
            )}
          </div>
          {!!project.github && (
            <div className={styles.label}>
              <FontAwesomeIcon icon={faGithub} />
              <a href={project.github} target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          )}
          {!!project.marketingUrl && (
            <div className={styles.label}>
              <FontAwesomeIcon icon={faInfoCircle} />
              <a href={project.marketingUrl} target="_blank" rel="noreferrer">
                {t('More about', 'Meer over')} {project.name}
              </a>
            </div>
          )}
        </div>
        {isPortfolio && !isDesktop ? (
          <></>
        ) : (
          <m.a
            className={styles.link}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            whileTap={{ x: 0 }}
            style={{
              opacity: isPortfolio ? 0 : project.behindPaywall ? 0.4 : 1,
            }}
          >
            {project.behindPaywall && (
              <p>
                {t(
                  '*requires a paid subscription',
                  '*vereist een betaald abonnement'
                )}
              </p>
            )}
            Visit site <FontAwesomeIcon icon={faArrowRight} />
          </m.a>
        )}
      </div>
      <ImageRender project={project} left={left} inView={inView} />
    </m.div>
  );
}
