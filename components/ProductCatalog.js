/*import React, { useState, useEffect } from "react";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 100)}...</p>
              <p className="price">${product.price}</p>
              <p className="rating">Rating: {product.rating?.rate} ⭐</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;*/
/*
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>

   
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>


      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="product-link">
              <div className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description.substring(0, 100)}...</p>
                <p className="price">${product.price}</p>
                <p className="rating">Rating: {product.rating?.rate} ⭐</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
*/
/* converted usd to indian rupee
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000); // Adjusted for INR

  const USD_TO_INR = 83; // Static conversion rate

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.price * USD_TO_INR >= minPrice &&
      product.price * USD_TO_INR <= maxPrice
    );
  });

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Min Price (₹)"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max Price (₹)"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 100)}...</p>
              <p className="price">₹{(product.price * USD_TO_INR).toFixed(2)}</p>
              <p className="rating">Rating: {product.rating?.rate} ⭐</p>
              <Link to={`/products/${product.id}`} className="view-details">View Details</Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const USD_TO_INR = 83;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const priceInINR = product.price * USD_TO_INR;
    return (
      (category === "All" || product.category === category) &&
      priceInINR >= minPrice &&
      priceInINR <= maxPrice
    );
  });

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Min Price (₹)"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max Price (₹)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description.slice(0, 100)}...</p>
              <p className="price">₹{(product.price * USD_TO_INR).toFixed(2)}</p>
              <p className="rating">Rating: {product.rating?.rate} ⭐</p>
              <Link to={`/products/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
// This code defines a ProductCatalog component that fetches products from an API, filters them based on user input, and displays them in a styled catalog format. It includes features like category selection, price range filtering, and product details linking.
// The component uses React hooks for state management and side effects, and it applies basic error handling for the API fetch operation. The products are displayed with their images, titles, descriptions, prices (converted to INR), ratings, and a link to view more details.
