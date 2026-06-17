import axios from "axios";

const api = axios.create({
  baseURL: "https://movie-project-zuez.onrender.com/api",
  withCredentials: true,
});

export default api;
