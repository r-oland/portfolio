// Components==============
import { navItems } from 'database/navItems';
import LocaleSwitcher from 'global_components/LocaleSwitcher/LocaleSwitcher';
import { useLocale } from 'hooks/useLocale';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './DesktopNav.module.scss';
// =========================

export default function DesktopNav() {
  const { asPath, push } = useRouter();
  const { locale } = useLocale();

  const [pathname, setPathname] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setPathname(asPath);
  }, [asPath]);

  useEffect(() => {
    const handleAppScroll = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.scrollTop > 0 && hasScrolled) return;
      if (target.scrollTop === 0 && hasScrolled) return setHasScrolled(false);
      if (target.scrollTop > 0 && !hasScrolled) return setHasScrolled(true);
    };

    const app = document.getElementById('app');

    app?.addEventListener('scroll', handleAppScroll);
    return () => app?.removeEventListener('scroll', handleAppScroll);
  }, [hasScrolled]);

  return (
    <div
      className={`${styles.wrapper} ${
        hasScrolled ? styles['has-scrolled'] : ''
      }`}
    >
      <div onClick={() => push('/#introduction')} className={styles.logo}>
        <h3>RO.</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.items}>
          {navItems.map((item) => (
            <div
              onClick={() => push(item.link)}
              key={item.link}
              className={
                pathname.includes(item.link) ? styles.active : undefined
              }
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
