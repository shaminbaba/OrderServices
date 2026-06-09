import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
console.log('Received state:', product);
  useEffect(() => {
    if (!product) {
      // Redirect if product is not passed
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Payment Page</h2>
      <img
        src={product.itemImage}
        alt={product.itemName}
        style={{ width: '200px', height: '150px', objectFit: 'cover' }}
      />
      <h3>{product.itemName}</h3>
      <p>Price: ${product.cost?.toFixed(2)}</p>
    </div>
  );
}

export default PaymentPage;
