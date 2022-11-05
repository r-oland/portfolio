// Components==============
import { Sparkles } from '@react-three/drei';
import { memo } from 'react';
// =========================

function NoMemoFireflies() {
  const scale = new Float32Array(
    Array.from({ length: 40 }, () => 0.5 + Math.random() * 7)
  );

  return (
    <Sparkles
      color="#e4ffec"
      scale={[4, 1, 4]}
      speed={0.25}
      position-y={0.4}
      count={scale.length}
      size={scale}
    />
  );
}

export default memo(NoMemoFireflies);
