// Components==============
import Canvas from 'app/[lang]/experiments/globe/Canvas';
import styles from './Globe.module.scss';
// =========================

export const metadata = {
  title: 'Globe',
};

export default function Globe() {
  return (
    <div className={styles.wrapper}>
      <Canvas />
    </div>
  );
}
