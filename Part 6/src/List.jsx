import PropTypes from "prop-types";

// let List = () => {
//   const fruits = ["Apple", "Orange", "Banana", "Coconut", "Pineapple"];
//   const listItems = fruits.map((fruit) => <li>{fruit}</li>);
//   return <ol>{listItems}</ol>;
// };

// export default List;

// let List = () => {
//   const fruits = [
//     { id: 1, name: "Apple", calories: 95 },
//     { id: 2, name: "Banana", calories: 45 },
//     { id: 3, name: "Mango", calories: 105 },
//     { id: 4, name: "Coconut", calories: 159 },
//     { id: 5, name: "Pineapple", calories: 37 },
//   ];

//   fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical

//   fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alphabetical

//   fruits.sort((a,b)=>a.calories - b.calories) sorting by calories in numeric order

//   fruits.sort((a, b) => b.calories - a.calories);  sorting by calories in reverse numeric order

//   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); filtering the fruits with calroies less than 100

//   const listItems = lowCalFruits.map((lowCalFruit) => (
//     <li key={lowCalFruit.id}>
//       {lowCalFruit.name}: &nbsp;<b> {lowCalFruit.calories}</b>
//     </li>
//   ));

//   const listItems = fruits.map((fruit) => (
//     <li key={fruit.id}>
//       {fruit.name}: &nbsp;<b> {fruit.calories}</b>
//     </li>
//   ));

// Filtering with fruits with calories greater than 100

//   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

//   const listItems = highCalFruits.map((highCalFruit) => (
//     <li key={highCalFruit.id}>
//       {highCalFruit.name}: &nbsp;<b> {highCalFruit.calories}</b>
//     </li>
//   ));

//   return <ol>{listItems}</ol>;
// };

// Writing the same program in a dynamic way

let List = (props) => {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
