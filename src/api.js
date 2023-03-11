import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reshops-backend.onrender.com/",
});

const register = async (body) => {
  try {
    const response = await axiosInstance.post("users/register", body);
    return response;
  } catch (e) {
    return e;
  }
};

const login = async (body) => {
  try {
    const response = await axiosInstance.post("users/login", body);
    return response;
  } catch (e) {
    return e;
  }
};

const addCart = async (body) => {
  try {
    const response = await axiosInstance.post("product/addcart", body, {
      headers: {
        usertoken: localStorage.getItem("token"),
        userid: localStorage.getItem("id"),
      },
    });
    return response;
  } catch (e) {
    return e;
  }
};

const getCart = async () => {
  try {
    const response = await axiosInstance.get("product/getcart", {
      headers: {
        usertoken: localStorage.getItem("token"),
        userid: localStorage.getItem("id"),
      },
    });
    return response;
  } catch (e) {
    return e;
  }
};

const api = {
  register,
  login,
  addCart,
  getCart,
};

export default api;
