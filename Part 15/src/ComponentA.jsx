import ComponentB from "./ComponentB.jsx";
import React, { useState, createContext } from "react";

export const UserContext = createContext();
let ComponentA = () => {
  const [user, setUser] = useState("John");

  return (
    <>
      <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>

        <UserContext.Provider value={user}>
          <ComponentB user={user} />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default ComponentA;
