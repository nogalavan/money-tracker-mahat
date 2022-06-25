import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

export const register = (username: String, email: String, password: String, firstName: String, lastName: String, balance: Number, budget: Number) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    firstName,
    lastName,
    balance,
    budget
  });
};

export const update = (username: String, email: String, budget: Number) => {
  return axios.put(API_URL + "update", {
    username,
    email,
    budget
  }, {headers: authHeader()}).then((response) => {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  });;
};

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
