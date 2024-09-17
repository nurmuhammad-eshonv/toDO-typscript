import { useState } from "react";
import "./App.css";


function App() {
  interface todo  {
    id:number,
    title: string,
    completed: boolean
  }
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 1, title: "Exampldasdasde Task", completed: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">To-Do List</h1>

      <div className="flex mb-4">
        <input
          className="border p-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400"
          type="text"
          placeholder="Add a new task..."
        />
        <button
          className="bg-green-600 p-2 rounded-r-lg text-white hover:bg-green-500 transition-all duration-300"
        >
          Add
        </button>
      </div>

      
      {
        todoList && (
          todoList.map((todo) => (
            <div className="border-2 p-2 px-5 rounded flex items-center gap-20 justify-between w-96">
              <p>{todo.title}</p>
              <button className=" text-red-700 text-3xl rounded mb-2">x</button>
            </div>
          ))
        )
      }
    </div>
  );
};

export default App;
