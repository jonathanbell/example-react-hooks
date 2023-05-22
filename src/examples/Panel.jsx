import { ThemeContext } from "./ThemeProviderExample";
import { useContext } from "react";

export const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme.mode;

  const changeThemeMode = () => {
    return theme.mode === "light"
      ? theme.setMode("dark")
      : theme.setMode("light");
  };

  return (
    <section className={className}>
      <h1 style={{ fontSize: "normal" }}>{title}</h1>
      <button onClick={changeThemeMode}>Change theme</button>
      {children}
    </section>
  );
};
