const express = require("express");
const app = express();
const fs = require("fs").promises;
const db = require("./utils/db");
const routes = require("./routes");
const User = require("./model/user.model");
const Todo = require("./model/todos.model");

const port = 5000;
app.use(express.json());

app.use("/", routes);

//read todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});
//create todo
app.post("/todos", async (req, res) => {
  try {
    const { task } = req.body;
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      return res.status(400).json({ error: "Task is required" });
    }
    const todos = new Todo({ task: trimmedTask });
    await todos.save();
    res.status(200).json({ todos, message: "Todo Created Successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});
//update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { task, isCompleted } = req.body;

    if (!task && isCompleted === undefined) {
      return res.status(400).json({ error: "Task or isCompleted is required" });
    }
    const todo = await Todo.findById(id);
    console.log(todo);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.task = task || todo.task;
    todo.isCompleted =
      isCompleted !== undefined ? isCompleted : todo.isCompleted;

    await todo.save();

    res.status(200).json({ message: "Todo updated successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});
//delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
