import { UseStateExample } from "./examples/UseStateExample";
import { ThemeProviderExample } from "./examples/ThemeProviderExample";
import { TwoWayBindingExample } from "./examples/TwoWayBindingExample";
import { UseRefExample } from "./examples/UseRefExample";
import { ConditionalContentExample } from "./examples/ConditionalContentExample";
import { Panel } from "./examples/Panel";

import './App.css'

// Main application
export default function MyApp() {
  return (
    // `ThemeProvider` will be our "highest" level component in our App (before `App` itself)
    // Wrapping the whole kit a kaboodle with `ThemeProvider` (a context) ensures that
    // context is provided from the highest element possible. It is common to see multiple
    // providers (such as `ThemeProvider`) used and nested at the "root" of a project.
    <ThemeProviderExample>
      <h2>useState example: a simple counter</h2>
      <UseStateExample />

      <hr />
      <h2>useContext example: change context on button click</h2>
      <Panel title="click the button to change the theme">
        <p>
          <span aria-hidden role="img">
            ➡️
          </span>{" "}
          Panel content (considered as children, aka "slots") here!{" "}
          <span aria-hidden role="img">
            👋👋👋
          </span>
        </p>
      </Panel>

      <hr />
      <h2>
        conditional show/hide example: (only show a cat when dark mode is on)
      </h2>
      <ConditionalContentExample />

      <hr />
      <h2>Two-way binding example: update each element on input</h2>
      <TwoWayBindingExample />

      <hr />
      <h2>
        useRef() example: logs a ref to the console after the DOM is ready (via{" "}
        <code>useEffect()</code>)
      </h2>
      <UseRefExample />
    </ThemeProviderExample>
  );
}
