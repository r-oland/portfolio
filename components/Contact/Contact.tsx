// Components==============
import { faCopyright } from '@fortawesome/pro-regular-svg-icons';
import { faCheck, faSpinnerThird } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from 'database/user';
import Anker from 'global_components/Anker/Anker';
import Button from 'global_components/Button/Button';
import ChapterTitle from 'components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import { useState } from 'react';
import styles from './Contact.module.scss';
// =========================

type StatusType = 'initial' | 'sending' | 'send' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<StatusType>('initial');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { t } = useLocale();

  return (
    <>
      <Anker id="contact" />
      <div className={styles.wrapper}>
        <Container>
          <ChapterTitle id={4} color="white" marginBottom="4rem" />
          <div className={styles.content}>
            <div>
              <h1>{t('Impressed already?', 'Al onder de indruk?')}</h1>
              <h2>
                {t(
                  "I'm currently available for work!",
                  'Ik ben momenteel beschikbaar voor werk!'
                )}
              </h2>
              <div className={styles.labels}>
                {user.contact.map((label) => (
                  <a
                    key={label.tag}
                    href={label.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.label}
                  >
                    <FontAwesomeIcon icon={label.icon} />
                    <p>{label.tag}</p>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className={styles['contact-text']}>
                {t(
                  'If you have a project that you want to get started, think you can use my expertise with something or just fancy saying hi: get in touch!',
                  'Als je een project hebt waar je graag mee aan de slag wil, je denkt mijn hulp ergens bij te kunnen gebruiken of je gewoon even hallo wil zeggen: neem contact op!'
                )}
              </p>
              <form
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
                <Button
                  submit
                  variant="green-light"
                  inactive={status === 'sending'}
                >
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
            </div>
          </div>
          <p className={styles.copyright}>
            <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}{' '}
            Roland Branten -{' '}
            {t('All Right Reserved', 'Alle rechten voorbehouden')}
          </p>
        </Container>
      </div>
    </>
  );
}
