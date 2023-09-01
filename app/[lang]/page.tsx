import LocaleSwitcher from 'global_components/LocaleSwitcher/LocaleSwitcher';
import { getMetaDescription } from 'utils/getMetaDescription';
import Test from './home/Test';

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
    <div>
      <Test {...params} />
      <LocaleSwitcher {...params} />
    </div>
  );
}
