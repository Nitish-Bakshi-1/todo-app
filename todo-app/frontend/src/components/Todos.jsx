import { useState } from "react";
export const Todos = ({ todos }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="todo-div">
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                setCompleted(true);
              }}
            >
              {completed ? "Completed" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
