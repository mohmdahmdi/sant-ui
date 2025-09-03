import {instance} from "@/lib/AxiosConfig";

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const { data } = await instance.get("/products");
  return data;
}

export async function getProduct(id: string): Promise<Product> {
  const { data } = await instance.get(`/products/${id}`);
  return data;
}
