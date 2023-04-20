import axios from 'axios';

// const { REACT_APP_BASE_URL } = process.env;

export const instanceBacEnd = axios.create({
  baseURL: 'https://backend-soyummy.onrender.com/api',
});

export default instanceBacEnd;
