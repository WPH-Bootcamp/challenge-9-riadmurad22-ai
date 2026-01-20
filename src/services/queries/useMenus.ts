import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const response = await api.get("/menu"); // Sesuaikan endpoint swagger
      return response.data;
    },
  });
};
