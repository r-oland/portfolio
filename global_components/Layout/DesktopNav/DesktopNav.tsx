// Components==============
import { faLanguage } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navItems } from 'database/navItems';
import { useLocale } from 'hooks/useLocale';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './DesktopNav.module.scss';
// =========================

export default function DesktopNav() {
  const { asPath, push } = useRouter();
  const { locale } = useLocale();

  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(asPath);
  }, [asPath]);

  return (
    <div className={styles.wrapper}>
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
        <FontAwesomeIcon
          icon={faLanguage}
          onClick={() =>
            push(pathname, pathname, {
              locale: locale === 'en' ? 'nl' : 'en',
            })
          }
        />
      </div>
    </div>
  );
}
