import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      {/* Conditional rendering = allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components) */}

      <UserGreeting isLoggedIn={false} username="Suyog" />
    </>
  );
}

export default App;
