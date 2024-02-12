import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/to-do/Todo.tsx";
import First from "./First.tsx";
// import Form from "./Form.tsx";
const Form = lazy(() => import("./Form.tsx"));
import Navbar from "./components/navbar/Navbar.tsx";
import Blogs from "./components/blogs/Blogs.tsx";
import BlogDetails from "./components/blogDetails/BlogDetails.tsx";
import GlobalProvider from "./contexts/GlobalContext.tsx";
// import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<First />} />
              <Route path="/contact" element={<Form />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/blogs" element={<Blogs />}>
                <Route path="todo" element={<Todo />} />
                <Route path="contact" element={<Form />} />
              </Route>
              <Route path="/blog/:id" element={<BlogDetails />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
