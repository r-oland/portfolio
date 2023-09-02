// Components==============
import { AnkerType } from 'components/Anker/Anker';
import { SmoothScrollContext } from 'app/[lang]/layout/SmoothScroll';
import { useRouter, usePathname } from 'next/navigation';
import { useContext } from 'react';
// =========================

export default function useHandleScrollTo() {
  const smoothScroll = useContext(SmoothScrollContext);
  const asPath = usePathname();
  const { push } = useRouter();

  const handler = (id: AnkerType) => {
    if (asPath !== '/') return push('/');
    const anker = document.getElementById(id);
    if (anker) smoothScroll.scrollTo(anker.offsetTop);
  };

  return handler;
}
