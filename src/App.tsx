import { useState } from "react";
import "./App.css";

function App() {
  interface Todo {
    id: number;
    title: string;
  }

  const [todoList, setTodoList] = useState<Todo[]>([
  ]);

  const [inputV, setInputV] = useState("");

  function handleSubmit() {
    if (inputV.trim()) {
      const newTodo: Todo = {
        id: todoList.length + 1,
        title: inputV,
      };

      setTodoList([...todoList, newTodo]);
      setInputV("");
    }
  }

  function handleDelete(id: number) {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">To-Do List</h1>

      <div className="flex mb-4">
        <input
          value={inputV} // Controlled input
          onChange={(e) => setInputV(e.target.value)}
          className="border p-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400"
          type="text"
          placeholder="Add a new task..."
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 p-2 rounded-r-lg text-white hover:bg-green-500 transition-all duration-300"
        >
          Add
        </button>
      </div>

      {todoList.length > 0 &&
        todoList.map((todo) => (
          <div
            key={todo.id}
            className="mt-3 border-2 p-2 px-5 rounded flex items-center gap-20 justify-between w-96"
          >
            <p>{todo.title}</p>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-700 text-3xl rounded mb-2"
            >
              x
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
