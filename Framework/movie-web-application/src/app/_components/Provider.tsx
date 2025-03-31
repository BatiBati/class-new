import { createContext, PropsWithChildren } from "react";

type IsDarkProvider = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
} & PropsWithChildren;

type IsDarkContextType = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

export const IsDarkContext = createContext<IsDarkContextType>(
  {} as IsDarkContextType
);

export const IsDarkProvider = ({
  children,
  isDark,
  setIsDark,
}: IsDarkProvider) => {
  return (
    <IsDarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </IsDarkContext.Provider>
  );
};
