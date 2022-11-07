// Components==============
import { m } from 'framer-motion';
import { useLocale } from 'hooks/useLocale';
import Image from 'next/image';
import { useState } from 'react';
import enWipText from 'public/images/wip-text-en.png';
import nlWipText from 'public/images/wip-text-nl.png';
import styles from './WipText.module.scss';
// =========================

export default function WipText() {
  const [visible, setVisible] = useState(true);
  const { locale } = useLocale();

  return (
    <m.div
      className={styles.wrapper}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -15 }}
      initial={{ opacity: 0, y: -15 }}
      transition={{ delay: 0.25 }}
      onTap={() => setVisible(false)}
    >
      <Image src={locale === 'en' ? enWipText : nlWipText} alt="wip" />
    </m.div>
  );
}
