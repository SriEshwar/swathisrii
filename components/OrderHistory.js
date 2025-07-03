// OrderHistory.js (New Page for Order History)
/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = ({ cart, setCart }) => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch orders from local storage or backend API
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleReorder = (items) => {
    setCart(items);
    navigate("/cart"); // Navigate to cart page with reordered items
  };

  return (
    <div className="order-history">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.totalPrice.toFixed(2)}</p>
            <p>Status: <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>{item.title} - ₹{item.price} x {item.quantity}</li>
              ))}
            </ul>
            <button onClick={() => handleReorder(order.items)}>Reorder</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderHistory.css";

const OrderHistory = ({ cart, setCart }) => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleReorder = (items) => {
    setCart(items);
    navigate("/cart");
  };

  return (
    <div className="order-history">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.totalPrice.toFixed(2)}</p>
            <p>Status: <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>{item.title} - ₹{item.price} x {item.quantity}</li>
              ))}
            </ul>
            <button onClick={() => handleReorder(order.items)}>Reorder</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderHistory.css";

const OrderHistory = ({ cart, setCart }) => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleReorder = (items) => {
    const confirm = window.confirm("Do you want to add these items to your cart again?");
    if (!confirm) return;

    setCart(items.map(item => ({ ...item, quantity: 1 })));
    navigate("/cart");
  };

  return (
    <div className="order-history">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            </div>

            <div className="order-details">
              <p><strong>Shipping To:</strong> {order.shippingInfo?.name}, {order.shippingInfo?.address}, {order.shippingInfo?.city}, {order.shippingInfo?.state} - {order.shippingInfo?.pincode}</p>
              <p><strong>Payment:</strong> {order.paymentMethod}</p>
            </div>

            <ul className="item-list">
              {order.items.map((item) => (
                <li key={item.id} className="item">
                  <div className="item-info">
                    <span>{item.title}</span>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <div className="item-price">
                    ₹{(item.price * 83).toFixed(2)} x {item.quantity} = ₹{(item.price * 83 * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>

            <div className="order-footer">
              <p><strong>Total Paid:</strong> ₹{order.totalPrice.toFixed(2)}</p>
              <button className="reorder-btn" onClick={() => handleReorder(order.items)}>
                Reorder
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
