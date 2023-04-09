import React, { createContext, useState } from "react";

export const ModoDarkContext = createContext({});

const ModoDarkContextProvider = ({ children }) => {
  const [isModoOscuro, setIsModoOscuro] = useState(false);
  const state = { isModoOscuro, setIsModoOscuro };
  return (
    <ModoDarkContext.Provider value={state}>
      {children}
    </ModoDarkContext.Provider>
  );
};
export default ModoDarkContextProvider;

