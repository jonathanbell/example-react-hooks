import { useState } from "react";

export const TwoWayBindingExample = () => {
  // State varibales for two-way data binding example.
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  const handleInput = (event) => {
    setVal1(event.currentTarget.value);
    setVal2(event.currentTarget.value);
  };
  return (
    <>
      <input value={val1} onInput={handleInput} placeholder="type something" />
      <input value={val2} onInput={handleInput} placeholder="type something" />
    </>
  );
};
