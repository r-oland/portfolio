'use client';

// Components==============
import { faArrowDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LangContext } from 'app/[lang]/layout/ClientWrapper';
import Button from 'components/Button/Button';
import { useContext } from 'react';
import { translate } from 'utils/translate';
import { LimitWorkContext } from '../LimitWorkContext';
import styles from './ShowMore.module.scss';
// =========================

export default function ShowMore() {
  const { limit, setLimit } = useContext(LimitWorkContext);
  const { lang } = useContext(LangContext);
  const t = translate(lang);

  return (
    <>
      {limit && (
        <div className={styles.wrapper}>
          <Button
            variant="border-black"
            onClick={() => setLimit((prev) => !prev)}
          >
            {t('Show more', 'Toon meer')}
            <FontAwesomeIcon icon={faArrowDown} />
          </Button>
        </div>
      )}
    </>
  );
}
