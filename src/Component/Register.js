// src/components/Register.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

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

  // Initialize useNavigate hook
  const navigate = useNavigate();

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
    // Corrected phone number validation to allow for flexible formatting but check digits
    // Allows spaces, hyphens, and parentheses, but requires at least 10 digits total.
    const cleanedPhone = form.phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
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

      // Check if your backend explicitly sends a success status, e.g., response.data.status === '00'
      // or response.data.success === true. Adjust as per your API.
      if (response.data.status === '00' || response.data.success === true) {
        setSuccess(true); // Indicate success for the Alert message
        setError(''); // Clear any previous error

        // Clear the form after successful registration
        setForm({ fullName: '', email: '', password: '', confirmPassword: '', phone: '', role: 'student' });

        // Use the navigate function from useNavigate hook
        // Add a small delay to allow the success message to be seen
        setTimeout(() => {
          navigate('/login');
        }, 1500); // Navigate after 1.5 seconds
      } else {
        // Handle cases where the backend responds with a non-success status but no error thrown
        setError(response.data.message || 'Registration failed. Please try again.');
        setSuccess(false);
      }
    } catch (err) {
      console.error('Registration failed:', err.response?.data || err.message);
      // Display specific error message from backend if available, otherwise a generic one
      setError(err.response?.data?.message || 'Registration failed. Network error or server unavailable. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false); // Always set loading to false when submission finishes (success or error)
    }
  };

  // useEffect for initial setup or cleanup if needed
  useEffect(() => {
    // You can add logic here if you need to fetch data on component mount
    // or set up event listeners. For a simple registration form, it's often not needed.
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center box-shadow round-shadow" style={{ minHeight: '100vh' }}>
      <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-center text-primary fw-bold">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
          {success && <Alert variant="success" className="mb-3">Registration successful! Redirecting to login...</Alert>} {/* Changed Alert variant to success */}

          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label className='fw-bold'>Full Name</Form.Label>
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
            <Form.Label className="fw-bold ">Email address</Form.Label>
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
            <Form.Label className='fw-bold'>Password</Form.Label>
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
            <Form.Label className='fw-bold'>Confirm Password</Form.Label>
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
            <Form.Label className='fw-bold'>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label className='fw-bold'>Register as</Form.Label>
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

          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
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