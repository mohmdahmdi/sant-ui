// import { productsMock } from "@/db/products";

import {
  getMapLocations_data,
  getPopularServiceCategories_data,
} from "@/data/mocks";
import { Location, ServiceCategory } from "./api";

// // Mock implementation
// export async function getProducts() {
//   // mimic async API call
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(productsMock), 300);
//   });
// }

// export async function getProduct(id: string) {
//   return new Promise((resolve, reject) => {
//     const product = productsMock.find((p) => p.id === id);
//     if (product) setTimeout(() => resolve(product), 300);
//     else reject(new Error("Product not found"));
//   });
// }

export async function getServiceCategories(
  limit: number
): Promise<ServiceCategory[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getPopularServiceCategories_data), 300);
  });
}

export async function getMapLocations(): Promise<Location[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getMapLocations_data), 300);
  });
}

export async function getFindInBound(): Promise<Location[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getMapLocations_data), 300);
  });
}
