// Components==============
import { AnkerType } from 'global_components/Anker/Anker';
import { useMediaQ } from './useMediaQ';
// =========================

export default function useNavItems() {
  const isDesktop = useMediaQ('min', 768);

  const navItems = [
    {
      name: { en: '01. Introduction', nl: '01. Introductie' },
      id: 'introduction' as AnkerType,
    },
    { name: { en: '02. Work', nl: '02. Werk' }, id: 'work' as AnkerType },
    { name: { en: '03. Tech', nl: '03. Tech' }, id: 'tech' as AnkerType },
    {
      name: {
        en: `${isDesktop ? '04' : '03'}. About`,
        nl: `${isDesktop ? '04' : '03'}. Over mij`,
      },
      id: 'about' as AnkerType,
    },
    {
      name: {
        en: `${isDesktop ? '05' : '04'}. Contact`,
        nl: `${isDesktop ? '05' : '04'}. Contact`,
      },
      id: 'contact' as AnkerType,
    },
  ];

  return navItems;
}
