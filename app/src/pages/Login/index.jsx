import React, { useState } from "react";
import "./Login.css"; 
import axios from "axios";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [, setErrorMessage] = useState("");
  const [, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        setLoading(true);
  
        const response = await axios.post("http://localhost:8080/api/users/login", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
  
        console.log(response.data);
  
        window.location.href = "/"; 
  
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
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
