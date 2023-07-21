import axios from "axios";

const api = axios.create({
  baseURL: "https://educa-back-production-89a4.up.railway.app",
});

export default api;
