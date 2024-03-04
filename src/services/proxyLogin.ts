import axios from 'axios';
// const baseURL = 'http://24.144.116.26:3000';
const baseURL = 'http://198.199.84.133:3000';

export const proxyLogin = async (email: string, password: string) => {
  const res = axios.post(baseURL + '/auth/login', { email, password });
  return res;
};
export const proxyFetch = async (data: any) => {
  const config = {
    headers: {
      Authorization: data.token,
    },
  };
  const res = axios.get(baseURL + data.url, config);
  return res;
};
