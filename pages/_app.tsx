// Components==============
import Layout from 'global_components/Layout/Layout';
import SmoothScroll from 'global_components/SmoothScroll';
import { useAppHeight } from 'hooks/useAppHeight';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/App.scss';
// =========================

export default function MyApp({ Component, pageProps }: AppProps) {
  useAppHeight();

  return (
    <>
      <Head>
        {/* prevent zoom in on input focus */}
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;user-scalable=0;"
        />
      </Head>
      <SmoothScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SmoothScroll>
    </>
  );
}
