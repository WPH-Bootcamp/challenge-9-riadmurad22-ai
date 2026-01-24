import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import type { MenuItem } from "../../types";

export const useMenus = (category?: string, search?: string) => {
  return useQuery({
    queryKey: ["menus", category, search],
    queryFn: async () => {
      // Path harus persis sesuai link yang Anda berikan
      const response = await api.get("/api/menus", {
        params: {
          category: category === "All" ? undefined : category,
          search: search || undefined,
        },
      });

      // Biasanya struktur response sukses adalah: { data: [...] }
      // Kita ambil data dari response.data.data
      const result = response.data?.data || response.data;

      return (Array.isArray(result) ? result : []) as MenuItem[];
    },
  });
};
