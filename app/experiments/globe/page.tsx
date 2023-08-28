// Components==============
import Canvas from 'experiments/Globe/Canvas';
import Head from 'next/head';
// =========================

export default function Globe() {
  return (
    <>
      <Head>
        <title>Globe</title>
      </Head>
      <div style={{ height: '100vh', display: 'grid' }}>
        <Canvas />
      </div>
    </>
  );
}
