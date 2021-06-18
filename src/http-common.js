import axios from "axios";

export default axios.create({
  baseURL: "https://djfinal.herokuapp.com/api/user",
  headers: {
    "Content-type": "application/json"
  }
});