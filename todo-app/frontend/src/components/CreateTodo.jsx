import { useState } from "react";
export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json", // Correct header name
            },
          }).then(async (res) => {
            const json = await res.json();
            console.log(json);
          });
        }}
      >
        CreateTodo
      </button>
    </div>
  );
};
