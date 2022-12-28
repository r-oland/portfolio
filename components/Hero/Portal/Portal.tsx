import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box3 } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBB } from 'three/examples/jsm/math/OBB';

type ActionName = 'Ride' | 'Jump';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    bar: THREE.Mesh;
    Icosphere012: THREE.Mesh;
    Icosphere012_1: THREE.Mesh;
    Icosphere007: THREE.Mesh;
    Icosphere014: THREE.Mesh;
    Icosphere014_1: THREE.Mesh;
    Icosphere014_2: THREE.Mesh;
    Cube: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder005: THREE.Mesh;
  };
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('/world.glb') as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const [skateboardAnimation, setSkateboardAnimation] =
    useState<ActionName>('Ride');

  useEffect(() => {
    const action = actions[skateboardAnimation];

    if (!action) return;
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [skateboardAnimation]);

  const deck = useRef<THREE.Mesh>(null);
  const obstacle = useRef<THREE.Mesh>(null);
  const planet = useRef<THREE.Group>(null);
  const wrapper = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!deck.current?.geometry) return;
    if (!obstacle.current?.geometry) return;

    // deck.current.geometry.computeBoundingBox();
    // obstacle.current.geometry.computeBoundingBox();

    deck.current.geometry.userData.obb = new OBB().fromBox3(
      deck.current.geometry.boundingBox as Box3
    );

    deck.current.userData.obb = new OBB();

    obstacle.current.geometry.userData.obb = new OBB().fromBox3(
      obstacle.current.geometry.boundingBox as Box3
    );

    obstacle.current.userData.obb = new OBB();
  }, []);

  useFrame((state, delta) => {
    if (!planet.current) return;
    planet.current.rotation.y += 0.45 * delta;
  });

  useFrame(() => {
    if (!deck.current?.geometry.userData.obb) return;
    if (!obstacle.current?.geometry.userData.obb) return;

    deck.current.userData.obb.copy(deck.current.geometry.userData.obb);
    obstacle.current.userData.obb.copy(obstacle.current.geometry.userData.obb);

    deck.current.userData.obb.applyMatrix4(deck.current.matrixWorld);
    obstacle.current.userData.obb.applyMatrix4(obstacle.current.matrixWorld);

    if (
      deck.current.userData.obb.intersectsOBB(obstacle.current.userData.obb)
    ) {
      obstacle.current.material = materials['Material.002'];
    } else {
      obstacle.current.material = materials['Material.004'];
    }
  });

  return (
    <group
      name="Scene"
      ref={group}
      {...props}
      dispose={null}
      scale={[0.25, 0.25, 0.25]}
      onClick={() => {
        if (skateboardAnimation === 'Jump') return;
        setSkateboardAnimation('Jump');
        setTimeout(() => {
          setSkateboardAnimation('Ride');
        }, 800);
      }}
    >
      <group name="scene" position={[0, 0, 0]} rotation={[1.05, 0.74, 0.99]}>
        <group name="Planet" ref={planet}>
          <group
            ref={wrapper}
            name="Obstacle"
            position={[3.26, 0.05, 1.87]}
            rotation={[1.6, 0.03, -1.07]}
          >
            <mesh
              ref={obstacle}
              name="bar"
              geometry={nodes.bar.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="Icosphere006" rotation={[-Math.PI, 0.23, -Math.PI]}>
            <mesh
              name="Icosphere012"
              geometry={nodes.Icosphere012.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Icosphere012_1"
              geometry={nodes.Icosphere012_1.geometry}
              material={materials['Material.002']}
            />
          </group>
          <mesh
            name="Icosphere007"
            geometry={nodes.Icosphere007.geometry}
            material={materials['Material.004']}
            rotation={[-Math.PI, 0.23, -Math.PI]}
          />
          <group name="Icosphere008" rotation={[-Math.PI, 0.23, -Math.PI]}>
            <mesh
              name="Icosphere014"
              geometry={nodes.Icosphere014.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Icosphere014_1"
              geometry={nodes.Icosphere014_1.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Icosphere014_2"
              geometry={nodes.Icosphere014_2.geometry}
              material={materials['Material.002']}
            />
          </group>
        </group>
        <group name="Skateboard">
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials['Material.001']}
            ref={deck}
          />
          <mesh
            name="Cylinder002"
            geometry={nodes.Cylinder002.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder003"
            geometry={nodes.Cylinder003.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder004"
            geometry={nodes.Cylinder004.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder005"
            geometry={nodes.Cylinder005.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/world.glb');
