// Components==============
import { Canvas, useLoader } from '@react-three/fiber';
import { ProjectType } from 'database/work';
import { useLayoutEffect, useRef, useState } from 'react';
import { Group, NearestFilter, TextureLoader } from 'three';
// =========================

function Meshes({ project }: { project: ProjectType }) {
  const ref = useRef<Group>(null);

  const [image, setImage] = useState(0);

  const url = `/projects/${project.id}/image ${image + 1}.jpg`;

  // useFrame(({ clock }) => {
  //   if (!ref.current) return;
  //   const time = clock.getElapsedTime();

  //   ref.current.rotation.y = Math.sin(time * 0.5) / 2;
  // });

  const texture = useLoader(TextureLoader, url);

  useLayoutEffect(() => {
    texture.generateMipmaps = false;
    texture.minFilter = NearestFilter;
  }, []);

  // full canvas = 149
  const dividedBy = 180;

  const width = 864 / dividedBy;
  const height = 497 / dividedBy;
  const depth = 0.075;

  return (
    <group position={[0, 0, 0]} ref={ref}>
      <mesh
        onClick={() =>
          setImage((prev) =>
            prev === project.amountOfImages - 1 ? 0 : prev + 1
          )
        }
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh position={[0, 0, -(depth / 2 + 0.001)]}>
        <boxGeometry args={[width, height, depth]} />
        <meshPhysicalMaterial color="#faf7f4" />
      </mesh>
    </group>
  );
}

export default function Render({
  project,
  inView,
}: {
  project: ProjectType;
  inView: boolean;
}) {
  return (
    <Canvas
      flat
      camera={{ fov: 25, position: [0, 0, 7.5] }}
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
      frameloop={inView ? 'always' : 'never'}
    >
      <ambientLight intensity={0.9} />
      <Meshes project={project} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
