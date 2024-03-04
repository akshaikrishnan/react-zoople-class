import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductListing() {
  const [data, setData] = useState<any>([]);

  const fnCall = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fnCall();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.length === 0 ? (
          <div className="col text-center">
            <h1>Loading...</h1>
          </div>
        ) : (
          data.map((item: any) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Link
                className="text-decoration-none text-dark"
                to={`/productListing/${item.id}`}
              >
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function ProductListing() {
//   const [data, setData] = useState<any>([]);

//   const fnCall = async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data);
//     setData(data);
//   };

//   useEffect(() => {
//     fnCall();
//   }, []);
//   return (
//     <div className="card">
//       {data?.length == 0 && <h1>Loading</h1>}
//       <div className="row">
//         {data?.map((item: any) => (
//           <div key={item.id} className="col-md-3 mt-1 mb-2">
//             <Link
//               className="cards"
//               style={{ textDecoration: "none" }}
//               to={`/productListing/${item.id}`}
//             >
//               <div className="card">
//                 <img
//                   className="card-img-top"
//                   src={item.image}
//                   alt={item.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     Name:{item.title}
//                     <br />
//                     Price:{item.price}
//                     <br />
//                   </h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
