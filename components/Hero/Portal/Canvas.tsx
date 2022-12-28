// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
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

export default function PortalCanvas({ inView }: { inView: boolean }) {
  return (
    <>
      <Canvas
        flat
        camera={{ fov: 25, position: [5, 4, 9] }}
        frameloop={inView ? 'always' : 'never'}
      >
        {perfVisible && <ConditionalPerf position="top-left" deepAnalyze />}
        <Model />
        <ambientLight intensity={0.8} />
        <directionalLight position={[-1, 2, 2]} intensity={0.75} />
        <OrbitControls
          makeDefault
          enableZoom={false}
          // enablePan={false}
          // minDistance={7}
          // maxDistance={14}
          // zoomSpeed={0.25}
          // vertical
          // maxPolarAngle={Math.PI / 2.2}
          // minPolarAngle={Math.PI / 4}
          // Horizontal
          // minAzimuthAngle={Math.PI / 20}
          // maxAzimuthAngle={Math.PI / 3}
          // rotateSpeed={0.25}
        />
      </Canvas>
    </>
  );
}
