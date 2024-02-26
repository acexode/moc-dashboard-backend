import axios from 'axios';

export const proxyLogin = async (email: string, password: string) => {
  const res = axios.post('http://24.144.116.26:3000/auth/login', { email, password });
  return res;
};
