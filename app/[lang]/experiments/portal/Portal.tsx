// Components==============
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
// =========================

type GLTFResult = GLTF & {
  nodes: {
    ['right-light']: THREE.Mesh;
    Portal: THREE.Mesh;
    ['left-light']: THREE.Mesh;
    Baked: THREE.Mesh;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  materials: {};
};

export default function Portal() {
  const { nodes } = useGLTF('/glb/portal.glb') as unknown as GLTFResult;

  const texture = useTexture('/Baked.jpg');
  texture.flipY = false;

  return (
    <group dispose={null} position={[0, -0.25, 0]}>
      <mesh
        geometry={nodes['right-light'].geometry}
        position={[0.6, 0.93, 0.45]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial color="rgb(255, 232, 155)" />
      </mesh>
      <mesh
        geometry={nodes.Portal.geometry}
        position={[0, 0.72, -1.76]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color="#e5fdf6" />
      </mesh>
      <mesh
        geometry={nodes['left-light'].geometry}
        position={[-0.56, 0.93, 0.43]}
      >
        <meshBasicMaterial color="rgb(255, 232, 155)" />
      </mesh>
      <mesh geometry={nodes.Baked.geometry}>
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/glb/portal.glb');
