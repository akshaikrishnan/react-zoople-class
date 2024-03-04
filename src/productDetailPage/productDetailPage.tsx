import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching product details");
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    // You can implement your add to cart logic here
    alert("Product added to cart!");
  };

  return (
    <div className="container mt-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : product ? (
        <div className="card border-0 shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-muted">{product.category}</p>
                <p className="lead">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string;
// }

// const ProductDetailPage: React.FC = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get<Product>(
//           "https://fakestoreapi.com/products/" + id
//         );
//         setProduct(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching product details");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, []);

//   return (
//     <div className="container mt-4">
//       {loading ? (
//         <div className="text-center">
//           <div className="spinner-border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       ) : error ? (
//         <div className="alert alert-danger" role="alert">
//           {error}
//         </div>
//       ) : product ? (
//         <div className="row">
//           <div className="col-md-4">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="img-fluid rounded"
//             />
//           </div>
//           <div className="col-md-8">
//             <h2>{product.title}</h2>
//             <p className="text-muted">{product.category}</p>
//             <p className="lead">${product.price}</p>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ProductDetailPage;
