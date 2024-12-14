const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");

app.use(express.json());

app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const validation = createTodo.safeParse({ title, description });
  if (!validation.success) {
    res.json({
      msg: "try to put valid inputs",
    });
  }
  const todo = await Todo.create({
    title,
    description,
    completed: false,
  });
  if (!todo) {
    res.json({
      msg: "todo creation failed ",
    });
  }
  res.json({
    msg: "todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const id = req.body.id;

  const validation = updateTodo.safeParse({ id });
  if (!validation.success) {
    res.json({
      msg: "try to put valid inputs",
    });
  }
  await Todo.updateOne(
    { _id: id },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo marked as done",
  });
});

app.listen(3000);
