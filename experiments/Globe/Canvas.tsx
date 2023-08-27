// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Attractor } from '@react-three/rapier-addons';
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
        <Physics debug>
          <Attractor range={10} strength={0.001} position={[0, 0, 0]} />
          <Model />
        </Physics>
        <ambientLight intensity={1.8} />
        <directionalLight position={[-1, 2, 2]} intensity={2.4} />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}
