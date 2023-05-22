import { useState } from "react";

export const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Simple button that increments the count state.</p>
      {/* A button to be used as our "increment" example (using state `count`)
      Note that in our example, we can pass `prev` for the previous state of the
      varible (`count`, in this case). */}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Current count: {count}
      </button>
    </>
  );
};
