// Components==============
import Canvas from 'app/[lang]/experiments/glass/Canvas';
import styles from './Glass.module.scss';
// =========================

export const metadata = {
  title: 'Glass',
};

export default function Glass() {
  return (
    <div className={styles.wrapper}>
      <Canvas />
    </div>
  );
}
