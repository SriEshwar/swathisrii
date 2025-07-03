/*import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue Shopping</Link></p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-image" />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p className="price">${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
*/
/* changed usd to ind by converting */
/*
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const USD_TO_INR = 83; // Static conversion rate

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Continue Shopping</Link>
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-image"
                />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p className="price">
                    ₹{(item.price * USD_TO_INR).toFixed(2)}
                  </p>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
*/
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const USD_TO_INR = 83;

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );

  // Persist cart to localStorage (optional enhancement)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Continue Shopping</Link>
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-image" />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p className="price">₹{(item.price * USD_TO_INR).toFixed(2)}</p>

                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <p className="subtotal">
                    Subtotal: ₹{(item.price * USD_TO_INR * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>

            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Empty Cart
              </button>

              {totalPrice > 0 && (
                <Link to="/checkout" className="checkout-btn">
                  Proceed to Checkout
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
