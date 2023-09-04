// Components==============
import { user } from 'database/user';
import Image from 'next/image';
import { MotionDiv } from 'utils/clientMotion';
import ImageWrapper from '../client/ImageWrapper/ImageWrapper';
import styles from './Images.module.scss';
// =========================

const squareVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  animate: { y: 15, x: 15, opacity: 1 },
  hover: { y: 0, x: 0, opacity: [1, 0, 0, 0] },
};

export default function Images({ variant }: { variant: 'mobile' | 'desktop' }) {
  return (
    <MotionDiv
      className={`${styles['image-wrapper']} ${
        variant === 'mobile' ? styles.mobile : styles.desktop
      }`}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ amount: 1, once: true }}
    >
      {/* Load all images at once to prevent flicker from happening between switching images */}
      {user.images.map((image, i) => (
        <ImageWrapper key={i} i={i}>
          <Image
            src={image}
            placeholder="blur"
            alt={`Roland Branten - ${user.imageTitles[i]}`}
          />
        </ImageWrapper>
      ))}
      <MotionDiv
        className={styles.square}
        transition={{ type: 'spring', stiffness: 220, damping: 14 }}
        variants={squareVariants}
      />
    </MotionDiv>
  );
}
