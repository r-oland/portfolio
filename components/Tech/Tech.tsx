// Components==============
import { ranks, techItems } from 'database/tech';
import Anker from 'global_components/Anker/Anker';
import ChapterTitle from 'global_components/ChapterTitle/ChapterTitle';
import Container from 'global_components/Container/Container';
import { useLocale } from 'hooks/useLocale';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './Tech.module.scss';
// =========================

export default function Tech() {
  const { locale, t } = useLocale();
  const ref = useRef(null);

  return (
    <>
      <Anker id="tech" reference={ref} />
      <div className={styles.wrapper} ref={ref}>
        <Container>
          <div className={styles.content}>
            <ChapterTitle id={2} color="white" marginBottom="4rem" />
            <h2>
              <span>
                {t(
                  'Following internet tradition, I present to you',
                  'Internet traditie volgend, stel ik je voor aan'
                )}
                :
              </span>
              {t(
                'a tier list of my tech stack.',
                'een ranglijst van mijn tech stack.'
              )}
            </h2>
            <div className={styles.ranks}>
              {ranks.map((rank) => {
                const items = techItems.filter(
                  (item) => item.rank === rank.key
                );

                return (
                  <div key={rank.key} className={styles.rank}>
                    <p className={styles.description}>
                      <>
                        <strong>{rank.key}</strong> {rank.description[locale]}
                      </>
                    </p>
                    <div className={styles.items}>
                      {items.map((item) => (
                        <div key={item.name} className={styles.item}>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            layout="fill"
                          />
                          <p>{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
