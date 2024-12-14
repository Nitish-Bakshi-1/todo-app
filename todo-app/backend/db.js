const mongoose = require("mongoose");
mongoose.connect("your mongo url");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  Todo,
};
