import FileTree from "./components/FileTree";
import Kanban from "./components/Kanban";
import Otp from "./components/Otp";
import Theme from "./components/Theme";
import Todo from "./components/Todo";
import ThemeProvider from "./context/ThemeContext";
import { fileTreeData } from "./data/fileTreeData";
const App = () => {
  return (
    <>
      {/* <Kanban /> */}
      {/* <Otp /> */}
      {/* <ThemeProvider>
        <Theme />
      </ThemeProvider> */}
      {/* <Todo /> */}
      <FileTree item={fileTreeData} />
    </>
  );
};

export default App;
