// Components==============
import { LazyMotion } from 'framer-motion';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
// =========================

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <LazyMotion
      features={async () => (await import('./lazyMotion')).default}
      strict
    >
      <DesktopNav />
      <MobileNav />
      {children}
    </LazyMotion>
  );
}
