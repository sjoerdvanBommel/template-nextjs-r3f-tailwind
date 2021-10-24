import { Canvas } from "@react-three/fiber";
import React, { createContext, Suspense, useContext, useEffect, useState } from "react";
import ExperienceCanvasContent from "./ExperienceCanvasContent";
import { useDebug } from "./ExperienceProvider";
import LoadingOverlay from "./LoadingOverlay";

const BridgeContext = createContext(false);
export const useExperienceDebug = () => useContext(BridgeContext);

const CanvasFallback = ({ onFinish }) => {
  useEffect(() => {
    return () => {
      onFinish();
    }
  }, [])

  return (
    <></>
  );
}

const ExperienceCanvas = () => {
  const debug = useDebug();
  const [experienceLoaded, setExperienceLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const onLoadExperience = () => {
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setExperienceLoaded(true), 1000);
    }, 2000);
  }

  return (
    <div className={`fixed inset-0 w-screen h-[calc(100vh - calc(100vh - 100%))] ${experienceLoaded ? '' : 'z-50'}`}>
      {
        !experienceLoaded &&
        <div className={'transition-all duration-1000 ' + (isFadingOut ? 'opacity-0' : 'opacity-100')}>
          <LoadingOverlay />
        </div>
      }
      <Canvas>
        <Suspense fallback={<CanvasFallback onFinish={onLoadExperience} />}>
          <BridgeContext.Provider value={debug}>
            <ExperienceCanvasContent />
          </BridgeContext.Provider>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ExperienceCanvas
