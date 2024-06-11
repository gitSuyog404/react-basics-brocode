import Student from "./Student.jsx";
function App() {
  return (
    <>
      {/* props = read-only properties that are shared between components. A parent component can send data to a child componenet.  
      
        <Component key=value/>




        propTypes = a mechanism that ensures that the passed value is of the correct datatype. 
        age : PropTypes.number


        defaultProps = default values for props in case they are not passed from the parent component 
        name: "Guest"
      
      */}

      <Student name="Suyog" age={18} isStudent={false} />

      <Student name="John" age={40} isStudent={false} />
      <Student name="Squidward" age={40} isStudent={true} />
      <Student name="Sandy" age={105} isStudent={false} />

      <Student />
    </>
  );
}

export default App;
