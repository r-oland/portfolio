'use client';

// Components==============
import React, { createContext, useMemo } from 'react';
import SmoothScroll from './SmoothScroll';
import CalculateAppHeight from './CalculateAppHeight';
// =========================

type LangContextType = {
  lang: 'en' | 'nl';
};

export const LangContext = createContext({} as LangContextType);

export default function ClientWrapper({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: 'en' | 'nl';
}) {
  const value = useMemo(() => ({ lang }), [lang]);

  return (
    <LangContext.Provider value={value}>
      <CalculateAppHeight>
        <SmoothScroll>{children}</SmoothScroll>
      </CalculateAppHeight>
    </LangContext.Provider>
  );
}
