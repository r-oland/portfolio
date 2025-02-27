// Components==============
import {
  createPortal,
  useFrame,
  extend,
  ReactThreeFiber,
} from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFBO } from '@react-three/drei';
import fragmentShader from './fragmentShader.glsl';
import vertexShader from './vertexShader.glsl';
import SimulationMaterial from './SimulationMaterial';
// =========================

extend({ SimulationMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    simulationMaterial: ReactThreeFiber.Object3DNode<
      SimulationMaterial,
      typeof SimulationMaterial
    >;
  }
}

export default function FBOParticles() {
  const size = 256;

  const points = useRef() as React.MutableRefObject<THREE.Points>;
  const simulationMaterialRef =
    useRef() as React.MutableRefObject<THREE.ShaderMaterial>;

  const [scene] = useState(new THREE.Scene());
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / 2 ** 53, 1);
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([
    0,
    0, // bottom-left
    1,
    0, // bottom-right
    1,
    1, // top-right
    0,
    0, // bottom-left
    1,
    1, // top-right
    0,
    1, // top-left
  ]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
    }),
    []
  );

  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    (
      points.current.material as THREE.ShaderMaterial
    ).uniforms.uPositions.value = renderTarget.texture;

    simulationMaterialRef.current.uniforms.uTime.value =
      clock.elapsedTime * 0.2;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          // blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
}
