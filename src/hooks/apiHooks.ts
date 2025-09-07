"use client"

import { useQuery } from "@tanstack/react-query";
import services from "@/services"; // dynamically resolved dev/prod

export function usePopularServiceCategories(limit?: number) {
  return useQuery({
    queryKey: ["popular-service-categories", limit],
    queryFn: () => services.getServiceCategories(limit),
  });
}
