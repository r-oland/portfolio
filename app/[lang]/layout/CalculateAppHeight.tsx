// Components==============
import React, { useEffect } from 'react';
// =========================

const setAppHeight = () => {
  if (typeof document === 'undefined') return;

  const doc = document.documentElement;

  const supportsDvh = CSS.supports('height', '100dvh');

  const height = supportsDvh
    ? '100dvh'
    : `${
        typeof visualViewport !== 'undefined'
          ? visualViewport?.height
          : window.innerHeight
      }px`;

  doc.style.setProperty('--app-height', height);
};

setAppHeight();

export default function CalculateAppHeight({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const supportsDvh = CSS.supports('height', '100dvh');
    if (supportsDvh) return;

    window.addEventListener('resize', setAppHeight);
  }, []);

  return children;
}
