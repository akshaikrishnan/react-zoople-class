export default function TodoList({ tasks }: any) {
  return (
    <div className="pt-3">
      <h5 className="text-center mb-3"> My Tasks</h5>
      {tasks.map((item: string, index: number) => (
        <div key={index} className="card p-3 shadow-sm mb-2">
          {item}
        </div>
      ))}
    </div>
  );
}
