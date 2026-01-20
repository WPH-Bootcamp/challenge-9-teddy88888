// src/services/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://be-restaurant-api-889893107835.asia-southeast2.run.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
export { api };