import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

const PasswordPage = ({ formData, setFormData }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = async () => {
    if (formData.password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Format final JSON object
    const payload = {
      customerId: "",
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: parseInt(formData.age),
      gender: formData.gender,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      address: {
        addressId: "",
        buildingName: formData.address?.buildingName,
        streetNo: formData.address?.streetNo,
        area: formData.address?.area,
        city: formData.address?.city,
        state: formData.address?.state,
        country: formData.address?.country,
        pinCode: formData.address?.pinCode,
      },
      password: formData.password,
    };

    console.log(JSON.stringify(payload));
    try {
      const res = await fetch("http://localhost:8080/AddCustomer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login"); // Or another success page
      } else {
        alert("Registration failed. Please check input and try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Create a Password</h2>
        <p className="form-subtitle">Step 3 of 3</p>

        <input
          type="password"
          placeholder="Enter password"
          value={formData.password || ""}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-input"
        />

        <button onClick={handleSubmit} className="form-button">
          Register ✅
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
