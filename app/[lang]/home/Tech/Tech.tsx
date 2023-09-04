// Components==============
import { ranks, techItems } from 'database/tech';
import Anchor from 'components/Anchor/Anchor';
import ChapterTitle from 'components/ChapterTitle/ChapterTitle';
import Container from 'components/Container/Container';
import Image from 'next/image';
import { translate } from 'utils/translate';
import styles from './Tech.module.scss';
// =========================

export default function Tech({ lang }: { lang: 'nl' | 'en' }) {
  const t = translate(lang);

  return (
    <>
      <Anchor id="tech" />
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.content}>
            <ChapterTitle
              id={2}
              color="white"
              marginBottom="4rem"
              lang={lang}
            />
            <h2>
              <span>
                {t(
                  'I love exploring new technologies',
                  'Ik hou ervan om nieuwe technologieën te verkennen'
                )}
              </span>
              {t(
                "This is what I'm currently into",
                'Dit is wat ik momenteel tof vind'
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
                        <strong>{rank.key}</strong> {rank.description[lang]}
                      </>
                    </p>
                    <div className={styles.items}>
                      {items.map((item) => (
                        <div key={item.name} className={styles.item}>
                          <Image src={item.icon} alt={item.name} fill />
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
