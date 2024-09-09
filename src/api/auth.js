import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem("accessToken", response.data.accessToken);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
