// Components==============
import { faArrowDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from 'database/work';
import Anchor from 'components/Anchor/Anchor';
import Button from 'components/Button/Button';
import ChapterTitle from 'components/ChapterTitle/ChapterTitle';
import Container from 'components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import { useState } from 'react';
import Project from './Project/Project';
import styles from './Work.module.scss';
// =========================

export default function Work() {
  const [limit, setLimit] = useState(true);
  const { t } = useLocale();

  return (
    <>
      <Anchor id="work" />
      <Container>
        <div className={styles.wrapper}>
          <ChapterTitle color="grey" id={1} marginBottom="1rem" />
          <div className={styles.projects}>
            {projects
              .filter((p, i) => (limit ? i <= 2 : true))
              .map((p, i) => {
                const left = i % 2 === 0;
                return <Project key={i} project={p} left={left} />;
              })}
          </div>
          {limit && (
            <div className={styles.button}>
              <Button
                variant="border-black"
                onClick={() => setLimit((prev) => !prev)}
              >
                {t('Show more', 'Toon meer')}
                <FontAwesomeIcon icon={faArrowDown} />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
