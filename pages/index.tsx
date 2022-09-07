// Components==============
import Hero from 'components/Hero/Hero';
import styles from 'components/Home.module.scss';
import Work from 'components/Work/Work';
import Head from 'next/head';
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
      <Head>
        <title>Roland Branten</title>
      </Head>
      <div className={styles.wrapper}>
        <Hero />
        <Work />
      </div>
    </HomeContext.Provider>
  );
}
