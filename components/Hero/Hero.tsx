// Components==============
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Image from 'next/image';
import heroImage from 'public/images/hero.jpg';
import Curl from './Curl/Curl';
import styles from './Hero.module.scss';
// =========================

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <ChapterTitle
          color="grey"
          name="01. Introduction"
          marginBottom="1.25rem"
        />
        <h1>I am</h1>
        <h3>
          a <span>front-end</span> developer who enjoys building unique
          experiences for creatives with taste.
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
