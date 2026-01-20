import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { MenuItem } from "@/types";

export const useMenus = (category?: string, search?: string) => {
  return useQuery({
    queryKey: ["menus", category, search],
    queryFn: async () => {
      const response = await api.get<MenuItem[]>("/menu", {
        params: { category, search },
      });
      return response.data;
    },
  });
};
export const useMenuDetails = (id: string) => {
  return useQuery({
    queryKey: ["menu", id],