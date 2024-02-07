import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Blogs() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fnCall = async () => {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "GET",
    //     headers: {
    //       Hello: "World",
    //     },
    //   });
    // const data = await res.json();
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response: AxiosResponse) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        alert("error while fetching");
        console.log(err);
        setIsLoading(false);
      });
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fnCall();
  }, []);
  return (
    <div className="card">
      <div className="container">
        {isLoading && <h2 className="text-center">Loading...</h2>}
        <div className="row">
          {}
          {data.map((item: any) => (
            <div key={item.id} className="col-md-3 mt-1 mb-2">
              <Link to={"/blogs/" + item.id}>
                <div className="card">
                  {/* <img className="card-img-top" src={data.url} alt={data.title} /> */}
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.body}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
