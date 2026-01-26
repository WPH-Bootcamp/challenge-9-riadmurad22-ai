import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export const useMenus = (category?: string, search?: string) => {
  return useQuery({
    queryKey: ["menus", category, search],
    queryFn: async () => {
      const response = await api.get("/api/menus", {
        params: {
          category: category === "All" ? undefined : category,
          search: search || undefined,
        },
      });

      return response.data?.data || response.data || [];
    },
    retry: false,
  });
};
