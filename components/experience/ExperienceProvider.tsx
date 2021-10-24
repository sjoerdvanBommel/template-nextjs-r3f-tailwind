import React, { createContext, useContext, useEffect, useState } from 'react';

const DebugContext = createContext(false);
const SetDebugContext = createContext((_: boolean) => { });

export const useDebug = () => useContext(DebugContext);
export const useSetDebug = () => useContext(SetDebugContext);

type Props = {
  children: JSX.Element
}

const ExperienceProvider = ({ children }: Props) => {
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    setDebug(window.location.hash === '#debug');

    window.addEventListener('hashchange', function () {
      setDebug(window.location.hash === '#debug');
    });
  }, []);

  return (
    <DebugContext.Provider value={debug}>
      <SetDebugContext.Provider value={setDebug}>
        {children}
      </SetDebugContext.Provider>
    </DebugContext.Provider>
  )
}

export default ExperienceProvider
