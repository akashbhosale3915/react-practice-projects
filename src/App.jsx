import DebounceSearch from "./components/DebounceSearch";
import FileTree from "./components/FileTree";
import FileUpload from "./components/FileUpload";
import Kanban from "./components/Kanban";
import Otp from "./components/Otp";
import Pagination from "./components/Pagination";
import Theme from "./components/Theme";
import TicTacToe from "./components/TicTacToe";
import Todo from "./components/Todo";
import ThemeProvider from "./context/ThemeContext";
import { fileTreeData } from "./data/fileTreeData";
const App = () => {
  return (
    <>
      {/* <ThemeProvider>
        <Theme />
      </ThemeProvider>
      <Kanban />
      <Otp />
      <Todo /> */}
      {/* <FileTree item={fileTreeData} /> */}
      {/* <FileUpload /> */}
      {/* <DebounceSearch /> */}
      {/* <TicTacToe /> */}
      <Pagination />
    </>
  );
};

export default App;
