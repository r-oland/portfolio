'use client';

// Components==============
import React from 'react';
// =========================

const dutchDomain = '.nl';
const englishDomain = '.com';

const redirect = () => {
  // get the current domain
  const currentDomain = window.location.origin;

  // get the current path
  const currentPath = window.location.pathname;

  const correctDomain = currentDomain.includes(dutchDomain)
    ? englishDomain
    : dutchDomain;

  // redirect to the other domain with the current path
  window.location.href = `https://rolandbranten${correctDomain}${currentPath}`;
};

export default function SwitchLogic({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div onClick={() => redirect()} className={className}>
      {children}
    </div>
  );
}
