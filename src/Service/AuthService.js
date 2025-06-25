// src/services/authService.js
import axios from 'axios';


const API_URL = 'http://localhost:8080/api/user/login'; // Replace with your backend URL



const register = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
    }).then((response) => {
    return response.data;
    });
};

const login = (username, password) => {
    return axios.post(API_URL + 'login', {
    username,
    password,
    }).then((response) => {
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;
// src/services/authService.js
