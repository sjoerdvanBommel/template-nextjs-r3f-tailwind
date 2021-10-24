import { Canvas } from "@react-three/fiber";
import React, { createContext, Suspense, useContext, useState } from "react";
import ExperienceCanvasContent from "./ExperienceCanvasContent";
import { useDebug } from "./ExperienceProvider";
import LoadingOverlay from "./LoadingOverlay";

const BridgeContext = createContext(false);
export const useExperienceDebug = () => useContext(BridgeContext);

const ExperienceCanvas = () => {
  const debug = useDebug();
  const [experienceLoaded, setExperienceLoaded] = useState(false);

  const onLoadExperience = () => setExperienceLoaded(true);

  return (
    <div className={`fixed inset-0 w-screen h-[calc(100vh - calc(100vh - 100%))] ${experienceLoaded ? '' : 'z-50'}`}>
      <Canvas>
        <Suspense fallback={<LoadingOverlay onFinish={onLoadExperience} />}>
          <BridgeContext.Provider value={debug}>
            <ExperienceCanvasContent />
          </BridgeContext.Provider>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ExperienceCanvas
