import { useMemo } from 'react';
import { Object3D, Raycaster, Vector3 } from 'three';

export const useObstacleRayCast = (
  skateboardRef: { current: Object3D | null },
  obstaclesRef: { current: Object3D | null }
) => {
  const raycaster = useMemo(() => new Raycaster(), []);
  const pos = useMemo(() => new Vector3(), []);
  const dir = useMemo(() => new Vector3(), []);
  const collisionItems = obstaclesRef.current?.children;

  return () => {
    if (!skateboardRef.current || !collisionItems?.length) return [];
    raycaster.set(
      skateboardRef.current.getWorldPosition(pos),
      skateboardRef.current.getWorldDirection(dir)
    );

    return raycaster.intersectObjects(collisionItems);
  };
};
