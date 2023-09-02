// Components==============
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
// =========================

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      {children}
    </>
  );
}
