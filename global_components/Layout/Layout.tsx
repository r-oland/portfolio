// Components==============
import { useMediaQ } from 'hooks/useMediaQ';
import DesktopNav from './DesktopNav/DesktopNav';
import styles from './Layout.module.scss';
import MobileNav from './MobileNav/MobileNav';
// =========================

function Component({ children }: { children: JSX.Element }) {
  const query = useMediaQ('min', 768);

  return (
    <div className={styles.wrapper}>
      {query && <DesktopNav />}
      {!query && <MobileNav />}
      <div className={styles.app}>{children}</div>
    </div>
  );
}

export default function Layout({
  children,
  noLayout,
}: {
  children: JSX.Element;
  noLayout?: boolean;
}) {
  if (noLayout) return children;

  return <Component>{children}</Component>;
}
