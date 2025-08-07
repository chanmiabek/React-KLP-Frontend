// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.role) {
      setError('All fields are required');
      setSuccess(false);
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
    
      const response = await axios.post("https://backend-api-1-awol.onrender.com/api/user/login", {
        email: form.email,
        password: form.password,
        role: form.role,
      });

      const data = response.data;

      console.log('Login successful, response data:', data);

      
      if (data.status === '00' || data.success) { 
        setSuccess(true);
        setError(''); 

      
        localStorage.setItem('loggedInUser', JSON.stringify(data.user));
        localStorage.setItem("token", data.token); // Store token for authenticated requests);
        localStorage.setItem("role", data.role); // Store token for authenticated requests);


      
        setForm({ email: '', password: '', role: 'student' }); 

        const userRole = data.user ? data.user.role : form.role; 
        setTimeout(() => {
          if (userRole === 'instructor') {
            navigate('/instructorDashboard');
          } else if (userRole === 'student') {
            navigate('/student');
          } else {
            navigate('/dashboard');
            console.warn('Unknown user role or role not provided in login response, redirecting to home.');
          }
        }, 1000); // 1-second delay to show "Login successful! Redirecting..."
      } else {
        setError(data.message || 'Login failed. Please check your credentials and selected role.');
        setSuccess(false);
      }
    } catch (err) {
      // 5. Improved error handling for network issues or server errors
      console.error('Login failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Login failed. Network error or server unavailable. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="mb-4 text-center text-primary">Login</h2>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
          {success && <Alert variant="success" className="mb-3">Login successful! Redirecting...</Alert>}

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='fw-bold'>Email address</Form.Label>
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
          <Link to="/forgotPassword">Forgot password?</Link>
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