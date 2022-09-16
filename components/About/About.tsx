// Components==============
import { user } from 'database/user';
import { m } from 'framer-motion';
import Anker from 'global_components/Anker/Anker';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import { useMediaQ } from 'hooks/useMediaQ';
import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from './About.module.scss';
// =========================

const squareVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  animate: { y: 15, x: 15, opacity: 1 },
  hover: { y: 0, x: 0, opacity: [1, 0, 0, 0] },
};

function Images({ selectedImage }: { selectedImage: number }) {
  return (
    <m.div
      className={styles.image}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ amount: 1, once: true }}
    >
      <Image
        src={user.images[selectedImage]}
        placeholder="blur"
        alt="Roland Branten"
      />
      <m.div
        className={styles.square}
        transition={{ type: 'spring', stiffness: 220, damping: 14 }}
        variants={squareVariants}
      />
    </m.div>
  );
}

export default function About() {
  const [selectedText, setSelectedText] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const query = useMediaQ('min', 768);
  const ref = useRef<HTMLDivElement>(null);

  const { locale, t } = useLocale();

  return (
    <>
      <Anker id="about" reference={ref} lessMargin />
      <Container>
        <ChapterTitle id={3} marginBottom="4rem" color="grey" />
        <div className={styles.wrapper} ref={ref}>
          <div>
            <h2>
              {t('Time for a', 'Tijd voor een')}{' '}
              <span
                onClick={() => setSelectedText((prev) => (prev === 0 ? 1 : 0))}
              >
                {user.aboutTitles[selectedText][locale]}
              </span>{' '}
              {t('introduction', 'introductie')} <br />
              {t('with', 'met')}{' '}
              <span
                onClick={() => setSelectedImage((prev) => (prev === 0 ? 1 : 0))}
              >
                {user.imageTitles[selectedImage][locale]}
              </span>
            </h2>
            {!query && <Images selectedImage={selectedImage} />}
            <div className={styles.text}>
              {user.about[selectedText].map((text, i) => (
                <p key={i}>{text[locale]}</p>
              ))}
            </div>
          </div>
          {query && <Images selectedImage={selectedImage} />}
        </div>
      </Container>
    </>
  );
}
