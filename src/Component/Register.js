// src/components/Register.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword || !form.phone) {
      return 'All fields are required';
    }
    if (!form.email.includes('@')) {
      return 'Invalid email';
    }
    if (form.password.length  < 6) {
      return 'Password must be at least 6 characters';
    }
    if (form.password !== form.confirmPassword) {
      return 'Passwords do not match';
    }
    if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ''))) {
      return 'Phone number must be at least 10 digits';
    }
    return null;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }
    // Simulate API call
    axios.post('http://localhost:8080/api/user/register', form)
      .then(() => {
        setSuccess(true);
        setError('');
        setForm({ fullName: '', email: '', password: '', confirmPassword: '', phone: '' });
      })
      .catch((err) => {
        setError('Registration failed. Please try again.');
        setSuccess(false);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto border p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Register</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Registration successful!</div>}
          <div className="mb-3">
            <label>Full Name</label>
            <input type="text" className="form-control" name="fullName" placeholder="Enter full name" value={form.fullName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm password" value={form.confirmPassword} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Phone Number</label>
            <input type="tel" className="form-control" name="phone" placeholder="Enter phone number" value={form.phone} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
        <hr className="my-4" />
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
