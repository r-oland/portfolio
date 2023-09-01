'use client';

// Components==============
import React from 'react';
// =========================

const dutchDomain = 'https://rolandbranten.nl';
const englishDomain = 'http://rolandbranten.com';

const redirected = () => {
  // get the current domain
  const currentDomain = window.location.origin;

  // get the current path
  const currentPath = window.location.pathname;

  // redirect to the other domain with the current path
  if (currentDomain.includes(dutchDomain))
    window.location.href = englishDomain + currentPath;

  window.location.href = dutchDomain + currentPath;
};

export default function Switcher({ children }: { children: React.ReactNode }) {
  return <div onClick={() => redirected()}>{children}</div>;
}
