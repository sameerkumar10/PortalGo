import React, { useState } from "react";
import FormPayElements from "./FormPayElements";

const FormPay = ({ amount, checkoutHandler }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    amount: amount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before proceeding
    if (validateForm()) {
      checkoutHandler(amount);
      // Clear the form data after successful checkout
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        amount: amount,
      });
    } else {
      console.log("Please fill in all required fields.");
    }
  };


  const validateForm = () => {
    // Add your validation logic here
    // For example, check if all required fields are filled
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.address
    );
  };

  return (
    <FormPayElements>
      <h2>Your Setup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label>Amount (INR):</label>
          <input
            type="text"
            value={amount}
            onChange={handleChange}
            name="amount"
            placeholder="Enter amount in INR"
            required
          />
        </div>

        <button type="submit">Submit And Proceed</button>
      </form>
    </FormPayElements>
  );
};

export default FormPay;
