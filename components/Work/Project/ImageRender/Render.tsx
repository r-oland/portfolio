// Components==============
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ProjectType } from 'database/work';
import { useLayoutEffect, useRef, useState } from 'react';
import { Group, NearestFilter, TextureLoader } from 'three';
// =========================

function Meshes({ project, left }: { project: ProjectType; left: boolean }) {
  const ref = useRef<Group>(null);

  const [image, setImage] = useState(0);

  const url = `/projects/${project.id}/image ${image + 1}.jpg`;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const time = clock.getElapsedTime();

    const startRotation = 0.45;
    const speed = 0.5;
    const range = 11; // more = less

    ref.current.rotation.y =
      (left ? -startRotation : startRotation) + Math.sin(time * speed) / range;
  });

  const texture = useLoader(TextureLoader, url);

  useLayoutEffect(() => {
    texture.generateMipmaps = false;
    texture.minFilter = NearestFilter;
  }, []);

  // full canvas = 149
  const dividedBy = 180;

  const width = 864 / dividedBy;
  const height = 497 / dividedBy;
  const depth = 0.1;
  const offset = 0.58;

  return (
    <group position={[left ? -offset : offset, 0, 0]} ref={ref}>
      <group rotation={[-0.4, 0, 0]}>
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
          <meshPhysicalMaterial color={project.color} />
        </mesh>
      </group>
    </group>
  );
}

export default function Render({
  project,
  inView,
  left,
}: {
  project: ProjectType;
  inView: boolean;
  left: boolean;
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
      <ambientLight intensity={0.5} />
      <Meshes project={project} left={left} />
    </Canvas>
  );
}
