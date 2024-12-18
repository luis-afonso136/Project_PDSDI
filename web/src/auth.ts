import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const registerUser = async (nome: string, email: string, password: string) => {
  return axios.post(`${API_URL}/register`, { nome, email, password });
};

export const loginUser = async (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
