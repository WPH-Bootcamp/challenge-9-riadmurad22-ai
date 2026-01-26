import axios from "axios";

const api = axios.create({
  baseURL:
    "https://restaurant-be-400174736012.asia-southeast2.run.app/api-swagger/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// https://restaurant-be-400174736012.asia-southeast2.run.app/api-swagger/
