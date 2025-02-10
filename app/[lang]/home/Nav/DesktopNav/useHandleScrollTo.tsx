// Components==============
import { AnchorType } from 'components/Anchor/Anchor';
import { useRouter, usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
// =========================

export default function useHandleScrollTo() {
  const lenis = useLenis();
  const asPath = usePathname();
  const { push } = useRouter();

  const handler = (id: AnchorType) => {
    if (asPath !== '/') return push('/');
    const anchor = document.getElementById(id);
    if (anchor) lenis.scrollTo(anchor.offsetTop);
  };

  return handler;
}
