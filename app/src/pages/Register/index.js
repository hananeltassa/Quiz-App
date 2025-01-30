import React, { useState } from "react";
import "./Register.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import useForm from "../../hooks/useForm";

const RegisterPage = () => {
  const { formData, handleInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();

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

      navigate("/login"); 

    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit} className="registerForm">
        <h1 className="registerTitle">Register</h1>
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
