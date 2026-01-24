import axios from "axios";

const api = axios.create({
  // Gunakan domain utama tanpa /api agar tidak tumpang tindih
  baseURL: "https://restaurant-be-400174736012.asia-southeast2.run.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
