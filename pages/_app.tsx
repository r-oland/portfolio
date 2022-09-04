// Components==============
import React from 'react';
import Layout from 'global_components/Layout/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/App.scss';
import { useAppHeight } from 'hooks/useAppHeight';
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
