import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

export default function profile() {
  const { globalValue } = useContext<any>(GlobalContext);
  const tasks = globalValue;
  return (
    <>
      <h1>Profile tasks</h1>
      <div className="pt-3">
        <h5 className="text-center mb-3"> My Tasks</h5>
        {globalValue.map((item: any, index: number) => (
          <div
            key={index + item.name}
            className="card p-3 shadow-sm mb-2 d-flex flex-row justify-content-between align-items-center"
          >
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// export default function profile({ tasks, remove, doneTask }: any) {
//   return (
//     <>
//       <h1>Profile tasks</h1>
//       <div className="pt-3">
//         <h5 className="text-center mb-3"> My Tasks</h5>
//         {tasks.map((item: any, index: number) => (
//           <div
//             key={index + item.name}
//             className="card p-3 shadow-sm mb-2 d-flex flex-row justify-content-between align-items-center"
//           >
//             <div>
//               <input
//                 type="checkbox"
//                 id="done"
//                 defaultChecked={item.isCompleted}
//                 onChange={(e) => {
//                   doneTask(index, e.target.checked);
//                 }}
//               />
//               &nbsp;
//               {item.isCompleted ? <del>{item.name}</del> : <>{item.name}</>}
//             </div>
//             <button
//               onClick={() => remove(index)}
//               className="btn btn-danger btn-sm"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default function TodoList({ tasks, remove, doneTask }: any) {
//   return (
//     <div className="pt-3">
//       <h5 className="text-center mb-3"> My Tasks</h5>
//       {tasks.map((item: any, index: number) => (
//         <div
//           key={index + item.name}
//           className="card p-3 shadow-sm mb-2 d-flex flex-row justify-content-between align-items-center"
//         >
//           <div>
//             <input
//               type="checkbox"
//               id="done"
//               defaultChecked={item.isCompleted}
//               onChange={(e) => {
//                 doneTask(index, e.target.checked);
//               }}
//             />
//             &nbsp;
//             {item.isCompleted ? <del>{item.name}</del> : <>{item.name}</>}
//           </div>
//           <button
//             onClick={() => remove(index)}
//             className="btn btn-danger btn-sm"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
