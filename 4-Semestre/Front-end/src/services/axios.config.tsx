import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
    }
});

// const api: AxiosInstance = axios.create({
//   baseURL: 'http://40.76.110.239:3002/',
//   headers: {
//     'Content-Type': 'application/json'
//     }
// });

export const addAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
