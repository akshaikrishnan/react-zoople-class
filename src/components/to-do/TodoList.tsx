import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

interface TodoListProps {
  tasks: any[];
  remove: (index: number) => void;
  doneTask: (index: number, isDone: boolean) => void;
}

export default function TodoList({ tasks, remove, doneTask }: TodoListProps) {
  const { globalValue, setGlobalValue, addToCart } = useContext(GlobalContext);
  return (
    <div className="pt-3">
      <h5 className="text-center mb-3"> My Tasks</h5>
      <button
        onClick={() => {
          setGlobalValue(globalValue + 1);
          addToCart();
        }}
      >
        context Value : {globalValue}
      </button>
      {tasks.map((item: any, index: number) => (
        <div
          key={index + item.name}
          className="card p-3 shadow-sm mb-2 d-flex flex-row justify-content-between align-items-center"
        >
          <div>
            <input
              type="checkbox"
              id="done"
              defaultChecked={item.isCompleted}
              onChange={(e) => {
                doneTask(index, e.target.checked);
              }}
            />
            &nbsp;
            {item.isCompleted ? <del>{item.name}</del> : <>{item.name}</>}
          </div>
          <button
            onClick={() => remove(index)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
