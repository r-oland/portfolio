// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Attractor, Debug, Physics } from '@react-three/rapier';
import dynamic from 'next/dynamic';
import Model from './World';
// =========================

const perfVisible = false;

// Conditional rendering of the performance monitor
const ConditionalPerf = dynamic(async () => {
  if (!perfVisible) return Promise.resolve(() => null);
  const { Perf } = await import('r3f-perf');

  return Perf;
});

export default function Globe() {
  return (
    <>
      <Canvas flat camera={{ fov: 25, position: [5, 4, 9] }}>
        {perfVisible && <ConditionalPerf position="top-left" deepAnalyze />}
        <Physics>
          <Debug />
          <Attractor range={10} strength={0.001} position={[0, 0, 0]} />
          <Model />
        </Physics>
        <ambientLight intensity={0.8} />
        <directionalLight position={[-1, 2, 2]} intensity={0.75} />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}
