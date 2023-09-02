// Components==============
import { AnkerType } from 'global_components/Anker/Anker';
import { SmoothScrollContext } from 'app/[lang]/layout/SmoothScroll';
import { useRouter } from 'next/router';
import { useContext } from 'react';
// =========================

export default function useHandleScrollTo() {
  const smoothScroll = useContext(SmoothScrollContext);
  const { asPath, push } = useRouter();

  const handler = (id: AnkerType) => {
    if (asPath !== '/') return push('/');
    const anker = document.getElementById(id);
    if (anker) smoothScroll.scrollTo(anker.offsetTop);
  };

  return handler;
}
