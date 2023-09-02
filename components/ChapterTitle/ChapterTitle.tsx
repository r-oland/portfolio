// Components==============
import useNavItems from 'hooks/useNavItems';
import styles from './ChapterTitle.module.scss';
// =========================

export default function ChapterTitle({
  id,
  color,
  marginBottom,
  lang,
}: {
  id: number;
  color: 'grey' | 'white';
  marginBottom: string;
  lang: 'nl' | 'en';
}) {
  const navItems = useNavItems(lang);

  return (
    <div
      className={`${styles.wrapper} ${styles[color]}`}
      style={{ marginBottom }}
    >
      <p>{navItems[id].name}</p>
      <div className={styles.bar} />
    </div>
  );
}
