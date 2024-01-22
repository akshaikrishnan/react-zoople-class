import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<any>([]);

  const addTask = () => {
    setTasks([...tasks, taskName]);
    setTaskName("");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button onClick={addTask} className="btn btn-primary btn-block">
          Add Task
        </button>
      </div>
      <TodoList tasks={tasks} />
    </div>
  );
}
