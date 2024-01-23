import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [taskName, setTaskName] = useState({ name: "", isCompleted: false });
  const [tasks, setTasks] = useState<any>([]);

  const addTask = () => {
    setTasks([...tasks, taskName]);
    setTaskName({ name: "", isCompleted: false });
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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
          value={taskName.name}
          onChange={(e) => {
            setTaskName({ name: e.target.value, isCompleted: false });
          }}
        />
      </div>
      <div className="d-grid">
        <button onClick={addTask} className="btn btn-primary btn-block">
          Add Task
        </button>
      </div>
      <TodoList remove={removeTask} tasks={tasks} />
    </div>
  );
}
