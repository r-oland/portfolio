// Components==============
import { useInView } from 'framer-motion';
import Anker from 'global_components/Anker/Anker';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import { useLocale } from 'hooks/useLocale';
import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';
import Curl from './Curl/Curl';
import styles from './Hero.module.scss';
// =========================

const DynamicPortal = dynamic(() => import('./Portal/Canvas'), {
  suspense: true,
});

export default function Hero() {
  const { t } = useLocale();
  const renderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(renderRef);

  return (
    <>
      <Anker id="introduction" />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.content}>
            <ChapterTitle id={0} color="white" marginBottom="1.25rem" />
            <h1>{t('I am', 'Ik ben')}</h1>
            <h3>
              {t('a', 'een')} <span>front-end</span>{' '}
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
        <div className={styles.render} ref={renderRef}>
          <Suspense>
            <DynamicPortal inView={inView} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
