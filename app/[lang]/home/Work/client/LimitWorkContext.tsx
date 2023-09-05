'use client';

// Components==============
import React, { createContext, useMemo, useState } from 'react';
// =========================

type LimitWorkContextType = {
  limit: boolean;
  setLimit: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LimitWorkContext = createContext({} as LimitWorkContextType);

export default function LimitWorkContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [limit, setLimit] = useState(true);

  const value = useMemo(() => ({ limit, setLimit }), [limit]);

  return (
    <LimitWorkContext.Provider value={value}>
      {children}
    </LimitWorkContext.Provider>
  );
}
