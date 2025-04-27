import Kanban from "./components/Kanban";
import Otp from "./components/Otp";
import Theme from "./components/Theme";
import Todo from "./components/Todo";
import ThemeProvider from "./context/ThemeContext";
const App = () => {
  return (
    <>
      {/* <Kanban /> */}
      {/* <Otp /> */}
      {/* <ThemeProvider>
        <Theme />
      </ThemeProvider> */}
      <Todo />
    </>
  );
};

export default App;
