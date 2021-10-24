import { OrbitControls, RoundedBox, useTexture } from '@react-three/drei';
import React from 'react';
import { useTweakableProperties } from 'utils/hooks/UseTweakableProperties';

const ExperienceCanvasContent = () => {
  const tweakableProperties = useTweakableProperties({
    color: { value: '#3ba2f5' },
    opacity: { value: 0.7, min: 0, max: 1, step: 0.01 },
  }, 'Cube', true);

  const matcap = useTexture('/default-block-light.jpg');
  const bigFilesToIncreaseLoadingTime = useTexture('/big-files-to-load (1).png');
  const bigFilesToIncreaseLoadingTime2 = useTexture('/big-files-to-load (2).png');
  const bigFilesToIncreaseLoadingTime3 = useTexture('/big-files-to-load (3).png');
  const bigFilesToIncreaseLoadingTime4 = useTexture('/big-files-to-load (4).png');
  const bigFilesToIncreaseLoadingTime5 = useTexture('/big-files-to-load (5).png');
  const bigFilesToIncreaseLoadingTime6 = useTexture('/big-files-to-load (6).png');
  const bigFilesToIncreaseLoadingTime7 = useTexture('/big-files-to-load (7).png');
  const bigFilesToIncreaseLoadingTime8 = useTexture('/big-files-to-load (8).png');
  const bigFilesToIncreaseLoadingTime9 = useTexture('/big-files-to-load (9).png');
  const bigFilesToIncreaseLoadingTime0 = useTexture('/big-files-to-load (10).png');

  return (
    <>
      <RoundedBox args={[1, 1, 1]} rotation={[Math.PI / 4, Math.PI / 4, 0]} radius={0.1} smoothness={4}>
        <meshBasicMaterial color={tweakableProperties.color.value} transparent={true} opacity={tweakableProperties.opacity.value} />
      </RoundedBox>
      <OrbitControls />
    </>
  )
}

export default ExperienceCanvasContent
