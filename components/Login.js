// Login.js
// Login.js
/*
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Firebase Auth
import { useNavigate } from "react-router-dom";
import './Auth.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate("/home");
    } catch (err) {
      console.error("Error logging in: ", err.message);
      setError(err.message);  // This will display the error message in the UI
    }
  };
  
  return (
    <div className="auth-container">
      <section className="auth-hero">
        <h1>Login to Your Account</h1>
        <p>Welcome back to E-Shop</p>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="cta-button">
            Log In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
*/
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <section className="auth-hero">
        <h1>Login to Your Account</h1>
        <p>Welcome back to E-Shop</p>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="cta-button">
            Log In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
