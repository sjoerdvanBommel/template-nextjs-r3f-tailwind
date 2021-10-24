import { OrbitControls, RoundedBox, useTexture } from '@react-three/drei';
import React from 'react';
import { useTweakableProperties } from 'utils/hooks/UseTweakableProperties';

const ExperienceCanvasContent = () => {
  const tweakableProperties = useTweakableProperties({
    color: { value: '#3ba2f5' },
    opacity: { value: 0.7, min: 0, max: 1, step: 0.01 },
  }, 'Cube', true);

  const [matcap, _] = useTexture([
    '/default-block-light.jpg',
    '/big-files-to-load (1).png'
  ]);

  return (
    <>
      <RoundedBox args={[1, 1, 1]} rotation={[Math.PI / 4, Math.PI / 4, 0]} radius={0.1} smoothness={4}>
        <meshMatcapMaterial matcap={matcap} color={tweakableProperties.color.value} transparent={true} opacity={tweakableProperties.opacity.value} />
      </RoundedBox>
      <OrbitControls />
    </>
  )
}

export default ExperienceCanvasContent
