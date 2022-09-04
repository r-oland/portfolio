// Components==============
import { useRouter } from 'next/router';
// =========================

export const useLocale = () => {
  const { locale } = useRouter();

  const typedLocale = locale as 'en' | 'nl';

  const t = (en: string, nl: string) => {
    if (locale === 'en') return en;
    if (locale === 'nl') return nl;
  };

  return { locale: typedLocale, t };
};
