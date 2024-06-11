// Updater function:
// A function passed as an argument to setState() usually for example: setYear(arrow function)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions

import React, { useState } from "react";
let MyComponent = () => {
  const [count, setCount] = useState(0);

  let increment = () => {
    // Takes the PENDING state to calculate NEXT state
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order.

    // Syntax: setCount (either prevCount or c => prevCount or c + 1);

    // It is a good practice to use updater function like setCount((c) => c + 1) rather than setCount(count + 1) which helps to future proof our code
    setCount((c) => c + 1);
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
  };

  let decrement = () => {
    setCount((c) => c - 1);
  };

  let reset = () => {
    // In the case of reset the updater function isnt necessary
    // setCount((c) => (c = 0));
    setCount(0);
  };

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

export default MyComponent;
