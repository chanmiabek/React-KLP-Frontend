// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Both fields are required');
      setSuccess(false);
      return;
    }
    // Simulate API call
    axios.post('http://localhost:8082', form)
      .then(() => {
        setSuccess(true);
        setError('');
        setForm({ email: '', password: '' });
      })
      .catch(() => {
        setError('Login failed. Please check your credentials.');
        setSuccess(false);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto border p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Login successful!</div>}
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
