// Components==============
import { faCopyright } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from 'database/user';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import React, { useState } from 'react';
import styles from './Contact.module.scss';
// =========================

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { t } = useLocale();

  return (
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

                console.log(email, message);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jondoe@mail.com"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
              />
              <button type="submit">Send</button>
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
  );
}
