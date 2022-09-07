// Components==============
import LocaleSwitcher from 'global_components/LocaleSwitcher/LocaleSwitcher';
import styles from './MobileNav.module.scss';
// =========================

export default function MobileNav() {
  return (
    <div className={styles.wrapper}>
      <LocaleSwitcher />
    </div>
  );
}
