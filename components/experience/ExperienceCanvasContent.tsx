import { useTweakableProperties } from '@hooks/use-tweakable-properties/UseTweakableProperties';
import { OrbitControls, RoundedBox, useTexture } from '@react-three/drei';
import React from 'react';

const ExperienceCanvasContent = () => {
  const tweakableProperties = useTweakableProperties({
    color: { value: '#275375' },
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
    radius: { value: 0.1, min: 0, max: 0.5, step: 0.01 },
    smoothness: { value: 7, min: 1, max: 10, step: 1 },
    scaleY: { value: 1, min: 0.1, max: 10, step: 0.01 },
    scaleX: { value: 1, min: 0.1, max: 10, step: 0.01 },
    scaleZ: { value: 1, min: 0.1, max: 10, step: 0.01 },
  }, 'Cube', true);

  const matcap = useTexture('/default-block-light.jpg');

  return (
    <>
      <RoundedBox
        args={[tweakableProperties.scaleX.value, tweakableProperties.scaleY.value, tweakableProperties.scaleZ.value]}
        radius={tweakableProperties.radius.value}
        smoothness={tweakableProperties.smoothness.value}
      >
        <meshMatcapMaterial
          matcap={matcap}
          color={tweakableProperties.color.value}
          transparent={true}
          opacity={tweakableProperties.opacity.value}
        />
      </RoundedBox>
      <OrbitControls />
    </>
  )
}

export default ExperienceCanvasContent
