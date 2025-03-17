import { createContext } from "react";
export const StepContext = createContext({});

export const StepProvider = ({ children, values, setValues }) => {
  return (
    <StepContext.Provider
      value={{
        values,
        setValues,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
