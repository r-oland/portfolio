// Components==============
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';
// =========================

export default function ParticlesCanvas({ inView }: { inView: boolean }) {
  return (
    <Canvas
      camera={{ position: [1.5, 1.5, 2.5] }}
      frameloop={inView ? 'always' : 'never'}
    >
      <ambientLight intensity={0.5} />
      <Particles />
      <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} />
    </Canvas>
  );
}
