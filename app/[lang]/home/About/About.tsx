// Components==============
import Anchor from 'components/Anchor/Anchor';
import ChapterTitle from 'components/ChapterTitle/ChapterTitle';
import Container from 'components/Container/Container';
import { translate } from 'utils/translate';
import styles from './About.module.scss';
import AboutContextWrapper from './client/AboutContext';
import Images from './Images/Images';
import Text from './client/Text/Text';
import Tooltip from './client/Tooltip/Tooltip';
// =========================

export default function About({ lang }: { lang: 'nl' | 'en' }) {
  const t = translate(lang);

  return (
    <AboutContextWrapper>
      <Anchor id="about" lessMargin />
      <Container>
        <ChapterTitle id={3} marginBottom="4rem" color="grey" lang={lang} />
        <div className={styles.wrapper}>
          <div>
            <h2>
              {t('Time for a', 'Tijd voor een')}{' '}
              <Tooltip type="text" lang={lang} />{' '}
              {t('introduction', 'introductie')} <br />
              {t('with', 'met')} <Tooltip type="image" lang={lang} />
            </h2>
            <Images variant="mobile" />
            <Text lang={lang} />
          </div>
          <Images variant="desktop" />
        </div>
      </Container>
    </AboutContextWrapper>
  );
}
