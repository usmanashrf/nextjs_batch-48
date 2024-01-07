"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [todos, setTodo]: any = useState([]);
  const addTodo = () => {
    setTodo([...todos, { id: Date.now(), title: input }]);
    setInput("");
  };
  const removeTodo = (id: any) => {
    const newTodos = todos.filter((todo: any) => todo.id !== id); // []
    setTodo(newTodos);
  };
  return (
    <div>
      <div>
        <div>
          <input
            value={input}
            type="text"
            placeholder="Add Todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className=" flex flex-col gap-2">
          {todos.map((todo: any) => (
            <div className=" flex bg-slate-100 gap-x-3" key={todo.id}>
              <h1>{todo.title}</h1>
              <button
                onClick={() => removeTodo(todo.id)}
                className=" border bg-slate-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
