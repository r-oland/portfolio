import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useObstacleRayCast } from 'components/Hero/Portal/useObstacleRayCaster';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import Obstacle from './Obstacle';

type ActionName = 'Spin' | 'Ride' | 'Jump';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
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
  const [skateboardAnimation, setSkateboardAnimation] = useState<
    'Ride' | 'Jump'
  >('Ride');

  useEffect(() => {
    if (!actions.Spin) return;
    actions.Spin.play();
  }, []);

  useEffect(() => {
    const action = actions[skateboardAnimation];

    if (!action) return;
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [skateboardAnimation]);

  const skateboardRef = useRef(null);
  const obstaclesRef = useRef(null);
  const rayCast = useObstacleRayCast(skateboardRef, obstaclesRef);

  useFrame(() => {
    const intersection = rayCast();
    if (intersection.length) console.log('Game over!');
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
        <group name="Planet">
          <group name="obstacles" ref={obstaclesRef}>
            <Obstacle />
          </group>
          <group name="Icosphere006" rotation={[-Math.PI, 0.23, -Math.PI]}>
            <mesh
              name="Icosphere012"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere012.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Icosphere012_1"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere012_1.geometry}
              material={materials['Material.002']}
            />
          </group>
          <mesh
            name="Icosphere007"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007.geometry}
            material={materials['Material.004']}
            rotation={[-Math.PI, 0.23, -Math.PI]}
          />
          <group name="Icosphere008" rotation={[-Math.PI, 0.23, -Math.PI]}>
            <mesh
              name="Icosphere014"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere014.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Icosphere014_1"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere014_1.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Icosphere014_2"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere014_2.geometry}
              material={materials['Material.002']}
            />
          </group>
        </group>
        <group
          name="Skateboard"
          position={[-0.04, -0.36, -4.05]}
          rotation={[-1.63, 0.03, 0]}
          ref={skateboardRef}
        >
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/world.glb');
