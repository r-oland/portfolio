// Components==============
import Anchor from 'components/Anchor/Anchor';
import ChapterTitle from 'components/ChapterTitle/ChapterTitle';
import { translate } from 'utils/translate';
import Curl from './Curl/Curl';
import styles from './Hero.module.scss';
import PortalSuspense from './Portal/PortalSuspense';
// =========================

export default function Hero({ lang }: { lang: 'en' | 'nl' }) {
  const t = translate(lang);

  return (
    <>
      <Anchor id="introduction" />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.content}>
            <ChapterTitle
              id={0}
              lang={lang}
              color="white"
              marginBottom="1.25rem"
            />
            <h1>{t('I am', 'Ik ben')}</h1>
            <h3>
              {t('a', 'een')} <span>freelance</span>{' '}
              {t(
                'developer who enjoys building unique experiences for creatives with taste',
                'developer die graag unieke ervaringen bouwt voor creatives met smaak'
              )}
              .
            </h3>
            <h1 className={styles.name}>Roland Branten</h1>
            <Curl />
          </div>
        </div>
        <PortalSuspense />
      </div>
    </>
  );
}
