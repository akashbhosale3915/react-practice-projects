import DebounceSearch from "./components/DebounceSearch";
import FileTree from "./components/FileTree";
import FileUpload from "./components/FileUpload";
import Kanban from "./components/Kanban";
import MultiStepForm from "./components/MultiStepForm";
import Otp from "./components/Otp";
import Pagination from "./components/Pagination";
import Theme from "./components/Theme";
import TicTacToe from "./components/TicTacToe";
import Toastify from "./components/Toastify";
import Todo from "./components/Todo";
import ThemeProvider from "./context/ThemeContext";
import { fileTreeData } from "./data/fileTreeData";
import { useToast } from "./hooks/useToast";

const App = () => {
  const { addToast, positions, types } = useToast();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (!response.ok) {
        addToast({
          type: types.error,
          text: "Failed to Fetch",
          position: positions.topRight,
        });
      }
      const json = await response.json();
      if (json) {
        addToast({
          text: "Data fetched successfully",
          type: types.success,
          position: positions.topRight,
        });
      }
    } catch (e) {
      addToast({
        type: types.error,
        text: "Failed to Fetch",
        position: positions.topRight,
      });
    }
  };
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
      {/* <Pagination /> */}
      {/* <MultiStepForm /> */}
      <button onClick={fetchData}>Fetch</button>
      <Toastify />
    </>
  );
};

export default App;
