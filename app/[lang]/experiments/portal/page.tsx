// Components==============
import Canvas from 'app/[lang]/experiments/portal/Canvas';
import styles from './Portal.module.scss';
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
