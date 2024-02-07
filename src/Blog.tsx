import { useState, useEffect } from "react";

export default function Blogs() {
  const [data, setData] = useState<any>([]);

  const fnCall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fnCall();
  }, []);
  return (
    <div className="card">
      <div className="container">
        {data.length == 0 && <h1>Loading</h1>}
        <div className="row">
          {data.map((item: any) => (
            <div key={item.id} className="col-md-3 mt-1 mb-2">
              <div className="card">
                {/* <img className="card-img-top" src={data.url} alt={data.title} /> */}
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";

// function Blog() {
//   const [data, setData] = useState<any>([]);

//   const fnCall = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
//       method: "GET",
//     });
//     const data = await res.json();
//     console.log(data);
//     setData(data);
//   };

//   useEffect(() => {
//     fnCall();
//   }, []);

//   return (
//     <div className="card">
//       <div className="container">
//         {data.length == 0 && <h1>Loading</h1>}
//         <div className="row">
//           {data.map((data: any) => (
//             <div key={data.id} className="col-md-3 mt-1 mb-2">
//               <div className="card">
//                 <img className="card-img-top" src={data.url} alt={data.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{data.title}</h5>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;
