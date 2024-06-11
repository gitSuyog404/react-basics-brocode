import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Orange", calories: 95 },
    { id: 2, name: "Banana", calories: 45 },
    { id: 3, name: "Coconut", calories: 105 },
    { id: 4, name: "Pineapple", calories: 159 },
    { id: 5, name: "Mango", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potato", calories: 95 },
    { id: 7, name: "Capsicum", calories: 45 },
    { id: 8, name: "Spinach", calories: 105 },
    { id: 9, name: "Cauliflower", calories: 159 },
    { id: 10, name: "Peas", calories: 37 },
  ];

  return (
    <>
      {/* <List /> */}

      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}

      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null} */}

      {/* short hand for the above ternary expression */}

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}

      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
