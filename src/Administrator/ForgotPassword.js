import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap'; // Import Bootstrap components

const ForgotPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const tokenFromUrl = queryParams.get('token');
        if (tokenFromUrl) {
            setToken(tokenFromUrl);
        } else {
            setError('No reset token found in the URL. Please use the link from your email.');
        }
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!password || !confirmPassword) {
            setError('Please enter and confirm your new password.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (!token) {
            setError('Invalid or missing reset token.');
            return;
        }

        try {
            // Replace with your actual backend API endpoint
            const response = await axios.post('http://localhost:5000/api/user/forgot-password', {
                token,
                newPassword: password,
            });
            setMessage(response.data.message || 'Your password has been reset successfully!');
            setPassword('');
            setConfirmPassword('');
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to reset password. The token might be invalid or expired.');
        }
    };

    if (error && !token) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '400px', width: '100%' }}>
                    <Alert variant="danger" className="text-center">{error}</Alert>
                    <p className="text-center text-muted">Please ensure you are using the correct link from your email.</p>
                </div>
            </Container>
        );
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="mb-4 text-center">Reset Password</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formNewPassword">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm New Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100">
                        Reset Password
                    </Button>
                </Form>
                {message && <Alert variant="success" className="mt-3 text-center">{message}</Alert>}
                {error && <Alert variant="danger" className="mt-3 text-center">{error}</Alert>}
            </div>
        </Container>
    );
};

export default ForgotPassword;