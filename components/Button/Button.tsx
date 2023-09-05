'use client';

// Components==============
import { useRouter } from 'next/navigation';
import styles from './Button.module.scss';
// =========================

export default function Button({
  variant,
  children,
  onClick,
  to,
  inactive,
  stretch,
  submit,
}: {
  variant: 'border-black' | 'green-light';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  to?: string;
  inactive?: boolean;
  stretch?: boolean;
  submit?: boolean;
}) {
  const { push } = useRouter();

  return (
    <button
      onClick={
        to
          ? (e) => {
              e.stopPropagation();
              push(to);
            }
          : onClick
      }
      type={submit ? 'submit' : 'button'}
      className={`${styles.wrapper} ${styles[variant]}`}
      style={{
        pointerEvents: inactive ? 'none' : 'initial',
        opacity: inactive ? 0.4 : 1,
        width: stretch ? '100%' : undefined,
      }}
    >
      {children}
    </button>
  );
}
