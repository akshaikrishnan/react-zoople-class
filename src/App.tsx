import { useEffect, useState } from "react";
import "./App.css";
// import Header from "./components/Header";

function App() {

  const [data, setData] = useState<any>([]);

  const fnCall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
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
      <div className="row">
        {data.map((data: any) => (
          <div key={data.id} className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={data.url} alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
