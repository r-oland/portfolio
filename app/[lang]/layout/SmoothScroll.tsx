// Components==============
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useMemo, useState } from 'react';
// =========================

type SmoothScrollContextType = { scrollTo: (target: number) => void };

export const SmoothScrollContext = createContext({} as SmoothScrollContextType);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [lenis, setLenis] = useState({
    scrollTo: () => console.log('not mounted yet'),
  });

  useEffect(() => {
    // Only enable for home page (not for experiments)
    if (pathname !== '/') return;

    // initialize lenis
    const lenisEnitty = new Lenis({
      duration: 1.2,
      easing: (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)), // https://easings.net/en#easeOutExpo
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisEnitty.raf(time);
      requestAnimationFrame(raf);
    }

    setLenis(lenisEnitty);
    requestAnimationFrame(raf);
  }, [pathname]);

  const value = useMemo(() => lenis, [lenis]);

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
