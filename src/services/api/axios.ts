import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://restaurant-be-400174736012.asia-southeast2.run.app/api-swagger/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
