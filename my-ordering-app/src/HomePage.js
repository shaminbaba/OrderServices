// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
   const [showQuantity, setShowQuantity] = useState(false);
  const navigate = useNavigate();

  const [userInitial, setUserInitial] = useState('');

useEffect(() => {
  const userData = JSON.parse(localStorage.getItem('user'));
  if (userData && userData.name) {
    setUserInitial(userData.name.charAt(0).toUpperCase());
  }
}, []);
    useEffect(() => {
    const fetchProducts = async () => {
     const cached = localStorage.getItem('productCache');
      if (cached) {
        setProducts(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/items'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        localStorage.setItem('productCache', JSON.stringify(data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  

const handleLogout = () => {
  // Clear any user data (if using localStorage, sessionStorage, etc.)
  localStorage.removeItem('token'); // or 'user', etc.

  // Navigate to login page
  navigate('/login');
};

const handleDecrement = (id) => {
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.itemId === id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )
  );
};

const handleIncrement = (id) => {
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.itemId === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
  );
};

 

  const handleProductClick = (product) => {
    // Navigate to payment page with product ID
    navigate('/payment',{ state: { product } });
  };
  const filteredProducts = products.filter((product) =>
    product.itemName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
    <div style={{ float: 'right' }}>
  <button onClick={handleLogout} className="button">
    Logout
  </button>
</div>
      <h2>Welcome to the Home Page</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            
         <div>
          <div
          onClick={() => handleProductClick(product)}
          style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px' }}>
              <img
                src={product.itemImage} 
                alt={product.itemName}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />  
  </div>

              <h4>{product.itemName}</h4>
              <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>${product.cost}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
  <button onClick={() => handleDecrement(product.itemId)}>-</button>
  <span>{product.quantity}</span>    
  <button onClick={() => handleIncrement(product.itemId)}>+</button>
</div>
{product.quantity > 0 && (
  <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
    Item Total: ${(product.quantity * product.cost).toFixed(2)}
  </div>
)}
  </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
