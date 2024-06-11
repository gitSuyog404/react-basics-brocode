// useEffect() = React hook that tells React to do some code when (pick one):
// This component re-renders
// This component mounts   when you create and append it to the dom it is known as mounting
// Mounting : when you create a component and add it to the DOM
//  The state of a value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render

// 2. useEffect (() => {}, []) // Runs only on mount

// 3. useEffect (() => {}, [value])  // Runs on mount + when value changes

// Uses
//  1. Event listeners
//  2. DOM manipulation
//  3. Subscriptions (real-time updates)
//  4. Fetching Data from an API
//  5. Clean up when a component unmounts

import React, { useState, useEffect } from "react";

let MyComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  let addCount = () => {
    setCount((c) => c + 1);
  };

  let subCount = () => {
    setCount((c) => c - 1);
  };

  let changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>

      <button onClick={subCount}>Subtract</button>
      <br />

      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default MyComponent;
