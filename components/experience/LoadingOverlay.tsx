import { useProgress } from '@react-three/drei';
import React from 'react';

const LoadingOverlay = () => {
  const { progress } = useProgress();

  return (
    <div className="w-screen h-screen bg-black flex justify-start items-center">
      <div className="border-2 border-white w-screen" style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left center', transition: '2s all ease-in-out' }}></div>
    </div>
  )
}

export default LoadingOverlay
