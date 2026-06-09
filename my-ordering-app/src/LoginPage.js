import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

function LoginPage() {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNo, password }),
      });

      const data = await response.json;

      if (response) {
        alert('Login successful!');
        // Save token if you receive one: localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Error connecting to the server.');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <input
        type="number"
        placeholder="Enter Mobile Number"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <button onClick={handleLogin}  className="button">
        Login
      </button>
    </div>
  );
}
export default LoginPage;