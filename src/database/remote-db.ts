import axios from 'axios';

export const RemoteServer = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000 * 10,
});

// Add a response interceptor
RemoteServer.interceptors.response.use(
  // return data directly
  (response) => {
    if (!response.data) throw new Error('Data Not Found');

    return response.data;
  },
  // serialize err
  (err) => Promise.reject(err),
);
