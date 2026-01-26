import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://restaurant-be-400174736012.asia-southeast2.run.app/api-swagger/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
