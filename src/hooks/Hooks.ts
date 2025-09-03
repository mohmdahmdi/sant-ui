import { useQuery } from "@tanstack/react-query";
import services from "@/services"; // dynamically resolved dev/prod

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => services.getProducts(),
  });
}
