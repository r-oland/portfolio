// Components==============
import Canvas from 'app/[lang]/experiments/meta_laptop/Canvas';
import styles from './MetaLaptop.module.scss';
// =========================

export const metadata = {
  title: 'Meta Laptop',
};

export default function MetaLaptop() {
  return (
    <div className={styles.wrapper}>
      <Canvas />
    </div>
  );
}
