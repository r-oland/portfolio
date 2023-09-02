// Components==============
import LocaleSwitcher from 'components/LocaleSwitcher/LocaleSwitcher';
import styles from './MobileNav.module.scss';
// =========================

export default function MobileNav({ lang }: { lang: 'en' | 'nl' }) {
  return (
    <div className={styles.wrapper}>
      <LocaleSwitcher lang={lang} />
    </div>
  );
}
