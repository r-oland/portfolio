// Components==============
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';
import Tech from 'components/Tech/Tech';
import { useMediaQ } from 'hooks/useMediaQ';
import { createContext, useMemo } from 'react';
// =========================

type HomeContextType = {
  isHome: boolean;
};

export const HomeContext = createContext({} as HomeContextType);

export default function Home() {
  const value = useMemo(() => ({ isHome: true }), []);
  const query = useMediaQ('min', 768);

  return (
    <HomeContext.Provider value={value}>
      <div>
        {query && <Tech />}
        <About />
        <Contact />
      </div>
    </HomeContext.Provider>
  );
}
