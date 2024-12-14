const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:2k9SlYj4HLGfSltI@cluster0.j7jusce.mongodb.net/todo-app-now"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  Todo,
};
