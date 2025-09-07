// import { productsMock } from "@/db/products";

import { getPopularServiceCategories_data } from "@/data/mocks";
import { ServiceCategory } from "./api";

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
