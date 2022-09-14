// Components==============
import { projects } from 'database/work';
import Anker from 'global_components/Anker/Anker';
import Button from 'global_components/Button/Button';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import React, { useRef } from 'react';
import Project from './Project/Project';
import styles from './Work.module.scss';
// =========================

export default function Work() {
  const { t } = useLocale();
  const ref = useRef(null);

  return (
    <>
      <Anker id="work" reference={ref} />
      <Container>
        <div className={styles.wrapper} ref={ref}>
          <ChapterTitle color="grey" id={1} marginBottom="1rem" />
          <div className={styles.projects}>
            {projects.map((p, i) => {
              const left = i % 2 === 0;
              return <Project key={i} project={p} left={left} />;
            })}
          </div>
          <div className={styles.button}>
            <Button>{t('Show more', 'Toon meer')}</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
