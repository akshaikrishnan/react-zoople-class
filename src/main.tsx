import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProductListing from "./productListing/productListing.tsx";
import ProductDetailPage from "./productDetailPage/productDetailPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <ProductListing /> */}
    {/* <ProductDetailPage /> */}
  </React.StrictMode>
);
