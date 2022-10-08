// Components==============
import { AnkerType } from 'global_components/Anker/Anker';
import { SmoothScrollContext } from 'global_components/SmoothScroll';
import { useContext } from 'react';
// =========================

export default function useHandleScrollTo() {
  const smoothScroll = useContext(SmoothScrollContext);

  const handler = (id: AnkerType) => {
    const anker = document.getElementById(id);
    if (anker) smoothScroll.scrollTo(anker.offsetTop);
  };

  return handler;
}
