import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Todo from "./components/to-do/Todo.tsx";
import First from "./First.tsx";
import Form from "./Form.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Todo /> */}
    {/* <Form /> */}
    {/* <First /> */}
  </React.StrictMode>
);
