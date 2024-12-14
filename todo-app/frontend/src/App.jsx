import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos
        todos={[
          {
            title: "go to gym",
            desription: "go to gym asap",
            completed: false,
          },
          {
            title: "go to gym2",
            desription: "go to gym asap2",
            completed: false,
          },
        ]}
      ></Todos>
    </>
  );
}

export default App;
