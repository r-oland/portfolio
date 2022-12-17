// Components==============
import React from 'react';
// =========================

export default function Obstacle() {
  return (
    <mesh position={[-0.04, -0, -4.05]} name="Obstacle">
      <boxBufferGeometry args={[0.5, 2, 0.5]} />
    </mesh>
  );
}
