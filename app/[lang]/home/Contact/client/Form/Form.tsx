'use client';

// Components==============
import { useContext } from 'react';
import { faCheck, faSpinnerThird } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';
import { translate } from 'utils/translate';
import { LangContext } from 'app/[lang]/layout/ClientWrapper';
import { ContactContext } from '../ContactContext';
import styles from './Form.module.scss';
// =========================

export default function Form() {
  const { status, setStatus, email, setEmail, message, setMessage } =
    useContext(ContactContext);

  const { lang } = useContext(LangContext);
  const t = translate(lang);

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        setStatus('sending');
        fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({ email, message }),
        })
          .then((res) => {
            if (!res.ok) return setStatus('error');

            setStatus('send');
            setEmail('');
            setMessage('');

            setTimeout(() => {
              setStatus('initial');
            }, 2000);
          })
          .catch(() => setStatus('error'));
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => {
          if (status === 'error') setStatus('initial');
          setEmail(e.target.value);
        }}
        placeholder="johndoesitgood@mail.com"
        required
      />
      <textarea
        value={message}
        onChange={(e) => {
          if (status === 'error') setStatus('initial');
          setMessage(e.target.value);
        }}
        placeholder="Write your message..."
        required
      />
      {status === 'error' && (
        <p className={styles.error}>
          {t(
            'Something went wrong... You can also directly send an email to info@rolandbranten.nl',
            'Er is iets mis gegaan... Je kunt ook direct een mail sturen naar info@rolandbranten.nl'
          )}
        </p>
      )}
      <Button submit variant="green-light" inactive={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
        {status === 'sending' ? (
          <FontAwesomeIcon icon={faSpinnerThird} spin />
        ) : status === 'send' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <></>
        )}
      </Button>
    </form>
  );
}
