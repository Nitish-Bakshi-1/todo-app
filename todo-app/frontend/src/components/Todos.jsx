export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="todo-div">
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
