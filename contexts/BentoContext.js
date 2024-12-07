import React, { createContext, useState, useContext } from 'react';

// Create Context
export const BentoContext = createContext();

// Create a custom hook to use the BentoContext
export const useBento = () => {
  return useContext(BentoContext);
};

// Create BentoContext Provider component
export const BentoProvider = ({ children }) => {
  const [assistanceStatus, setAssistanceStatus] = useState('good'); // 'good' or 'bad'

  const changeAssistanceStatus = (status) => {
    setAssistanceStatus(status);
  };

  return (
    <BentoContext.Provider value={{ assistanceStatus, changeAssistanceStatus }}>
      {children}
    </BentoContext.Provider>
  );
};
