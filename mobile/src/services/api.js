import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.86.208:3001",
});

export default api;
