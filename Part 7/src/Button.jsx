// let Button = () => {
//   const handleClick = () => {
//     console.log("OUCH!");
//   };

//   const handleClick2 = (name) => {
//     console.log(`${name} Stop clicking me`);
//   };

//   return (
//     <>
//       <button onClick={() => handleClick2("Suyog")}>Click Me 😂</button>
//     </>
//   );
// };

// Another example

// let Button = () => {
//   let count = 0;
//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} you clicked me ${count} times`);
//     } else {
//       console.log(`${name} stop clicking me `);
//     }
//   };

//   return <button onClick={() => handleClick("Suyog")}>Click me 😂</button>;
// };

let Button = () => {
  const handleClick = (e) => (e.target.textContent = "OUCH! 🤕");

  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click me </button>
    </>
  );
};

export default Button;
