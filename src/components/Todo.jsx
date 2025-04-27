import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const sortedTodos = todos.sort(
    (a, b) => a.completed - b.completed
  );

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border p-2 rounded-md border-gray-300">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter a todo"
            className="border border-r-0 border-gray-300 rounded-l-md p-2 outline-none"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="border border-l p-2 rounded-r-md bg-black disabled:bg-gray-500 text-white"
            disabled={todo === ""}
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div>
          {sortedTodos.map((todo, index) => (
            <div
              className="flex items-center justify-between p-2"
              key={index}
            >
              <h3
                className={
                  todo.completed ? "line-through" : ""
                }
              >
                {todo.text}
              </h3>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
