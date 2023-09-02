import { getMetaDescription } from 'utils/getMetaDescription';
import styles from 'app/[lang]/home/Home.module.scss';
import Hero from 'app/[lang]/home/Hero/Hero';

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
    <div className={styles.wrapper}>
      <Hero {...params} />
    </div>
  );
}
