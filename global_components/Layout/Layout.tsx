// Components==============
import { domAnimation, LazyMotion } from 'framer-motion';
import DesktopNav from './DesktopNav/DesktopNav';
import styles from './Layout.module.scss';
import MobileNav from './MobileNav/MobileNav';
// =========================

function Component({ children }: { children: JSX.Element }) {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <div className={styles.app} id="app">
        {children}
      </div>
    </>
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

  return (
    <LazyMotion features={domAnimation} strict>
      <Component>{children}</Component>
    </LazyMotion>
  );
}
