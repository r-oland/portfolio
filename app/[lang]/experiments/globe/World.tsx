import { useGLTF } from '@react-three/drei';
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
} from '@react-three/rapier';
import { useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    obstacle: THREE.Mesh;
    planet_left_1: THREE.Mesh;
    planet_left_2: THREE.Mesh;
    planet_right_1: THREE.Mesh;
    planet_right_2: THREE.Mesh;
    planet_right_3: THREE.Mesh;
    road: THREE.Mesh;
    deck: THREE.Mesh;
    wheel_left_back: THREE.Mesh;
    wheel_left_front: THREE.Mesh;
    wheel_right_back: THREE.Mesh;
    wheel_right_front: THREE.Mesh;
  };
  materials: {
    Plastic: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
    Aqua: THREE.MeshStandardMaterial;
    Concrete: THREE.MeshStandardMaterial;
  };
};

export default function Model() {
  const { nodes, materials } = useGLTF('/world.glb') as GLTFResult;

  const skateboard = useRef<RapierRigidBody>(null);

  const handleJump = () => {
    skateboard.current?.applyImpulse({ x: 0, y: 0.01, z: 0 }, true);
  };

  return (
    <group name="scene" scale={[0.28, 0.28, 0.28]} dispose={null}>
      <RigidBody type="fixed" colliders="hull">
        <group name="planet">
          <mesh
            name="obstacle"
            geometry={nodes.obstacle.geometry}
            material={materials.Plastic}
            position={[0.05, 3.89, -0.89]}
            rotation={[-0.56, -1.53, -0.32]}
          />
          <mesh
            name="planet_left_1"
            geometry={nodes.planet_left_1.geometry}
            material={materials.Ground}
          />
          <mesh
            name="planet_left_2"
            geometry={nodes.planet_left_2.geometry}
            material={materials.Grass}
          />
          <mesh
            name="planet_right_1"
            geometry={nodes.planet_right_1.geometry}
            material={materials.Ground}
          />
          <mesh
            name="planet_right_2"
            geometry={nodes.planet_right_2.geometry}
            material={materials.Aqua}
          />
          <mesh
            name="planet_right_3"
            geometry={nodes.planet_right_3.geometry}
            material={materials.Grass}
          />
          <mesh
            name="road"
            geometry={nodes.road.geometry}
            material={materials.Concrete}
          />
        </group>
      </RigidBody>
      <RigidBody
        ref={skateboard}
        colliders={false}
        position={[-0.37, 2.16, 3.41]}
        rotation={[-0.98, 1.49, 1.96]}
      >
        <CuboidCollider args={[0.6, 0.06, 0.2]} />
        <group name="Skateboard" onClick={handleJump}>
          <mesh
            name="deck"
            geometry={nodes.deck.geometry}
            material={materials.Plastic}
          />
          <mesh
            name="wheel_left_back"
            geometry={nodes.wheel_left_back.geometry}
            material={materials.Aqua}
          />
          <mesh
            name="wheel_left_front"
            geometry={nodes.wheel_left_front.geometry}
            material={materials.Aqua}
          />
          <mesh
            name="wheel_right_back"
            geometry={nodes.wheel_right_back.geometry}
            material={materials.Aqua}
          />
          <mesh
            name="wheel_right_front"
            geometry={nodes.wheel_right_front.geometry}
            material={materials.Aqua}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/world.glb');
