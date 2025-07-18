// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Both fields are required');
      setSuccess(false);
      return;
    }
    try {
      // Adjust the URL to your backend login endpoint
      const response = await axios.post('http://localhost:8080/api/user/login', {
        email: form.email,
        password: form.password,
      });
      // Save user/token as needed
      console.log('Login successful:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      setSuccess(true);
      setError('');
      setForm({ email: '', password: '' });
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      setSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto border p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Login successful! Redirecting...</div>}
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login with Email</button>
        </form>
        <hr className="my-4" />
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
