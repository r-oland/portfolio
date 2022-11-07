// Components==============
import { useLocale } from 'hooks/useLocale';
import useNavItems from 'hooks/useNavItems';
import styles from './ChapterTitle.module.scss';
// =========================

export default function ChapterTitle({
  id,
  color,
  marginBottom,
}: {
  id: number;
  color: 'grey' | 'white';
  marginBottom: string;
}) {
  const { locale } = useLocale();
  const navItems = useNavItems();

  return (
    <div
      className={`${styles.wrapper} ${styles[color]}`}
      style={{ marginBottom }}
    >
      <p>{navItems[id].name[locale]}</p>
      <div className={styles.bar} />
    </div>
  );
}
