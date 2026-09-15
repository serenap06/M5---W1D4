import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const switchThemeMode = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
        switchThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
