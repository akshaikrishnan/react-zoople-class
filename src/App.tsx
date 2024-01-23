import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [test, setTest] = useState(1);

  return (
    <>
      <button onClick={() => setTest(test + 5)}>Change</button>
      <Header name="Name" age={test} setAge={setTest} />
      <Header name="Hello" age={test} />
    </>
  );
}

export default App;
