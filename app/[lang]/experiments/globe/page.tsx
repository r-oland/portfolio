// Components==============
import Canvas from 'app/[lang]/experiments/globe/Canvas';
// =========================

export const metadata = {
  title: 'Globe',
};

export default function Globe() {
  return (
    <div style={{ height: '100vh', display: 'grid' }}>
      <Canvas />
    </div>
  );
}
