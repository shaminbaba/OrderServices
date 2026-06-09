import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState } from "react";
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import PaymentPage from './PaymentPage';
import RegistrationPage from './RegistrationPage';
import AddressPage from './AddressPage';
import PasswordPage from './PasswordPage';
function App() {
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobileNumber: "",
    email: "",
    buildingName: "",
    streetNo: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/reg" element={<RegistrationPage formData={formData} setFormData={setFormData} />}/>
      <Route path="/address" element={<AddressPage formData={formData} setFormData={setFormData} />} />
      <Route path="/password" element={<PasswordPage formData={formData} setFormData={setFormData} />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
