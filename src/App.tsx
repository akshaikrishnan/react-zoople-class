import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalProvider from "./contexts/GlobalContext";
import ProductListing from "./productListing/productListing";
import ProductDetailPage from "./productDetailPage/productDetailPage";
import AdminPanel from "./adminPanel/adminPanel";
import CartPage from "./cart/cart";
// const First = lazy(() => import("./First"));

function App() {
  return (
    // <GlobalProvider>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
              <Link className="nav-link" to="/productListing">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adminPanel">
                Admin Panel
              </Link>
            </li>
          </ul>
          <div className="nav-item cart-icon ml-auto">
            <Link to="/cart" className="nav-link">
              <i className="fa fa-shopping-cart"></i> Cart{" "}
              <span className="badge badge-pill badge-primary">1</span>
            </Link>
          </div>
        </div>
      </nav>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/productListing/:id" element={<ProductDetailPage />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ProductListing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    // </GlobalProvider>
  );
}

export default App;
