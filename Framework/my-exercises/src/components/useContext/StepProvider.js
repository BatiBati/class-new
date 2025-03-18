import { createContext, useState } from "react";

export const StepContext = createContext();

export const StepProvider = ({ children, step, setStep }) => {
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
