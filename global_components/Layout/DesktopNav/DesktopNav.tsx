// Components==============
import { navItems } from 'database/navItems';
import LocaleSwitcher from 'global_components/LocaleSwitcher/LocaleSwitcher';
import { useLocale } from 'hooks/useLocale';
import { useStore } from 'hooks/useStore';
import { useEffect, useState } from 'react';
import { handleScrollTo } from 'utils/handleScrollTo';
import styles from './DesktopNav.module.scss';
// =========================

export default function DesktopNav() {
  const { locale } = useLocale();

  const anker = useStore((state) => state.anker);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const app = document.getElementById('app');

    const handleAppScroll = () => {
      if (!app) return;
      if (app.scrollTop > 0 && hasScrolled) return;
      if (app.scrollTop === 0 && hasScrolled) return setHasScrolled(false);
      if (app.scrollTop > 0 && !hasScrolled) return setHasScrolled(true);
    };

    handleAppScroll();

    app?.addEventListener('scroll', handleAppScroll);
    return () => app?.removeEventListener('scroll', handleAppScroll);
  }, [hasScrolled]);

  return (
    <div
      className={`${styles.wrapper} ${
        hasScrolled ? styles['has-scrolled'] : ''
      }`}
    >
      <div
        onClick={() => handleScrollTo('introduction')}
        className={styles.logo}
      >
        <h3>RO.</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.items}>
          {navItems.map((item) => (
            <div
              onClick={() => handleScrollTo(item.id)}
              key={item.id}
              className={item.id === anker ? styles.active : undefined}
            >
              <p>{item.name[locale]}</p>
            </div>
          ))}
        </div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
