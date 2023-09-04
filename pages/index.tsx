// Components==============
import Contact from 'components/Contact/Contact';
import { createContext, useMemo } from 'react';
// =========================

type HomeContextType = {
  isHome: boolean;
};

export const HomeContext = createContext({} as HomeContextType);

export default function Home() {
  const value = useMemo(() => ({ isHome: true }), []);

  return (
    <HomeContext.Provider value={value}>
      <div>
        <Contact />
      </div>
    </HomeContext.Provider>
  );
}
