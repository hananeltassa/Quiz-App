import React, { useState } from "react";
import "./Register.css"; 
import axios from "axios";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8080/api/users/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);

      window.location.href = "/login"; 

    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registerContainer">
      <h1 className="registerTitle">Register</h1>
      <form onSubmit={handleSubmit} className="registerForm">
        <CustomInput
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleInputChange}
          className="registerInput"
        />
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
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <CustomButton type="submit" className="registerButton" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </CustomButton>
      </form>
    </div>
  );
};

export default RegisterPage;
