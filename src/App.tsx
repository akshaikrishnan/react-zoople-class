import { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/to-do/Todo.tsx";
import First from "./First.tsx";
// import Form from "./Form.tsx";
const Form = lazy(() => import("./Form.tsx"));
import Navbar from "./components/navbar/Navbar.tsx";
import Blogs from "./components/blogs/Blogs.tsx";
// import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Form />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
