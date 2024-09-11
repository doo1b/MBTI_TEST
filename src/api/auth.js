import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/login?expiresIn=1h`,
      userData
    );
    localStorage.setItem("accessToken", response.data.accessToken);
    return response;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (nickname, token) => {
  try {
    await axios.patch(`${API_URL}/profile`, nickname, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
