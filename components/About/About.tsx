// Components==============
import { user } from 'database/user';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import { useMediaQ } from 'hooks/useMediaQ';
import Image from 'next/image';
import { useState } from 'react';
import styles from './About.module.scss';
// =========================

export default function About() {
  const [selectedText, setSelectedText] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const query = useMediaQ('min', 768);

  const { locale, t } = useLocale();

  return (
    <Container>
      <ChapterTitle id={3} marginBottom="4rem" color="grey" />
      <div className={styles.wrapper}>
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
          {!query && (
            <div className={styles.image}>
              <Image src={user.images[selectedImage]} alt="Roland Branten" />
            </div>
          )}
          <div className={styles.text}>
            {user.about[selectedText].map((text, i) => (
              <p key={i}>{text[locale]}</p>
            ))}
          </div>
        </div>
        {query && (
          <div className={styles.image}>
            <Image src={user.images[selectedImage]} alt="Roland Branten" />
          </div>
        )}
      </div>
    </Container>
  );
}
