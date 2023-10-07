'use client';

// Components==============
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { Suspense, useRef } from 'react';
import { DirectionalLight } from 'three';
import Model from './Laptop';
// =========================

function Lights() {
  const { ambientLight, directionalLightPosition, directionalLightIntensity } =
    useControls({
      ambientLight: { name: 'intensity', value: 2.5, min: 0, max: 10 },
      directionalLightPosition: {
        value: [-3, 7.5, 2.2],
        step: 0.1,
        min: -10,
        max: 10,
      },
      directionalLightIntensity: {
        name: 'intensity',
        value: 0.4,
        min: 0,
        max: 10,
      },
    });

  const dirRef = useRef<DirectionalLight>(null);

  return (
    <>
      <ambientLight intensity={ambientLight} />
      <directionalLight
        ref={dirRef}
        position={directionalLightPosition}
        intensity={directionalLightIntensity}
      />
    </>
  );
}

export default function MetaLaptop() {
  const { groupPosition, groupRotation } = useControls({
    groupPosition: {
      value: [0, 0, 0],
      step: 0.1,
      min: -10,
      max: 10,
    },
    groupRotation: {
      value: [0.2, Math.PI, 0],
      step: 0.1,
      min: -10,
      max: 10,
    },
  });

  return (
    <>
      <Leva collapsed />
      <Canvas flat camera={{ position: [0, 0, -15], fov: 55 }}>
        <Suspense fallback={null}>
          <group position={groupPosition} rotation={groupRotation}>
            <Model />
          </group>
          <Environment preset="city" />
        </Suspense>
        <Lights />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </>
  );
}
