// Components==============
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// =========================

const yAxis = new THREE.Vector3(0, 1, 0);

// Touch-friendly alternative to OrbitControls' autoRotate. OrbitControls sets
// `touch-action: none` on the canvas, which blocks page scrolling on mobile.
export default function AutoRotate({ speed }: { speed: number }) {
  useFrame((state, delta) => {
    const { camera } = state;
    // Matches OrbitControls' autoRotateSpeed (one turn per 60s at speed 1)
    const angle = ((2 * Math.PI) / 60) * speed * delta;
    camera.position.applyAxisAngle(yAxis, -angle);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
