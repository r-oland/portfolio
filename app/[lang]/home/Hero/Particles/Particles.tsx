// Components==============
import {
  createPortal,
  useFrame,
  useThree,
  extend,
  ReactThreeFiber,
} from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFBO } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import fragmentShader from './fragmentShader.glsl';
import vertexShader from './vertexShader.glsl';
import SimulationMaterial from './SimulationMaterial';
// =========================

extend({ SimulationMaterial });

// Approximate on-screen diameter of the particle cloud in world units
const CLOUD_DIAMETER = 2.5;

declare module '@react-three/fiber' {
  interface ThreeElements {
    simulationMaterial: ReactThreeFiber.Object3DNode<
      SimulationMaterial,
      typeof SimulationMaterial
    >;
  }
}

export default function FBOParticles({
  size,
  scrollProgress,
}: {
  size: number;
  scrollProgress: MotionValue<number>;
}) {
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
      uRayOrigin: { value: new THREE.Vector3() },
      uRayDirection: { value: new THREE.Vector3(0, 0, -1) },
      uMouseStrength: { value: 0 },
      uMouseRadius: { value: 1.43 },
      uMousePush: { value: 0.33 },
      uMouseVariation: { value: 0.73 },
      uHighlight: { value: 0.42 },
      uExplode: { value: 0 },
    }),
    []
  );

  const { gl: renderer, camera: sceneCamera, size: canvasSize } = useThree();

  // Zoom so the cloud fills a share of the canvas' shortest side. Small
  // canvases get a bigger share, easing down to the desktop look on large ones.
  useEffect(() => {
    if (!(sceneCamera instanceof THREE.PerspectiveCamera)) return;

    const shortestSide = Math.min(canvasSize.width, canvasSize.height);
    const fill = THREE.MathUtils.mapLinear(
      THREE.MathUtils.clamp(shortestSide, 400, 900),
      400,
      900,
      0.95,
      0.5
    );
    const distance = sceneCamera.position.length();
    const visibleHeight =
      2 * distance * Math.tan(THREE.MathUtils.degToRad(sceneCamera.fov / 2));
    const aspect = canvasSize.width / canvasSize.height;

    sceneCamera.zoom =
      (fill * visibleHeight * Math.min(1, aspect)) / CLOUD_DIAMETER;
    sceneCamera.updateProjectionMatrix();
  }, [sceneCamera, canvasSize.width, canvasSize.height]);

  // Mouse interaction
  const isHovering = useRef(false);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const smoothPointer = useMemo(() => new THREE.Vector2(), []);

  useEffect(() => {
    const element = renderer.domElement;
    const onEnter = () => {
      isHovering.current = true;
    };
    const onLeave = () => {
      isHovering.current = false;
    };

    element.addEventListener('pointerenter', onEnter);
    element.addEventListener('pointerleave', onLeave);
    return () => {
      element.removeEventListener('pointerenter', onEnter);
      element.removeEventListener('pointerleave', onLeave);
    };
  }, [renderer]);

  useFrame((state, delta) => {
    const { gl, clock } = state;

    const ease = 1 - Math.exp(-delta * 8);
    smoothPointer.lerp(state.pointer, ease);
    raycaster.setFromCamera(smoothPointer, state.camera);
    uniforms.uRayOrigin.value.copy(raycaster.ray.origin);
    uniforms.uRayDirection.value.copy(raycaster.ray.direction);
    uniforms.uMouseStrength.value = THREE.MathUtils.lerp(
      uniforms.uMouseStrength.value,
      isHovering.current ? 1 : 0,
      1 - Math.exp(-delta * 6)
    );

    // Explode over the first half of scrolling past the visual
    const explodeProgress = Math.min(scrollProgress.get() / 0.5, 1);
    const explodeTarget = 1 - (1 - explodeProgress) ** 2;
    uniforms.uExplode.value = THREE.MathUtils.lerp(
      uniforms.uExplode.value,
      explodeTarget,
      1 - Math.exp(-delta * 6)
    );

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
