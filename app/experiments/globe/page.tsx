// Components==============
import Canvas from 'experiments/Globe/Canvas';
// =========================

export const metadata = {
  title: 'Globe',
};

export default function Globe() {
  return (
    <>
      <div style={{ height: '100vh', display: 'grid' }}>
        <Canvas />
      </div>
    </>
  );
}
