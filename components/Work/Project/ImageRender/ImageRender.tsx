/* eslint-disable @next/next/no-img-element */
// Components==============
import { ProjectType } from 'database/work';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import styles from './ImageRender.module.scss';
// =========================

const DynamicRender = dynamic(() => import('./Render'), {
  suspense: true,
});

export default function ImageRender({
  project,
  left,
  inView,
}: {
  project: ProjectType;
  left?: boolean;
  inView: boolean;
}) {
  return (
    <div className={`${styles.wrapper} ${!left ? styles.reverse : ''}`}>
      <Suspense>
        <DynamicRender project={project} inView={inView} />
      </Suspense>
    </div>
  );
}
