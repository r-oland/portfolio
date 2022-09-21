// Components==============
import { faLanguage } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import styles from './LocaleSwitcher.module.scss';
// =========================

export default function LocaleSwitcher() {
  const { asPath, locale, push } = useRouter();

  return (
    <FontAwesomeIcon
      icon={faLanguage}
      onClick={() => {
        const loc = locale === 'en' ? 'nl' : 'en';
        document.cookie = `NEXT_LOCALE=${loc}; max-age=31536000; path=/; SameSite=None; Secure`;

        push(asPath, asPath, {
          locale: loc,
          scroll: false,
        });
      }}
      className={styles.wrapper}
    />
  );
}
