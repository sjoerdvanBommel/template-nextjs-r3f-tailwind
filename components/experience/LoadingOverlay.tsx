import { useProgress } from '@react-three/drei';
import React, { useEffect, useState } from 'react';

const LoadingOverlay = () => {
  const { progress } = useProgress();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

  return (
    <div className="w-screen h-screen bg-black flex justify-start items-center">
      <div className={`border-2 border-white`} style={{ width: `${windowWidth}px`, transform: `scaleX(${progress / 100})`, transformOrigin: 'left center', transition: '2s all ease-in-out' }}></div>
    </div>
  )
}

export default LoadingOverlay
