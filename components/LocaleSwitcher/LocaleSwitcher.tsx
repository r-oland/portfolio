// Components==============
import { faGlobe } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwitchLogic from './SwitchLogic';
import styles from './LocaleSwitcher.module.scss';
// =========================

export default function LocaleSwitcher({ lang }: { lang: 'en' | 'nl' }) {
  return (
    <SwitchLogic className={styles.wrapper}>
      <FontAwesomeIcon icon={faGlobe} height={14} width={14} />
      {lang === 'en' ? 'NL' : 'EN'}
    </SwitchLogic>
  );
}
