'use client';

// Components==============
import { useScroll } from 'framer-motion';
import { AnkerType } from 'components/Anker/Anker';
import LocaleSwitcher from 'components/LocaleSwitcher/LocaleSwitcher';
import useHandleScrollTo from 'app/[lang]/home/Nav/DesktopNav/useHandleScrollTo';
import { useMediaQ } from 'hooks/useMediaQ';
import useNavItems from 'hooks/useNavItems';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './DesktopNav.module.scss';
// =========================

export default function DesktopNav({ lang }: { lang: 'en' | 'nl' }) {
  const asPath = usePathname();

  const [anker, setAnker] = useState<AnkerType>('introduction');
  const [hasScrolled, setHasScrolled] = useState(false);

  const query = useMediaQ('min', 1024);
  const { scrollY } = useScroll();
  const handleScrollTo = useHandleScrollTo();
  const navItems = useNavItems(lang);

  useEffect(() => {
    if (!query) return;
    if (asPath !== '/') return setHasScrolled(true);

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
  }, [query, asPath]);

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
        <h3>Roland Branten</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.items}>
          {navItems.map((item) => (
            <div
              onClick={() => handleScrollTo(item.id)}
              key={item.id}
              className={item.id === anker ? styles.active : undefined}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <LocaleSwitcher lang={lang} />
      </div>
    </div>
  );
}
