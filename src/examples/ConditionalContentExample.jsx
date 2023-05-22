import { useContext } from "react";
// I don't believe we need `ThemeProviderExample` component here since we are only
// listening to the theme's value (given to us via `ThemeContext`).
import { ThemeContext } from "./ThemeProviderExample";
import { ButtonExample } from "./ButtonExample";

export const ConditionalContentExample = () => {
  const theme = useContext(ThemeContext);
  const className = "color-" + theme.mode;

  return (
    <>
      <p className={className}>
        Conditional content example shows a cat if the theme is set to dark
        mode.
      </p>
      {theme.mode === "dark" && (
        <img
          style={{ display: "block" }}
          alt=""
          src="https://placekitten.com/100/100"
        />
      )}
      <p>
        The button below is styled via the <code>ThemeContext.Provider</code>
      </p>
      <ButtonExample>
        <span>I am a link as a button</span>
      </ButtonExample>
    </>
  );
};
