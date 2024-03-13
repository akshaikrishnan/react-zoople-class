const express = require("express");
const app = express();
const fs = require("fs").promises;
const mongoose = require("mongoose");

const port = 5000;
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/zoople")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const todoFile = "./data/todos.json";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  const now = new Date();
  res.send(now);
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(name, email);
    const user = new User({ name, email });
    await user.save();
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

async function readTodo() {
  try {
    const data = await fs.readFile(todoFile);
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function writeTodo(todos) {
  try {
    await fs.writeFile(todoFile, JSON.stringify(todos, null, 2));
  } catch (err) {
    console.log(err);
  }
}

//read todos
app.get("/todos", async (req, res) => {
  const todos = await readTodo();
  res.json(todos);
});
//create todo
app.post("/todos", async (req, res) => {
  try {
    const { task } = req.body;
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      return res.status(400).json({ error: "Task is required" });
    }
    const todos = await readTodo();
    const newTodo = {
      id: Date.now(),
      task: trimmedTask,
      isCompleted: false,
    };
    todos.push(newTodo);
    console.log(todos);
    await writeTodo(todos);
    res.status(200).json({ newTodo, message: "Todo Created Successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});
//update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { task, isCompleted } = req.body;

    if (!task && isCompleted === undefined) {
      return res.status(400).json({ error: "Task or isCompleted is required" });
    }
    const todos = await readTodo();
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todos[todoIndex].task = task || todos[todoIndex].task;
    todos[todoIndex].isCompleted = isCompleted || todos[todoIndex].isCompleted;
    await writeTodo(todos);

    res.status(200).json({ message: "Todo updated successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});
//delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todos = await readTodo();
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    if (filteredTodos.length === todos.length) {
      return res.status(404).json({ error: "Todo not found" });
    }
    await writeTodo(filteredTodos);

    res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
