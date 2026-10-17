// Components==============
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import { useMediaQ } from 'hooks/useMediaQ';
import AutoRotate from './AutoRotate';
import Particles from './Particles';
// =========================

export default function ParticlesCanvas({
  inView,
  scrollProgress,
}: {
  inView: boolean;
  scrollProgress: MotionValue<number>;
}) {
  const isMobile = useMediaQ('max', 768);

  return (
    <Canvas
      camera={{ position: [1.5, 1.5, 2.5] }}
      frameloop={inView ? 'always' : 'never'}
    >
      <ambientLight intensity={0.5} />
      <Particles
        // Remount when the particle count changes so the buffers are rebuilt
        key={isMobile ? 'mobile' : 'desktop'}
        size={isMobile ? 160 : 256}
        scrollProgress={scrollProgress}
      />
      {isMobile ? (
        <AutoRotate speed={0.4} />
      ) : (
        <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} />
      )}
    </Canvas>
  );
}
