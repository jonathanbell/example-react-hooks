import { useState, createContext } from "react";

// A high-level context value
export const ThemeContext = createContext(null);

// `ThemeProvider` will leverage `ThemeContext` in order to provide context to all of the
// child components (inside the React Tree).
export const ThemeProviderExample = ({ children }) => {
  const [mode, setMode] = useState("dark");
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {/* We accept `children` as a prop and pass that along to the rest of our app. In this case, it's the entire app itself. */}
      {children}
    </ThemeContext.Provider>
  );
};
