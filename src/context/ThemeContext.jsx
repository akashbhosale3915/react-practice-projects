import React, {
  createContext,
  useContext,
  useState,
} from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider"
    );
  }
  return context;
};

export default ThemeProvider;
