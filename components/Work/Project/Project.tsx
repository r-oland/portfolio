// Components==============
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faStore } from '@fortawesome/pro-regular-svg-icons';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectType } from 'database/work';
import { m } from 'framer-motion';
import { useLocale } from 'hooks/useLocale';
import Image from 'next/image';
import styles from './Project.module.scss';
// =========================

export default function Project({
  project,
  left,
}: {
  project: ProjectType;
  left: boolean;
}) {
  const { locale, t } = useLocale();

  const color = { style: { color: project.color } };

  return (
    <m.div
      className={`${styles.wrapper} ${!left ? styles.reverse : ''}`}
      initial={{ x: left ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div>
        <h1 {...color}>{project.name}</h1>
        <p className={styles.functionality}>{project.functionality[locale]}</p>
        <p className={styles.description}>{project.description[locale]}</p>
        <div className={styles.labels}>
          <div className={styles.label}>
            <FontAwesomeIcon icon={faCalendar} color={project.color} />
            <p {...color}>
              {project.startYear} - {project.endYear || t('Now', 'Heden')}
            </p>
          </div>
          <div className={styles.label}>
            <FontAwesomeIcon icon={faStore} color={project.color} />
            {project.clientLink ? (
              <a
                {...color}
                href={project.clientLink}
                target="_blank"
                rel="noreferrer"
              >
                {project.client}
              </a>
            ) : (
              <p {...color}>{project.client}</p>
            )}
          </div>
          {!!project.github && (
            <div className={styles.label}>
              <FontAwesomeIcon icon={faGithub} color={project.color} />
              <a
                {...color}
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          )}
        </div>
        <m.a
          className={styles.link}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          whileTap={{ x: 0 }}
        >
          Visit site <FontAwesomeIcon icon={faArrowRight} />
        </m.a>
      </div>
      <div className={styles.image}>
        <Image src={project.images[0]} placeholder="blur" />
      </div>
    </m.div>
  );
}
