// src/config.js
export const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-url.com' 
    : 'http://localhost:5000';
