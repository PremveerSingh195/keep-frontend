import { createContext, useState, useEffect, ReactNode } from "react";

const ThemeContext = createContext();

type childrenType = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: childrenType) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <
  );
};

export default ThemeContext;