// Components==============
import { AnchorType } from 'components/Anchor/Anchor';
import { SmoothScrollContext } from 'app/[lang]/layout/SmoothScroll';
import { useRouter, usePathname } from 'next/navigation';
import { useContext } from 'react';
// =========================

export default function useHandleScrollTo() {
  const smoothScroll = useContext(SmoothScrollContext);
  const asPath = usePathname();
  const { push } = useRouter();

  const handler = (id: AnchorType) => {
    if (asPath !== '/') return push('/');
    const anchor = document.getElementById(id);
    if (anchor) smoothScroll.scrollTo(anchor.offsetTop);
  };

  return handler;
}
