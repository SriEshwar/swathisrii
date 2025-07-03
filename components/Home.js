/*import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to E-Shop</h1>
        <p>Discover the best deals and latest trends!</p>
        <button className="cta-button">Start Shopping</button>
      </section>
    </div>
  );
};

export default Home;

*/
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/products");
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to E-Shop</h1>
        <p>Discover the best deals and latest trends!</p>
        <button className="cta-button" onClick={handleShopClick}>
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default Home;
