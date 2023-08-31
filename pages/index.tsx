// Components==============
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';
import Hero from 'components/Hero/Hero';
import styles from 'components/Home.module.scss';
import Tech from 'components/Tech/Tech';
import Work from 'components/Work/Work';
import Cursor from 'global_components/Cursor/Cursor';
import Layout from 'global_components/Layout/Layout';
import { useLocale } from 'hooks/useLocale';
import { useMediaQ } from 'hooks/useMediaQ';
import Head from 'next/head';
import { createContext, useMemo } from 'react';
// =========================

type HomeContextType = {
  isHome: boolean;
};

const description =
  'Creative developer based in Eindhoven, The Netherlands. Currently working as a freelancer who is enthusiastic about creating engaging and delightful digital experiences.';
const descriptionDutch =
  'Creative developer uit Eindhoven. Momenteel aan de slag als freelancer die enthousiast is over het maken van unieke digitale ervaringen.';

export const HomeContext = createContext({} as HomeContextType);

export default function Home() {
  const value = useMemo(() => ({ isHome: true }), []);
  const query = useMediaQ('min', 768);
  const { t } = useLocale();

  return (
    <Layout>
      <HomeContext.Provider value={value}>
        <Head>
          <title>Roland Branten</title>
          <meta name="description" content={t(description, descriptionDutch)} />
        </Head>
        <div className={styles.wrapper}>
          <Hero />
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
