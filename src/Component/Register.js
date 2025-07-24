// src/components/Register.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap'; // Import Spinner

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'student', // Default role to 'student'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const validateForm = () => {
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword || !form.phone || !form.role) {
      return 'All fields are required';
    }
    if (!form.email.includes('@')) {
      return 'Invalid email address';
    }
    if (form.password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    if (form.password !== form.confirmPassword) {
      return 'Passwords do not match';
    }
    if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ''))) {
      return 'Phone number must be at least 10 digits';
    }
    if (!['student', 'instructor'].includes(form.role)) {
        return 'Invalid role selected';
    }
    return null;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }

    setLoading(true); // Set loading to true when submission starts
    setError(''); // Clear previous errors
    setSuccess(false); // Clear previous success messages

    try {
        const response = await axios.post('http://localhost:8080/api/user/register', form);
        console.log('Registration successful:', response.data);
        setSuccess(true);
        // Clear the form after successful registration
        setForm({ fullName: '', email: '', password: '', confirmPassword: '', phone: '', role: 'student' });
    } catch (err) {
        console.error('Registration failed:', err.response?.data || err.message);
        setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
        setLoading(false); // Always set loading to false when submission finishes (success or error)
    }
  };

  useEffect(() => {
    // Optional: Any side effects on component mount/unmount or specific state changes
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-center">Register</h2>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
          {success && <Alert variant="success" className="mb-3">Registration successful! You can now <Link to="/login">login</Link>.</Alert>}

          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Enter phone number (e.g., 0712345678)"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Register as</Form.Label>
            <Form.Select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </Form.Select>
          </Form.Group>

          <Button variant="success" type="submit" className="w-100" disabled={loading}>
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2" // Add some margin to the right of the spinner
                />
                Loading...
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
        </Form>
        <hr className="my-4" />
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;