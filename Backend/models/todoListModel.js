const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const todoList = mongoose.model("todoList", todoListSchema);
module.exports = todoList;
