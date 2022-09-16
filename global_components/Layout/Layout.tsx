// Components==============
import { domAnimation, LazyMotion } from 'framer-motion';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
// =========================

function Component({ children }: { children: JSX.Element }) {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      {children}
    </>
  );
}

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <Component>{children}</Component>
    </LazyMotion>
  );
}
