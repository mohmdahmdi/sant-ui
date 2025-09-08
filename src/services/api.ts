import instance from "@/lib/AxiosConfig";

export type credential = {
  full_name: string;
  email?: string;
  phone?: string;
  password: string;
  gender?: string;
  birth_date?: string;
  profile_picture?: string;
  bio?: string;
};

export async function register(credential: credential) {
  const { data }: { data: { user: credential; access_token: string } } =
    await instance.post("/auth/register", credential);

  return data;
}

export type LoginInfo = {
  phone?: string;
  email?: string;
  password: string;
};

export async function login(credential: LoginInfo) {
  const { data }: { data: { access_token: string } } = await instance.post(
    "/auth/register",
    credential
  );

  return data;
}

export type ServiceCategory = {
  id: string;
  name: string;
  total_services: string;
};

export async function getServiceCategories(
  limit?: number
): Promise<ServiceCategory[]> {
  const { data } = await instance.get(
    `/services/most-popular-categories/${limit}`
  );
  return data;
}
