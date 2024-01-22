import { useState } from "react";

export default function Header({ name, age, setAge }: any) {
  const [headerText, setHeaderText] = useState("Hello");
  const [footerText, footerTextChange] = useState("World");
  const [count, setCount] = useState(0);

  function addCount(e: any) {
    console.log(e);
    // setCount(count + 1);
    setAge("Helkkkkkoooooooooo");
  }

  return (
    <>
      <h2 className="kkk">Hello {headerText} </h2>
      <h1>{count}</h1>
      <h3>{name}</h3>
      <h4>{age}</h4>

      <button onClick={addCount}>Update Count</button>
    </>
  );
}
