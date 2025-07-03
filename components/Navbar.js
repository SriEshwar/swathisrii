/*import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Ensure the CSS file exists in the same directory as Navbar.js

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">E-Shop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="#products" className="dropbtn">Products</Link> 
            <div className="dropdown-content">
              <Link to="#men">Men</Link> 
              <Link to="#women">Women</Link> 
              <Link to="#kids">Kids</Link> 
            </div>
          </li>
          <li><Link to="/cart">Cart</Link></li> 
          <li><Link to="/login">Login</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;*/
// Navbar.js
// Navbar.js
/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase authentication
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="navbar">
      <div className="logo">E-Shop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="#products" className="dropbtn">Products</Link>
            <div className="dropdown-content">
              <Link to="#men">Men</Link>
              <Link to="#women">Women</Link>
              <Link to="#kids">Kids</Link>
            </div>
          </li>
          <li><Link to="/cart">Cart</Link></li>
          {!user ? (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase authentication
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="navbar">
      <div className="logo">E-Shop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li> 
          <li><Link to="/cart">Cart</Link></li>
          {!user ? (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
           <li><Link to="/Orders">Your Orders</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;*/

// Navbar.js (Updated with user auth state and 'Your Orders')
/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="navbar">
      <div className="logo">E-Shop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/order-history">Your Orders</Link></li>
          {!user ? (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;*/
//cleaned & simplified Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="navbar">
      <div className="logo">E-Shop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/order-history">Your Orders</Link></li>
          {!user ? (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
