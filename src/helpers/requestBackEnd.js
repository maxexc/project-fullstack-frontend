import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

console.log("REACT_APP_BASE_URL: ", REACT_APP_BASE_URL);
console.log('>>> Base URL is:', process.env.REACT_APP_BASE_URL);

export const instanceBacEnd = axios.create({
  baseURL: REACT_APP_BASE_URL,

});

export default instanceBacEnd;
