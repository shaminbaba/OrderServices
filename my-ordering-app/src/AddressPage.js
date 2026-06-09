import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css"; // Reuse same CSS

const AddressPage = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleNext = () => {
    navigate("/password");
  };

  const address = formData.address || {};

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Address Details</h2>
        <p className="form-subtitle">Step 2 of 3</p>

        <input
          type="text"
          name="buildingName"
          value={address.buildingName || ""}
          onChange={handleChange}
          placeholder="Building Name"
          className="form-input"
        />
        <input
          type="text"
          name="streetNo"
          value={address.streetNo || ""}
          onChange={handleChange}
          placeholder="Street No"
          className="form-input"
        />
        <input
          type="text"
          name="area"
          value={address.area || ""}
          onChange={handleChange}
          placeholder="Area"
          className="form-input"
        />
        <input
          type="text"
          name="city"
          value={address.city || ""}
          onChange={handleChange}
          placeholder="City"
          className="form-input"
        />
        <input
          type="text"
          name="state"
          value={address.state || ""}
          onChange={handleChange}
          placeholder="State"
          className="form-input"
        />
        <input
          type="text"
          name="country"
          value={address.country || ""}
          onChange={handleChange}
          placeholder="Country"
          className="form-input"
        />
        <input
          type="text"
          name="pinCode"
          value={address.pinCode || ""}
          onChange={handleChange}
          placeholder="Pin Code"
          className="form-input"
        />

        <button onClick={handleNext} className="form-button">
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
