import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any>([]);

  const fnCall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fnCall();
  }, []);

  return (
    <>
      {data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
}

export default App;
