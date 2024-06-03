// api.js

import axios from 'axios';

const backendUrl = 'http://localhost:3000'; // Ganti dengan alamat dan port backend Anda

// Fungsi untuk login
const login = async (username, password) => {
    try {
        const response = await axios.post(`${backendUrl}/login`, { username, password });
        return console.log(response.data.message)
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};

// Fungsi untuk registrasi
const register = async (username, password) => {
    try {
        const response = await axios.post(`${backendUrl}/register`, { username, password });
        return console.log(response.data.message)
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};

export { login, register };
