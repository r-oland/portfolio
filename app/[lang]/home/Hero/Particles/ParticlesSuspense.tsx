'use client';

// Components==============
import { useInView } from 'framer-motion';
import { Suspense, useRef } from 'react';
import styles from '../Hero.module.scss';
import ParticleCanvas from './Canvas';
import Loading from './Loading';
// =========================

export default function PortalSuspense() {
  const renderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(renderRef);

  return (
    <div className={styles.render} ref={renderRef}>
      <Suspense fallback={<Loading />}>
        <ParticleCanvas inView={inView} />
      </Suspense>
    </div>
  );
}
