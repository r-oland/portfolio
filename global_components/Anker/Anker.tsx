// Components==============
import { useInView } from 'framer-motion';
import { useStore } from 'hooks/useStore';
import React, { useEffect } from 'react';
import styles from './Anker.module.scss';
// =========================

export type AnkerType = 'introduction' | 'work' | 'tech' | 'about' | 'contact';

export default function Anker({
  id,
  reference,
  lessMargin,
}: {
  id: AnkerType;
  reference: React.RefObject<HTMLDivElement>;
  lessMargin?: boolean;
}) {
  const inView = useInView(reference, { amount: lessMargin ? 0.8 : 0.5 });
  const setAnker = useStore((state) => state.setAnker);

  useEffect(() => {
    if (inView) setAnker(id);
  }, [inView]);

  return (
    <div
      id={id}
      className={`${styles.wrapper} ${lessMargin ? styles['more-to-top'] : ''}`}
    />
  );
}
