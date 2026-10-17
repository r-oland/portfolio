'use client';

// Components==============
import { useInView, useScroll } from 'framer-motion';
import { Suspense, useRef } from 'react';
import styles from '../Hero.module.scss';
import ParticleCanvas from './Canvas';
import Loading from './Loading';
// =========================

export default function PortalSuspense() {
  const renderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(renderRef);
  const { scrollYProgress } = useScroll({
    target: renderRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div className={styles.render} ref={renderRef}>
      <Suspense fallback={<Loading />}>
        <ParticleCanvas inView={inView} scrollProgress={scrollYProgress} />
      </Suspense>
    </div>
  );
}
