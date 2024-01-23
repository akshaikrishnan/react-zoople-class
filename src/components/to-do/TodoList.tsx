export default function TodoList({ tasks, remove }: any) {
  return (
    <div className="pt-3">
      <h5 className="text-center mb-3"> My Tasks</h5>
      {tasks.map((item: any, index: number) => (
        <div
          key={index}
          className="card p-3 shadow-sm mb-2 d-flex flex-row justify-content-between align-items-center"
        >
          <span className="">{item.name}</span>- {item.isCompleted.toString()}
          <button
            onClick={() => remove(index)}
            className="btn btn-sm btn-danger"
          >
            {" "}
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
