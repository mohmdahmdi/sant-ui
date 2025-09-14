"use client";

import {
  useMutation,
} from "@tanstack/react-query";
import services from "@/services";
import { credential } from "@/services/api";
import cookieManager from "@/utils/cookieManager";
import localStorageManager from "@/utils/localStorageManager";
import { queryClient } from "@/lib/QueryClient";
import { useApi } from "./useApi";

export function useRegister(credential: credential) {
  return useMutation({
    mutationFn: () => services.register(credential),
    onSuccess: (data) => {
      if (!cookieManager.isAvailable) {
        localStorageManager.set("authToken", data.access_token);
        return;
      }
      cookieManager.set("authToken", data.access_token);
      queryClient.setQueryData(["user"], data.user);
    },
    onError: () => {},
  });
}

export function useLogin(credential: credential) {
  return useMutation({
    mutationFn: () => services.login(credential),
    onSuccess: (data) => {
      if (!cookieManager.isAvailable) {
        localStorageManager.set("authToken", data.access_token);
        return;
      }
      cookieManager.set("authToken", data.access_token);
    },
    onError: () => {},
  });
}

export function usePopularServiceCategories(limit?: number) {
  return useApi(
    ["popular-service-categories", limit ?? 8],
    () => services.getServiceCategories(limit),
    'popularCategories'
  );
}
