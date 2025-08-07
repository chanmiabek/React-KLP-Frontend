// src/contexts/AuthContext.js
import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true); 

    const navigate = useNavigate(); 

    useEffect(() => {
      
        const token = localStorage.getItem('token');
        const storedRole = localStorage.getItem('role');

        if (token && storedRole) {
            
            setIsAuthenticated(true);
            setUserRole(storedRole);
        } else {
            setIsAuthenticated(false);
            setUserRole(null);
        }
        setLoading(false); // Finished checking auth status
    }, []);

    const login = async (fullName, password) => {
        setLoading(true);
        try {
          
            const response = await axios('http://localhost:8080/api/user/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const { token, role } = data; 

                localStorage.setItem('token', token);
                localStorage.setItem('role', role); 

                setIsAuthenticated(true);
                setUserRole(role);
                setLoading(false);

                // Redirect based on role after successful login
                if (role === 'instructor') {
                    navigate('/instructorDashboard');
                } else if (role === 'student') {
                    navigate('/studentDashboard');
                } else {
                    // Default redirect if role is not recognized or other issues
                    navigate('/dashboard');
                }
                return true; 
            } else {
                
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
                setIsAuthenticated(false);
                setUserRole(null);
                setLoading(false);
                return false; 
            }
        } catch (error) {
            console.error('Network error or unexpected login error:', error);
            setIsAuthenticated(false);
            setUserRole(null);
            setLoading(false);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsAuthenticated(false);
        setUserRole(null);
        navigate('/login'); 
    };

    const value = {
        isAuthenticated,
        userRole,
        loading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};