// services/authService.ts
import axios from 'axios';

interface User {
    email: string;
    name: string;
    category: string;
}

export const login = async (email: string, password: string): Promise<User> => {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    return response.data;
};
