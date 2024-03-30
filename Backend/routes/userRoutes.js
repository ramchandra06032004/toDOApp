const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const todoList = require("../models/todoListModel.js");
const cors = require("cors");
app.use(cors());
router.post("/", async (req, res) => {
  const { name, deadline } = req.body;

  try {
    const taskAdded = await todoList.create({
      name: name,
      deadline: deadline,
    });
    res.status(201).json(taskAdded);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allTask = await todoList.find();
    res.status(200).json(allTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await todoList.findByIdAndDelete({ _id: id });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
