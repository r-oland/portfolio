// Components==============
import React from 'react';
import { useControls } from 'leva';
import {
  Float,
  MeshTransmissionMaterial,
  PivotControls,
} from '@react-three/drei';
// =========================

function Shape({
  float = 300,
  color,
  position,
  config,
}: {
  float?: number;
  color: string;
  position: [number, number, number];
  config: any;
}) {
  return (
    <Float floatIntensity={float} rotationIntensity={0} speed={2}>
      <mesh position={position}>
        <boxGeometry args={[400, 200, 10]} />
        <MeshTransmissionMaterial
          {...config}
          color={color}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

export default function Scene({ ...props }) {
  const config = useControls({
    backside: false,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 256, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.95, min: 0, max: 1 },
    roughness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: '#ffffff',
  });

  return (
    <group {...props}>
      <PivotControls
        scale={2}
        activeAxes={[true, true, false]}
        offset={[0, 0, 100]}
      >
        <mesh position={[0, 0, 0]} scale={[1.5, 1.5, 0.4]}>
          <octahedronGeometry args={[150, 0]} />
          <MeshTransmissionMaterial
            {...config}
            color="#fef4ef"
            toneMapped={false}
          />
        </mesh>
      </PivotControls>
      <Shape
        color="#FF718F"
        config={config}
        position={[-700.64, 343.77, -621.72]}
      />
      <Shape
        color="#29C1A2"
        config={config}
        position={[-458.87, 411.05, -435.92]}
      />
      <Shape color="#FF9060" config={config} position={[0.66, 47, -435.92]} />
      <Shape
        color="#823FFF"
        config={config}
        position={[-348.74, -162.23, -167.36]}
      />
      <Shape color="skyblue" config={config} position={[242.6, 207, -273.39]} />
    </group>
  );
}
