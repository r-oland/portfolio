// Components==============
import { domAnimation, LazyMotion } from 'framer-motion';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
// =========================

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <DesktopNav />
      <MobileNav />
      {children}
    </LazyMotion>
  );
}
