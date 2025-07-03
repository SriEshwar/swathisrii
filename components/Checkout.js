/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const USD_TO_INR = 83; // Static conversion rate
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );





  // Proceed to the next step
  const nextStep = () => {
    if (step === 1 && (!shippingInfo.name || !shippingInfo.address)) {
      alert("Please fill in your shipping details.");
      return;
    }
    if (step === 2 && !paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => setStep(step - 1);

  // Handle order submission
  const placeOrder = () => {
    alert("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-steps">
        <span className={step === 1 ? "active" : ""}>Shipping</span>
        <span className={step === 2 ? "active" : ""}>Payment</span>
        <span className={step === 3 ? "active" : ""}>Review</span>
      </div>

      //Step 1: Shipping Address 
      {step === 1 && (
        <div className="checkout-step">
          <h3>Enter Shipping Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            value={shippingInfo.city}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, city: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="State"
            value={shippingInfo.state}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pincode"
            value={shippingInfo.pincode}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, pincode: e.target.value })
            }
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      // Step 2: Payment Method 
      {step === 2 && (
        <div className="checkout-step">
          <h3>Select Payment Method</h3>
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={() => setPaymentMethod("Credit Card")}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={() => setPaymentMethod("PayPal")}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={() => setPaymentMethod("UPI")}
            />
            UPI
          </label>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      // Step 3: Review & Confirm 
      {step === 3 && (
        <div className="checkout-step">
          <h3>Review Order</h3>
          <p>
            <strong>Name:</strong> {shippingInfo.name}
          </p>
          <p>
            <strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city},{" "}
            {shippingInfo.state} - {shippingInfo.pincode}
          </p>
          <p>
            <strong>Payment Method:</strong> {paymentMethod}
          </p>
          <p>
            <strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}
          </p>
          <button onClick={prevStep}>Back</button>
          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const USD_TO_INR = 83; // Static conversion rate
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );

  // Proceed to the next step
  const nextStep = () => {
    if (step === 1 && (!shippingInfo.name || !shippingInfo.address)) {
      alert("Please fill in your shipping details.");
      return;
    }
    if (step === 2 && !paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => setStep(step - 1);

  // ✅ Save the order to localStorage and navigate to confirmation page
  const placeOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      totalPrice: totalPrice,
      status: "Processing",
      shippingInfo,
      paymentMethod,
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-steps">
        <span className={step === 1 ? "active" : ""}>Shipping</span>
        <span className={step === 2 ? "active" : ""}>Payment</span>
        <span className={step === 3 ? "active" : ""}>Review</span>
      </div>

  
      {step === 1 && (
        <div className="checkout-step">
          <h3>Enter Shipping Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            value={shippingInfo.city}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, city: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="State"
            value={shippingInfo.state}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pincode"
            value={shippingInfo.pincode}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, pincode: e.target.value })
            }
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="checkout-step">
          <h3>Select Payment Method</h3>
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={() => setPaymentMethod("Credit Card")}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={() => setPaymentMethod("PayPal")}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={() => setPaymentMethod("UPI")}
            />
            UPI
          </label>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

    
      {step === 3 && (
        <div className="checkout-step">
          <h3>Review Order</h3>
          <p>
            <strong>Name:</strong> {shippingInfo.name}
          </p>
          <p>
            <strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city},{" "}
            {shippingInfo.state} - {shippingInfo.pincode}
          </p>
          <p>
            <strong>Payment Method:</strong> {paymentMethod}
          </p>
          <p>
            <strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}
          </p>
          <button onClick={prevStep}>Back</button>
          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const USD_TO_INR = 83; // Static conversion rate
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );

  const nextStep = () => {
    if (step === 1 && (!shippingInfo.name || !shippingInfo.address)) {
      alert("Please fill in your shipping details.");
      return;
    }
    if (step === 2 && !paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  // ✅ Save order, clear cart, navigate to confirmation
  const placeOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      totalPrice: totalPrice,
      status: "Processing",
      shippingInfo,
      paymentMethod,
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setCart([]); // ✅ Clear the cart
    alert("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-steps">
        <span className={step === 1 ? "active" : ""}>Shipping</span>
        <span className={step === 2 ? "active" : ""}>Payment</span>
        <span className={step === 3 ? "active" : ""}>Review</span>
      </div>

    {/*}  {step === 1 && (
        <div className="checkout-step">
          <h3>Enter Shipping Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            value={shippingInfo.city}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, city: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="State"
            value={shippingInfo.state}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pincode"
            value={shippingInfo.pincode}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, pincode: e.target.value })
            }
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="checkout-step">
          <h3>Select Payment Method</h3>
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={() => setPaymentMethod("Credit Card")}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={() => setPaymentMethod("PayPal")}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={() => setPaymentMethod("UPI")}
            />
            UPI
          </label>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

{step === 2 && (
  <div className="checkout-step">
    <h3>Select Payment Method</h3>
    {["Google Pay", "PayPal", "Cash on Delivery"].map((method) => (
      <label key={method}>
        <input
          type="radio"
          value={method}
          checked={paymentMethod === method}
          onChange={() => setPaymentMethod(method)}
        />
        {method}
      </label>
    ))}

    <button onClick={prevStep}>Back</button>
    <button
      onClick={() => {
        if (!paymentMethod) {
          alert("Please select a payment method.");
          return;
        }

        // Simulate redirection or confirmation
        if (paymentMethod === "Google Pay") {
          window.open("https://pay.google.com/", "_blank");
        } else if (paymentMethod === "PayPal") {
          window.open("https://www.paypal.com/", "_blank");
        }

        nextStep(); // Proceed to review step
      }}
    >
      Next
    </button>
  </div>
)}

      {step === 3 && (
        <div className="checkout-step">
          <h3>Review Order</h3>
          <p><strong>Name:</strong> {shippingInfo.name}</p>
          <p><strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
          <button onClick={prevStep}>Back</button>
          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const USD_TO_INR = 83;
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );

  const nextStep = () => {
    if (step === 1 && (!shippingInfo.name || !shippingInfo.address)) {
      alert("Please fill in your shipping details.");
      return;
    }
    if (step === 2 && !paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const placeOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      totalPrice: totalPrice,
      status: "Processing",
      shippingInfo,
      paymentMethod,
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setCart([]);
    alert("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-steps">
        <span className={step === 1 ? "active" : ""}>Shipping</span>
        <span className={step === 2 ? "active" : ""}>Payment</span>
        <span className={step === 3 ? "active" : ""}>Review</span>
      </div>

      {step === 1 && (
        <div className="checkout-step">
          <h3>Enter Shipping Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            value={shippingInfo.city}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, city: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="State"
            value={shippingInfo.state}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pincode"
            value={shippingInfo.pincode}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, pincode: e.target.value })
            }
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="checkout-step">
          <h3>Select Payment Method</h3>
          {["PayPal", "Cash on Delivery"].map((method) => (
            <label key={method}>
              <input
                type="radio"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              {method}
            </label>
          ))}
          <button onClick={prevStep}>Back</button>
          <button
            onClick={() => {
              if (!paymentMethod) {
                alert("Please select a payment method.");
                return;
              }

             
              if (paymentMethod === "PayPal") {
                window.open("https://www.paypal.com/", "_blank");
              }

              nextStep();
            }}
          >
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="checkout-step">
          <h3>Review Order</h3>
          <p><strong>Name:</strong> {shippingInfo.name}</p>
          <p><strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
          <button onClick={prevStep}>Back</button>
          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const USD_TO_INR = 83;
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * USD_TO_INR * item.quantity,
    0
  );

  useEffect(() => {
    // Scroll to top on step change
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products");
    }
  }, [cart, navigate]);

  const validateShipping = () => {
    const { name, address, city, state, pincode } = shippingInfo;
    if (!name || !address || !city || !state || !pincode) {
      alert("Please fill all shipping fields.");
      return false;
    }
    if (!/^\d{6}$/.test(pincode)) {
      alert("Pincode must be a 6-digit number.");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateShipping()) return;
    if (step === 2 && !paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const placeOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      totalPrice: totalPrice,
      status: "Processing",
      shippingInfo,
      paymentMethod,
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    setCart([]);
    alert("✅ Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-steps">
        <span className={step === 1 ? "active" : ""}>Shipping</span>
        <span className={step === 2 ? "active" : ""}>Payment</span>
        <span className={step === 3 ? "active" : ""}>Review</span>
      </div>

      {step === 1 && (
        <div className="checkout-step">
          <h3>Enter Shipping Address</h3>
          {["name", "address", "city", "state", "pincode"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={shippingInfo[field]}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, [field]: e.target.value })
              }
            />
          ))}
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="checkout-step">
          <h3>Select Payment Method</h3>
          {["PayPal", "Cash on Delivery"].map((method) => (
            <label key={method}>
              <input
                type="radio"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              {method}
            </label>
          ))}
          <div className="btn-group">
            <button onClick={prevStep}>Back</button>
            <button
              onClick={() => {
                if (!paymentMethod) {
                  alert("Please select a payment method.");
                  return;
                }
                if (paymentMethod === "PayPal") {
                  window.open("https://www.paypal.com/", "_blank");
                }
                nextStep();
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="checkout-step">
          <h3>Review Order</h3>
          <div className="review-block">
            <p><strong>Name:</strong> {shippingInfo.name}</p>
            <p><strong>Address:</strong> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} - ${shippingInfo.pincode}`}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>
            <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
          </div>
          <div className="btn-group">
            <button onClick={prevStep}>Back</button>
            <button className="place-order-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
