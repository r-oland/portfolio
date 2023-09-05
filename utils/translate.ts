export const translate = (locale: 'en' | 'nl') => (en: string, nl: string) => {
  if (locale === 'en') return en;
  if (locale === 'nl') return nl;
};
