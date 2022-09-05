// Components==============
import { motion } from 'framer-motion';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import { useLocale } from 'hooks/useLocale';
import Image from 'next/image';
import heroImage from 'public/images/hero.jpg';
import { useState } from 'react';
import Curl from './Curl/Curl';
import styles from './Hero.module.scss';
// =========================

const imageVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const squareVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  animate: { y: 20, x: 20, opacity: 1 },
  hover: { y: 0, x: 0, opacity: [1, 0, 0, 0] },
};

export default function Hero() {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);

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
      <motion.div
        className={styles['image-wrapper']}
        initial="initial"
        animate="animate"
        onHoverStart={() => setMounted(true)}
        whileHover="hover"
        variants={{
          animate: {
            transition: {
              staggerChildren: mounted ? 0 : 0.3,
            },
          },
        }}
      >
        <motion.div variants={imageVariants} className={styles.image}>
          <Image
            src={heroImage}
            width={360}
            height={360}
            placeholder="blur"
            alt="Roland Branten"
            quality={100}
          />
        </motion.div>
        <motion.div
          className={styles.square}
          transition={{ type: 'spring', stiffness: 220, damping: 14 }}
          variants={squareVariants}
        />
      </motion.div>
    </div>
  );
}
