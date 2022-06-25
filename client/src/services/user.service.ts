import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/users/";

export const addTransaction = (amount: Number, date: String, discription: String, catagory: String, type: String, userId: String) => {
  const headers = authHeader();
  console.log(headers);
  return axios.put(API_URL + `addTransaction/${userId}`, {amount, date,discription, catagory, type 
  }, { headers }).then((response) => {
    let user = {...response.data};
    user.id = user._id;
    delete user._id;
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  });;
};