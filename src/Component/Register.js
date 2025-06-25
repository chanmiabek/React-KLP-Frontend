import React from "react";
import  { useState, useEffect } from "react";
import AuthService from "../Service/AuthService";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const validateFormData = () => {
    if (!inputs.fullName || !inputs.email || !inputs.password || !inputs.confirm) {
      alert("Some fields are empty");
      return false;
    }
    if (inputs.password !== inputs.confirm) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFormData()) {
      return;
    }
    try {
      AuthService.register(inputs.fullName, inputs.email, inputs.password);
      // Send registration data to the backend API
      console.log("Registering user:", inputs);
      // Make sure the backend API is running and accessible
      // Adjust the URL if your backend is hosted elsewhere
      console.log("Sending registration request to backend API");
      console.log("Inputs:", inputs);
      console.log("Backend URL: http://localhost:8080/api/user/register");
      console.log("Attempting to register user:", inputs.fullName);
      console.log("Email:", inputs.email);
      console.log("Password:", inputs.password);
      console.log("Confirm Password:", inputs.confirm);
      // Make the POST request to register the user
      console.log("Sending POST request to backend API");
      console.log("Request URL: http://localhost:8080/api/user/register");
      console.log("Request Body:", inputs);
      console.log("Headers: { 'Content-Type': 'application/json' }");
      await axios.post('http://localhost:8080/api/user/register', inputs);
      alert(inputs.fullName + " Registration successfully");
      navigate('/login');
    } catch (err) {
      console.log("Something went wrong", err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  // Fetch all users from the backend API
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);
  return (
    <div style={{
      backgroundColor: "white", width: "350px", height: "auto",
      margin: "0 auto", padding: "20px", borderRadius: "50px", borderColor: "aquamarine", color: "blue", fontFamily: "Arial, sans-serif", fontSize: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    }}>
      <h1 style={{ textAlign: "center" }}>Sign up</h1>

      <form onSubmit={handleSubmit} style={{ margin: "0 auto", maxWidth: "100%" }}>
        <label>Full Name:<br />
          <input
            type="text"
            name="fullName"
            value={inputs.fullName || ""}
            onChange={handleChange}
          />
        </label><br />

        <label>Email:<br />
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label><br />

        <label>Password:<br />
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </label><br />

        <label>Confirm Password:<br />
          <input
            type="password"
            name="confirm"
            value={inputs.confirm || ""}
            onChange={handleChange}
          />
        </label><br />
        <br />
        <button type="submit" className="btn btn-primary" formMethod="post">
          Sign Up
        </button>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
            <p className="text-muted">By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </p>
      </form>
    </div>
  );
};

export default Register;
