import { useState, useEffect } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌞" : "🌜"}</button>
  );
}

export default ThemeToggler;
