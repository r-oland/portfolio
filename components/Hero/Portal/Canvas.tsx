// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Fireflies from './Fireflies';
import Portal from './Portal';
import WipText from './WipText/WipText';
// =========================

const perfVisible = false;

// Conditional rendering of the performance monitor
const ConditionalPerf = dynamic(async () => {
  if (!perfVisible) return Promise.resolve(() => null);
  const { Perf } = await import('r3f-perf');

  return Perf;
});

export default function PortalCanvas({ inView }: { inView: boolean }) {
  return (
    <>
      <WipText />
      <Canvas
        flat
        camera={{ fov: 25, position: [5, 4, 9] }}
        frameloop={inView ? 'always' : 'never'}
      >
        <OrbitControls makeDefault enableZoom={false} />
        {perfVisible && <ConditionalPerf position="top-left" deepAnalyze />}
        <Fireflies />
        <Portal />
      </Canvas>
    </>
  );
}
