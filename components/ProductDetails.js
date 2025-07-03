/*import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.image} alt={product.title} className="main-image" />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category">Category: {product.category}</p>
        <p className="rating">Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
        <button className="add-to-cart">Add to Cart</button>
        <Link to="/products" className="back-to-products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;*/
/*import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading-text">Loading product details...</p>;
  if (!product) return <p className="error-text">Product not found</p>;

  return (
    <div className="product-details">
   
      <div className="product-images">
        <img src={product.image} alt={product.title} className="main-image" />
      </div>

   
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category"><strong>Category:</strong> {product.category}</p>
        <p className="rating">
          ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
        </p>

        <button className="add-to-cart" onClick={() => alert("Added to cart!")}>
          🛒 Add to Cart
        </button>

        <Link to="/products" className="back-to-products">
          ⬅ Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;*/
/*reworked to add multiple*/
/*import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Simulating multiple images (API only provides one)
        const imageGallery = [data.image, data.image, data.image];
        setProduct({ ...data, images: imageGallery });
        setSelectedImage(data.image);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">

      <div className="product-images">
        <img src={selectedImage} alt="Product" className="main-image" />
        <div className="image-gallery">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product view ${index + 1}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

    
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category"><strong>Category:</strong> {product.category}</p>
        <p className="rating">
          <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
        </p>

       
        <div className="specifications">
          <h3>Specifications</h3>
          <ul>
            <li><strong>Brand:</strong> Sample Brand</li>
            <li><strong>Material:</strong> High-Quality Material</li>
            <li><strong>Dimensions:</strong> 10 x 5 x 3 inches</li>
            <li><strong>Weight:</strong> 1.2 lbs</li>
          </ul>
        </div>

        <button className="add-to-cart" onClick={() => alert("Added to cart!")}>Add to Cart</button>
        <Link to="/products" className="back-to-products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
*/
/*added below code for add to cart button */
/*
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Navigate to the cart page
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.image} alt={product.title} className="main-image" />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category">Category: {product.category}</p>
        <p className="rating">Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <Link to="/products" className="back-to-products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;*/
/* changed usd to ind by converting 

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const USD_TO_INR = 83; // Static conversion rate

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.image);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding to cart
  };

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={selectedImage} alt={product.title} className="main-image" />
        <div className="thumbnail-images">
          {[product.image, product.image, product.image].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">₹{(product.price * USD_TO_INR).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <p className="category">Category: {product.category}</p>
        <p className="rating">Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Link to="/products" className="back-to-products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
*/
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const USD_TO_INR = 83;

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.image);
      })
      .catch((err) => console.error("Error fetching product details:", err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={selectedImage} alt={product.title} className="main-image" />
        <div className="thumbnail-images">
          {/* You can eventually add more image options if API provides */}
          {[product.image].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">₹{(product.price * USD_TO_INR).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <p className="category">Category: {product.category}</p>
        <p className="rating">
          Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
        </p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Link to="/products" className="back-to-products">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
// This code defines a ProductDetails component that fetches product details from an API and displays them.
// It includes a main image, thumbnail images, product information, and an "Add to Cart" button.