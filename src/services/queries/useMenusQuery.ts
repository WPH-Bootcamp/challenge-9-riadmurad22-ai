import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import { MenuItem } from "@/types"; // Pastikan Anda mendefinisikan interface MenuItem

export const useMenusQuery = () => {
  return useQuery<MenuItem[]>({
    queryKey: ["menus"],
    queryFn: async () => {
      const { data } = await api.get("/menu"); // Sesuaikan endpoint swagger
      return data.data; // Biasanya data dibungkus dalam properti .data
    },
  });
};
