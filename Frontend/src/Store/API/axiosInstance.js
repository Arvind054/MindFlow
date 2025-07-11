import axios from 'axios';

const axiosInstance =  axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  }
});
export default axiosInstance;