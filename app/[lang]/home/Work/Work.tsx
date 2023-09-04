// Components==============
import Anchor from 'components/Anchor/Anchor';
import ChapterTitle from 'components/ChapterTitle/ChapterTitle';
import Container from 'components/Container/Container';
import { projects } from 'database/work';
import ShowMore from './client/ShowMore/ShowMore';
import styles from './Work.module.scss';
import LimitWorkContextWrapper from './client/LimitWorkContext';
import ConditionalProjects from './client/ConditionalProjects';
import Project from './Project/Project';
// =========================

export default function Work({ lang }: { lang: 'nl' | 'en' }) {
  return (
    <LimitWorkContextWrapper>
      <Anchor id="work" />
      <Container>
        <div className={styles.wrapper}>
          <ChapterTitle color="grey" id={1} marginBottom="1rem" lang={lang} />
          <div className={styles.projects}>
            {projects
              // Only show 3 projects
              .filter((p, i) => i <= 2)
              .map((p, i) => {
                const left = i % 2 === 0;
                return <Project key={i} project={p} left={left} lang={lang} />;
              })}
            <ConditionalProjects />
          </div>
          <ShowMore />
        </div>
      </Container>
    </LimitWorkContextWrapper>
  );
}
