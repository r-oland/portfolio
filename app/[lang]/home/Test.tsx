// Components==============
import { translate } from 'utils/translate';
// =========================

export default function Test({ lang }: { lang: 'en' | 'nl' }) {
  const t = translate(lang);
  return <h1>{t('hi there', 'hallo!')}</h1>;
}
