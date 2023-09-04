// Components==============
import Image from 'next/image';
import enWipText from 'public/images/wip-text-en.png';
import nlWipText from 'public/images/wip-text-nl.png';
import { useContext, useState } from 'react';
import { MotionDiv } from 'utils/clientMotion';
import { LangContext } from 'app/[lang]/layout/ClientWrapper';
import styles from './WipText.module.scss';
// =========================

export default function WipText() {
  const [visible, setVisible] = useState(true);
  const { lang } = useContext(LangContext);

  return (
    <MotionDiv
      className={styles.wrapper}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -15 }}
      initial={{ opacity: 0, y: -15 }}
      transition={{ delay: 0.25 }}
      onTap={() => setVisible(false)}
    >
      <Image src={lang === 'en' ? enWipText : nlWipText} alt="wip" />
    </MotionDiv>
  );
}
