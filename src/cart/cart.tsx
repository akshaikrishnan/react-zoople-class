import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: Item[] = [
  { id: 1, name: "Item 1", price: 10, quantity: 2 },
  { id: 2, name: "Item 2", price: 20, quantity: 1 },
  { id: 3, name: "Item 3", price: 30, quantity: 3 },
];

const CartPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      <div className="row">
        <div className="col-md-12">
          <h2>Items in Cart</h2>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <span>{item.name}</span>
                  <span className="badge bg-secondary ms-2">
                    Quantity: {item.quantity}
                  </span>
                </div>
                <span className="badge bg-primary">
                  {item.price * item.quantity} $
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
