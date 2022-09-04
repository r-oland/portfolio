// Components==============
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Image from 'next/image';
import Curl from './Curl/Curl';
import styles from './Hero.module.scss';
// =========================

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>
          <ChapterTitle color="grey" name="01. Introduction" />
        </div>
        <h1>I am</h1>
        <h3>
          a <span>front-end</span> developer who enjoys building unique
          experiences for creatives with taste.
        </h3>
        <h1 className={styles.name}>Roland Branten</h1>
        <Curl />
      </div>
      <div className={styles.image}>
        <Image src="/images/hero.jpg" width={360} height={360} />
        <div className={styles.square} />
      </div>
    </div>
  );
}
