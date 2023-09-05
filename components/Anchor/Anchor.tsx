// Components==============
import styles from './Anchor.module.scss';
// =========================

export type AnchorType = 'introduction' | 'work' | 'tech' | 'about' | 'contact';

export default function Anchor({
  id,
  lessMargin,
}: {
  id: AnchorType;
  lessMargin?: boolean;
}) {
  return (
    <div
      id={id}
      className={`${styles.wrapper} ${lessMargin ? styles['more-to-top'] : ''}`}
    />
  );
}
