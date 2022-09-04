import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lws-server-wdp.herokuapp.com/',
});

export default axiosInstance;
