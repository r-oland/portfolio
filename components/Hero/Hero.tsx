// Components==============
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import { useLocale } from 'hooks/useLocale';
import Image from 'next/image';
import heroImage from 'public/images/hero.jpg';
import Curl from './Curl/Curl';
import styles from './Hero.module.scss';
// =========================

export default function Hero() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <ChapterTitle id={0} color="grey" marginBottom="1.25rem" />
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
      <div className={styles.image}>
        <Image
          src={heroImage}
          width={360}
          height={360}
          placeholder="blur"
          alt="Roland Branten"
          quality={100}
        />
        <div className={styles.square} />
      </div>
    </div>
  );
}
