// Components==============
import { navItems } from 'database/navItems';
import { useRouter } from 'next/router';
import styles from './DesktopNav.module.scss';
// =========================

export default function DesktopNav() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => router.push('/#introduction')}
        className={styles.logo}
      >
        <h3>RO.</h3>
      </div>
      <div className={styles.items}>
        {navItems.map((item) => (
          <div
            onClick={() => router.push(item.link)}
            key={item.name}
            className={
              router.asPath.includes(item.link) ? styles.active : undefined
            }
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
