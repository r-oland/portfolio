import { getMetaDescription } from 'utils/getMetaDescription';
import styles from 'app/[lang]/home/Home.module.scss';
import Hero from 'app/[lang]/home/Hero/Hero';
import DesktopNav from './home/Nav/DesktopNav/DesktopNav';
import MobileNav from './home/Nav/MobileNav/MobileNav';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: 'en' | 'nl' };
}) {
  return {
    title: 'Roland Branten',
    description: getMetaDescription(lang),
  };
}

export default async function Page({
  params,
}: {
  params: { lang: 'en' | 'nl' };
}) {
  return (
    <>
      <DesktopNav lang={params.lang} />
      <MobileNav lang={params.lang} />
      <div className={styles.wrapper}>
        <Hero {...params} />
      </div>
    </>
  );
}
