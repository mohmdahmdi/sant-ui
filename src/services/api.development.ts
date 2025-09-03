// import { productsMock } from "@/db/products";

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