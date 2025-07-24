// src/contexts/AuthContexts.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../Service/AuthService';

// Provide a safe default value to prevent destructuring errors
const AuthContext = createContext({
  user: null,
  loading: true,
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setLoading(false);
    }, []);

    const login = async (fullName, password) => {
        const userData = await authService.login(fullName, password);
        setUser(userData);
        return userData;
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    const register = async (fullName, email, password) => {
        await authService.register(fullName, email, password);
        // Optionally log in after registration, or redirect to login page
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register, isAuthenticated: !!user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

