import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const userId = window.localStorage.getItem('userId');
const token = `bearer ${window.localStorage.getItem('token')}`

const config = {
  headers: { Authorization: token},
}

const getAllUserDiaries = async () => {

  const response = await axios.get(`${API_URL}/users/${userId}/pages`, config);
  return response.data;
}

const create = async (newDiary) => {
  const response = await axios.post(`${API_URL}/pages`, newDiary, config);
  return response.data;
}

const update = async (updatedDiary) => {
  const response = await axios.patch(`${API_URL}/pages`, updatedDiary, config);
  return response.data;
}

const getFilteredUserDiaries = async (dateString) => {
  const response = await axios.get(`${API_URL}/users/${userId}/pages?date=${dateString}`, config);
  return response.data;
}


export default { getAllUserDiaries, create, update, getFilteredUserDiaries };
