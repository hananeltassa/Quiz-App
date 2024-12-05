import React, { useState } from "react";
import "./Register.css"; 
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="registerContainer">
      <h1 className="registerTitle">Register</h1>
      <form onSubmit={handleSubmit} className="registerForm">
        <CustomInput
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          className="registerInput"
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          className="registerInput"
        />
        <CustomInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="registerInput"
        />
        <CustomButton type="submit" className="registerButton">
          Register
        </CustomButton>
      </form>
    </div>
  );
};

export default RegisterPage;
