import ComponentC from "./ComponentC.jsx";
import React, { useContext } from "react";

import { UserContext } from "./ComponentA.jsx";
let ComponentB = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>ComponentB</h1>
        <h2>{`Hello there ${user}`}</h2>
        <ComponentC />
      </div>
    </>
  );
};

export default ComponentB;
