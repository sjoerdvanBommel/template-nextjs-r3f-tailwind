import { Html, useProgress } from '@react-three/drei';
import React, { useEffect } from 'react';

type Props = {
  onFinish: () => void
}

const LoadingOverlay = ({ onFinish }: Props) => {
  const { progress } = useProgress();

  useEffect(() => {
    return () => {
      onFinish();
    }
  }, [])

  useEffect(() => {
    console.log(progress);
  }, [progress])

  return (
    <Html center>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className={`border-2 border-white`} style={{ height: '50px', width: progress + 'px', animation: '1s all' }}></div>
      </div>
    </Html>
  )
}

export default LoadingOverlay
