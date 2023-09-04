'use client';

// Components==============
import { useInView } from 'framer-motion';
import { Suspense, useRef } from 'react';
import styles from '../Hero.module.scss';
import PortalCanvas from './Canvas';
import Loading from './Loading';
import WipText from './WipText/WipText';
// =========================

export default function PortalSuspense() {
  const renderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(renderRef);

  return (
    <div className={styles.render} ref={renderRef}>
      <WipText />
      <Suspense fallback={<Loading />}>
        <PortalCanvas inView={inView} />
      </Suspense>
    </div>
  );
}
