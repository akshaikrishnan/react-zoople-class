export default function TodoList({ tasks, remove }: any) {
  return (
    <div className="pt-3">
      <h5 className="text-center mb-3"> My Tasks</h5>
      {tasks.map((item: string, index: number) => (
        <div key={index} className="card p-3 shadow-sm mb-2 d-flex flex-row justify-content-between align-items-center">
          <div>
            <input type="checkbox" id="done" />
            &nbsp;
            {item}
          </div>
          <button onClick={()=>remove(index)} className="btn btn-danger btn-sm">Delete</button>
        </div>
      ))}
    </div>
  );
}
