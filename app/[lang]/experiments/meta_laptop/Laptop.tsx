import { animated, useSpring } from '@react-spring/three';
import { Html, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import styles from './MetaLaptop.module.scss';

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    keyboard: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    touchbar: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    ['matte.001']: THREE.MeshStandardMaterial;
    ['screen.001']: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    trackpad: THREE.MeshStandardMaterial;
    touchbar: THREE.MeshStandardMaterial;
  };
};

export default function Model() {
  const { nodes, materials } = useGLTF('/glb/mac.glb') as GLTFResult;
  const group = useRef<THREE.Group>(null);

  const [screenIsOpen, setScreenIsOpen] = useState(false);
  const [screenTurnedOn, setScreenTurnedOn] = useState(false);

  const { rotateX } = useSpring({
    rotateX: screenIsOpen ? -0.2 : Math.PI / 2,
  });

  useEffect(() => {
    if (!screenIsOpen) {
      setTimeout(() => {
        setScreenIsOpen(true);
      }, 1500);

      setTimeout(() => {
        setScreenTurnedOn(true);
      }, 2000);
    }
  }, [screenIsOpen]);

  // Make it float
  useFrame((state) => {
    if (!group?.current) return;

    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  // create black material for screen
  const blackScreenMaterial = new THREE.MeshStandardMaterial({
    color: '#000000',
    metalness: 0,
    roughness: 1,
  });

  return (
    <group ref={group} dispose={null}>
      <group position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
        <animated.group rotation-x={rotateX}>
          <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Cube008.geometry}
              material={materials.aluminium}
            />
            <mesh
              geometry={nodes.Cube008_1.geometry}
              material={materials['matte.001']}
            />
            <mesh
              geometry={nodes.Cube008_2.geometry}
              material={
                screenTurnedOn ? materials['screen.001'] : blackScreenMaterial
              }
            >
              {/* Drei's HTML component can "hide behind" canvas geometry */}
              <Html
                className={styles['screen-wrapper']}
                style={{ display: screenTurnedOn ? 'block' : 'none' }}
                rotation-x={-Math.PI / 2}
                position={[0, 0.05, -0.09]}
                distanceFactor={2.5}
                transform
                occlude
              >
                <iframe src="https://rolandbranten.com" title="screen" />
              </Html>
            </mesh>
          </group>
        </animated.group>
      </group>
      <mesh
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.793, 0, 3.451]}
      />
      <group position={[0, -0.1, 3.394]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
          onClick={() => {
            setScreenIsOpen(false);
            setScreenTurnedOn(false);
          }}
        />
      </group>
      <mesh
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.027, 1.201]}
      />
    </group>
  );
}

useGLTF.preload('/glb/mac.glb');
