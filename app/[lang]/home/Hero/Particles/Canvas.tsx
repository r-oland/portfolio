'use client';

// Components==============
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';
// =========================

export default function ParticlesCanvas() {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 2.5] }}>
      <ambientLight intensity={0.5} />
      <Particles />
      <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} />
    </Canvas>
  );
}
