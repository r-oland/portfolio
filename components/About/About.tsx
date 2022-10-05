// Components==============
import { user } from 'database/user';
import { m } from 'framer-motion';
import Anker from 'global_components/Anker/Anker';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import { useMediaQ } from 'hooks/useMediaQ';
import { useStorage } from 'hooks/useStorage';
import Image from 'next/image';
import { useState } from 'react';
import styles from './About.module.scss';
import Tooltip from './Tooltip/Tooltip';
// =========================

const squareVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  animate: { y: 15, x: 15, opacity: 1 },
  hover: { y: 0, x: 0, opacity: [1, 0, 0, 0] },
};

function Images({ selectedImage }: { selectedImage: number }) {
  return (
    <m.div
      className={styles['image-wrapper']}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ amount: 1, once: true }}
    >
      {/* Load all images at once to prevent flicker from happening between switching images */}
      {user.images.map((image, i) => (
        <m.div
          key={i}
          className={styles.image}
          style={{
            position: i !== selectedImage ? 'absolute' : 'relative',
            zIndex: i === selectedImage ? 1 : 0,
          }}
          animate={{ opacity: i === selectedImage ? 1 : 0 }}
          initial={{ opacity: 1 }}
        >
          <Image
            src={image}
            placeholder="blur"
            alt={`Roland Branten - ${user.imageTitles[i]}`}
          />
        </m.div>
      ))}
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
  const [hasOpenedTooltip, setHasOpenedTooltip] = useStorage(
    'has-opened-tooltip',
    false
  );

  const query = useMediaQ('min', 768);

  const { locale, t } = useLocale();

  return (
    <>
      <Anker id="about" lessMargin />
      <Container>
        <ChapterTitle id={3} marginBottom="4rem" color="grey" />
        <div className={styles.wrapper}>
          <div>
            <h2>
              {t('Time for a', 'Tijd voor een')}{' '}
              <Tooltip
                selected={selectedText}
                setSelected={setSelectedText}
                hasOpenedTooltip={hasOpenedTooltip}
                setHasOpenedTooltip={setHasOpenedTooltip}
                type="text"
              />{' '}
              {t('introduction', 'introductie')} <br />
              {t('with', 'met')}{' '}
              <Tooltip
                selected={selectedImage}
                setSelected={setSelectedImage}
                setHasOpenedTooltip={setHasOpenedTooltip}
                type="image"
              />
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
