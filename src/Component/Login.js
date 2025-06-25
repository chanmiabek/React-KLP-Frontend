
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from "react";
import axios from 'axios';
import React from "react";
// (Removed duplicate Login component implementation)

  function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios ("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include", // enable cookies if you use cookie-based auth
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="mt-4">
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Login</button>
        <p>Don't  have an account?<Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
}

export default Login;
