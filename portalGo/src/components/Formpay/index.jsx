import React, { useState } from "react";
import FormPayElements from "./FormPayElements";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const FormPay = ({ amount, checkoutHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gstNumber: "",
    companyAddress: "",
    amount: amount,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:4000/api/form-data",
          formData
        );
        console.log("Form data saved to database:", res.data);
        // Clear the form data after successful checkout
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          gstNumber: "",
          companyAddress: "",
          amount: amount,
        });
        checkoutHandler(amount);
      } catch (error) {
        console.error("Error saving form data to database:", error);
      } finally {
        setLoading(false); // Ensure setLoading(false) is executed after the try/catch block
      }
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  const validateGSTNumber = (gstNumber) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gstNumber);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!formData.gstNumber) newErrors.gstNumber = "GST Number is required";
    else if (!validateGSTNumber(formData.gstNumber)) newErrors.gstNumber = "Invalid GST Number";
    if (!formData.companyAddress) newErrors.companyAddress = "Company Address is required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <FormPayElements>
      <h2>Configurations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
          {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
        </div>
        <div>
          <label htmlFor="gstNumber">GST Number:</label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            placeholder="Enter your GST number"
            required
          />
          {errors.gstNumber && <p style={{ color: "red" }}>{errors.gstNumber}</p>}
        </div>
        <div>
          <label htmlFor="companyAddress">Company Address:</label>
          <textarea
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
            required
          ></textarea>
          {errors.companyAddress && <p style={{ color: "red" }}>{errors.companyAddress}</p>}
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

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <Rings type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <button type="submit">Submit And Proceed</button>
        )}
      </form>
    </FormPayElements>
  );
};

export default FormPay;
