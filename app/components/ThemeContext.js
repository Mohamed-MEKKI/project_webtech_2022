import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default ThemeContext;

export function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState();
  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setCurrentTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setCurrentTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);
  const onToggleTheme = () => {
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        onToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
