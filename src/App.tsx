import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Starship from "./Starship";
import Details from "./components/details";
// import First from "./First";
const First = lazy(() => import("./First"));
// import Form from "./Form";
// import Todo from "./components/to-do/Todo";
// import Blog from "./Blog";
const Todo = lazy(() => import("./components/to-do/Todo"));
const Blog = lazy(() => import("./Blog"));
const Form = lazy(() => import("./Form"));

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starship">
                Starship
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/starship" element={<Starship />} />
          <Route path="/starship/:id" element={<Details />} />
          <Route path="*" element={<Blog />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
