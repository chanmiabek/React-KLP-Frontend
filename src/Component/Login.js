// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap'; // Import Bootstrap components

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' }); // Added role
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state for button
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.role) { // Validate all fields including role
      setError('All fields are required');
      setSuccess(false);
      return;
    }

    setLoading(true); // Set loading to true
    setError('');      // Clear previous messages
    setSuccess(false); // Clear previous messages

    try {
      // IMPORTANT: Adjust the URL to your actual backend login endpoint.
      const response = await axios.post('http://localhost:8080/api/user/login', {
        email: form.email,
        password: form.password,
        role: form.role, // Send the selected role to the backend
      });

      console.log('Login successful:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user data/token
      setSuccess(true);
      setForm({ email: '', password: '', role: '' }); // Clear form and reset role

      // Redirect based on role or a generic dashboard
    
      const userRole = response.data.role; 
      setTimeout(() => {
        if (userRole === 'instructor') {
          navigate('/instructorDashboard');
        } else if (userRole === 'student') {
          navigate('/studentDashboard');
        } else {
          navigate('/'); // Fallback for other roles or generic dashboard
        }
      }, 1000); // Give user time to see success message
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Login failed. Please check your credentials and selected role.');
      setSuccess(false);
    } finally {
      setLoading(false); // Always set loading to false
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="mb-4 text-center text-primary">Login</h2> {/* Changed color-blue to text-primary */}
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
          {success && <Alert variant="success" className="mb-3">Login successful! Redirecting...</Alert>}

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='fw-bold'>Email address</Form.Label> {/* Used fw-bold for font-bold */}
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

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label className='fw-bold'>Login as</Form.Label>
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

          <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Logging in...
              </>
            ) : (
              'Login with Email'
            )}
          </Button>
        </Form>

        <p className="mt-3 text-center">
          <Link to="/forgotPassword">Forgot password?</Link> {/* Forgot password link */}
        </p>

        <hr className="my-4" />
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </Container>
  );
}

export default Login;