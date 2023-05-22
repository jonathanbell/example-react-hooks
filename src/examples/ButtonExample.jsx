import { useContext } from "react";
import { ThemeContext } from "./ThemeProviderExample";

// Another example of using context.
export const ButtonExample = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = "link-" + theme.mode;
  return (
    <a href="https://cats.com" className={className}>
      {children}
    </a>
  );
};
