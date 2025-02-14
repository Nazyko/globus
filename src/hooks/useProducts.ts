import { useQuery } from "@tanstack/react-query";
import { getWithPagination } from "../service/ProductsService";

export const useProducts = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ['products', offset],
    queryFn: () => getWithPagination(limit, offset),
  });
};