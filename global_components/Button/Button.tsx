// Components==============
import HardShadow from 'global_components/HardShadow/HardShadow';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Button.module.scss';
// =========================

type Color = 'red' | 'green' | 'white';

export default function Button({
  children,
  onClick,
  to,
  inactive,
  color = 'green',
  stretch,
  submit,
}: {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  to?: string;
  inactive?: boolean;
  color?: Color;
  stretch?: boolean;
  submit?: boolean;
}) {
  const history = useRouter();

  return (
    <div
      style={{
        pointerEvents: inactive ? 'none' : 'initial',
        opacity: inactive ? 0.4 : 1,
      }}
    >
      <HardShadow stretch={stretch} animations>
        <button
          onClick={
            to
              ? (e) => {
                  e.stopPropagation();
                  history.push(to);
                }
              : onClick
          }
          type={submit ? 'submit' : 'button'}
          className={`${styles.wrapper} ${styles[color]}`}
          style={{
            width: stretch ? '100%' : '',
          }}
        >
          {children}
        </button>
      </HardShadow>
    </div>
  );
}
