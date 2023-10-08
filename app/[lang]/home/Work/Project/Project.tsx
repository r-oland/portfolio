'use client';

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
import { useInView } from 'framer-motion';
import Toggle from 'app/[lang]/home/Work/Project/Toggle/Toggle';
import { useMediaQ } from 'hooks/useMediaQ';
import { useRef, useState } from 'react';
import { MotionA, MotionDiv } from 'utils/clientMotion';
import { translate } from 'utils/translate';
import ImageRender from './ImageRender/ImageRender';
import styles from './Project.module.scss';
// =========================

export type SelectedTextType = 'Project' | 'Role';

export default function Project({
  project,
  left,
  lang,
}: {
  project: ProjectType;
  left: boolean;
  lang: 'nl' | 'en';
}) {
  const ref = useRef(null);
  const t = translate(lang);
  const [selecteText, setSelecteText] = useState<SelectedTextType>('Project');

  const isTablet = useMediaQ('min', 768);
  const isDesktop = useMediaQ('min', 1024);
  const inView = useInView(ref, { amount: 0.4, once: !isTablet });
  const isWorkInProgress = project.url === '';

  const isIframe = window.parent !== window;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const animate = { x: 0, opacity: 1 };

  const variants = {
    initial:
      // Ignore initial animation on safari iframe (bug fix)
      isIframe && isSafari ? animate : { x: left ? -100 : 100, opacity: 0 },
    animate,
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

  const textOptions = Object.keys(project.description) as SelectedTextType[];

  return (
    <MotionDiv
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
        {isDesktop ? (
          <>
            <div className={styles['toggle-wrapper']}>
              <Toggle
                options={textOptions}
                selectedText={selecteText}
                setSelectedText={setSelecteText}
              />
            </div>
            <p className={styles.description}>
              {project.description[selecteText][lang]}
            </p>
          </>
        ) : (
          <>
            {textOptions.map((to, i) => (
              <p
                key={to}
                className={styles.description}
                style={{
                  marginBottom: i !== textOptions.length - 1 ? '0.5rem' : '',
                }}
              >
                {project.description[to][lang]}
              </p>
            ))}
          </>
        )}
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
        {isWorkInProgress && !isTablet ? (
          <></>
        ) : (
          <MotionA
            className={styles.link}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            whileTap={{ x: 0 }}
            style={{
              opacity: isWorkInProgress ? 0 : project.behindPaywall ? 0.4 : 1,
              pointerEvents: isWorkInProgress ? 'none' : 'initial',
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
          </MotionA>
        )}
      </div>
      <ImageRender project={project} left={left} inView={inView} />
    </MotionDiv>
  );
}
