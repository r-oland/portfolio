// Components==============
import { navItems } from 'database/navItems';
import { useScroll } from 'framer-motion';
import { AnkerType } from 'global_components/Anker/Anker';
import LocaleSwitcher from 'global_components/LocaleSwitcher/LocaleSwitcher';
import { useLocale } from 'hooks/useLocale';
import { useMediaQ } from 'hooks/useMediaQ';
import { useEffect, useState } from 'react';
import { handleScrollTo } from 'utils/handleScrollTo';
import styles from './DesktopNav.module.scss';
// =========================

export default function DesktopNav() {
  const { locale } = useLocale();

  const [anker, setAnker] = useState<AnkerType>('introduction');
  const [hasScrolled, setHasScrolled] = useState(false);

  const query = useMediaQ('min', 1024);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!query) return;
    const handleScroll = (latest: number) => {
      // get height of window and divide by 2. WHen subtracting the half height form the section start,
      // the anker will change when the element is in the middle of the screen
      const halfHeight = window.innerHeight / 2;

      const heroStart = 0;
      const workStart =
        (document.getElementById('work')?.offsetTop || 0) - halfHeight;
      const techStart =
        (document.getElementById('tech')?.offsetTop || 0) - halfHeight;
      const aboutStart =
        (document.getElementById('about')?.offsetTop || 0) - halfHeight;
      const contactStart =
        (document.getElementById('contact')?.offsetTop || 0) - halfHeight;

      if (latest > heroStart && latest < workStart) setAnker('introduction');
      if (latest > workStart && latest < techStart) setAnker('work');
      if (latest > techStart && latest < aboutStart) setAnker('tech');
      if (latest > aboutStart && latest < contactStart) setAnker('about');
      if (latest > contactStart) setAnker('contact');

      // Handle scrollbar background
      if (latest > 0 && hasScrolled) return;
      if (latest > 0) setHasScrolled(true);
      if (latest === 0) setHasScrolled(false);
    };

    handleScroll(scrollY.get());
    const unsubscribe = scrollY.onChange(handleScroll);

    return () => unsubscribe();
  }, [query]);

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
