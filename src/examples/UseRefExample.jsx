/** @file An example of `useRef()` and `useEffect()` */

import { useEffect, useRef } from "react";

export const UseRefExample = () => {
  // This will be `null` to start - reason being the DOM isn't created yet.
  const myRefElement = useRef(null);
  // Notice that the ref is logged twice each time in the console. _This is a React 18 thing._
  console.log(
    "Your ref is currently null since useEffect has not run: ",
    myRefElement.current
  );

  // We use `useEffect()` since we want to log the ref out *after* the component mounts and
  // the DOM element exists.
  useEffect(
    () => {
      // Now that the element exists: we can log it out to the console.
      console.log(
        "useEffect() has run. I have registered your ref: ",
        myRefElement.current.lastChild
      );

      // If we return a function here, the returned function is the "cleanup" function.
      // It "un-registers" our ref.
      return () => {
        console.log("I have un-registered your ref: ", myRefElement.current);
      };
    },
    // If we pass an empty (or unchanging) dependancy array to `useEffect`,
    // we will only run this "effect" one time (on "mount").
    // If we do not provide a dependancy array, the "effect"
    // is called every time the component is rendered.
    []
  );
  return (
    <>
      <div ref={myRefElement}>
        <p>
          Check the console for information about useRef() and useEffect() 😃
          {" - "} Note that React 18 logs things to the console TWICE.
        </p>
      </div>
    </>
  );
};
