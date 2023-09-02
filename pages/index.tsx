// Components==============
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';
import Tech from 'components/Tech/Tech';
import Work from 'components/Work/Work';
import Cursor from 'global_components/Cursor/Cursor';
import Layout from 'global_components/Layout/Layout';
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
    <Layout>
      <HomeContext.Provider value={value}>
        <div>
          <Work />
          {query && <Tech />}
          <About />
          <Contact />
        </div>
        <Cursor />
      </HomeContext.Provider>
    </Layout>
  );
}
