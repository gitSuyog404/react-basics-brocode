// useEffect (function/callback/arrow function/anonymous function,[dependencies] );

import React, { useState, useEffect } from "react";

let MyComponentt = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    // This is the cleanup code
    // Do this code before the next re render or when the component unmounts
    // If we add an event listener then we unmount the component it would be good practice to remove the same event listener if you dont that can lead to unexpected behaviour
    // In a component you can add more than one useEffect Hook

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  let handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <p>Window Width: {width} px</p>
      <p>Window Height: {height}px </p>
    </>
  );
};

export default MyComponentt;
