// src/services/apiService.js
import { API_URL } from '../config';

export const fetchData = async () => {
    const response = await fetch(`${API_URL}/api/endpoint`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};
