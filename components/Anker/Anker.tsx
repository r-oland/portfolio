// Components==============
import styles from './Anker.module.scss';
// =========================

export type AnkerType = 'introduction' | 'work' | 'tech' | 'about' | 'contact';

export default function Anker({
  id,
  lessMargin,
}: {
  id: AnkerType;
  lessMargin?: boolean;
}) {
  return (
    <div
      id={id}
      className={`${styles.wrapper} ${lessMargin ? styles['more-to-top'] : ''}`}
    />
  );
}
