import React, { useState } from "react";

let MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Hyundai",
    model: "Creta",
  });

  let handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };

  let handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };

  let handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <>
      <div>
        <p>
          Your favorite car is :{car.year} {car.make} {car.model}
        </p>

        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
        <br />
      </div>
    </>
  );
};

export default MyComponent;
