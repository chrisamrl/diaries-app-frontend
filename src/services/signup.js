import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response;
}


export default signup;
