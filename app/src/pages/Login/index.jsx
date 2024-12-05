import React, { useState } from "react";
import "./Login.css"; 
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">Login</h1>
      <form onSubmit={handleSubmit} className="loginForm">
        <CustomInput
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          className="loginInput"
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          className="loginInput"
        />
        <CustomButton type="submit" className="loginButton">
          Login
        </CustomButton>
      </form>
    </div>
  );
};

export default LoginPage;
