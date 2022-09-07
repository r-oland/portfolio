// Components==============
import { m } from 'framer-motion';
import styles from './HardShadow.module.scss';
// =========================

const variants = {
  hover: { scale: 1 },
  initial: { scale: 1 },
  tap: { scale: 0.9 },
};

const child = {
  hover: {
    x: 0,
    y: 0,
    transition: {
      damping: 4,
    },
  },
  initial: { x: 4, y: -4 },
};

export default function HardShadow({
  children,
  stretch,
  animations,
}: {
  children: React.ReactNode;
  stretch?: boolean;
  animations?: boolean;
}) {
  return (
    <m.div
      className={styles.wrapper}
      whileHover={animations ? 'hover' : undefined}
      initial="initial"
      whileTap={animations ? 'tap' : undefined}
      variants={variants}
      style={{
        width: stretch ? 'calc(100% - 4px)' : undefined,
        cursor: animations ? 'pointer' : 'initial',
      }}
    >
      <m.div variants={child} className={styles.content}>
        {children}
      </m.div>
      <div className={styles.shadow} />
    </m.div>
  );
}
