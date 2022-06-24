import axios from "axios";
import ITransaction from "../types/transaction.type";
import IUser from "../types/user.type";
import authHeader from "./auth-header";
import { getCurrentUser } from "./auth.service";

const API_URL = "http://localhost:8080/api/users/";

export const addTransaction = (amount: Number, date: String, discription: String, catagory: String, type: String, userId: String) => {
  return axios.put(API_URL + `addTransaction/${userId}`, {amount, date,discription, catagory, type 
  }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });;
};
