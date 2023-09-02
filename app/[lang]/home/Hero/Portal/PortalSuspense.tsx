'use client';

// Components==============
import { faSpinnerThird } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'framer-motion';
import { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from '../Hero.module.scss';
import WipText from './WipText/WipText';
// =========================

const DynamicPortal = dynamic(() => import('./Canvas'), {
  suspense: true,
});

export default function PortalSuspense() {
  const renderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(renderRef);

  return (
    <div className={styles.render} ref={renderRef}>
      <Suspense
        fallback={
          <FontAwesomeIcon
            icon={faSpinnerThird}
            spin
            className={styles.loader}
          />
        }
      >
        <WipText />
        <DynamicPortal inView={inView} />
      </Suspense>
    </div>
  );
}
