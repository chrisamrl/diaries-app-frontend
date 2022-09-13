import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const verifyToken = async () => {
  const token = window.localStorage.getItem('token')
  const userId = window.localStorage.getItem('userId')

  const response = await axios.post(`${API_URL}/verifyToken`, { token: token, userId: userId });
  return response;
}


export default verifyToken;
