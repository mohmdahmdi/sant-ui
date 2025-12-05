import instance, { API_URL } from "@/lib/AxiosConfig";
import { headers } from "../lib/AxiosConfig";
import { LocationPopupData } from "@/components/Map/bunsinessMarker";

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
  const res = await fetch(
    API_URL + `/services/most-popular-categories/${limit}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export type Location = {
  id: string;
  name: string;
  city: string;
  district: string;
  address: string;
  distance_m: number;
  latitude: string;
  longitude: string;
};

export async function getMapLocations(
  lat: number,
  lon: number,
  radiusKm: number
): Promise<Location[]> {
  const { data } = await instance.post("/geographics/find-nearby", {
    lat,
    lon,
    radiusKm,
  });
  return data;
}

export async function getFindInBound(
  swLat: number,
  swLng: number,
  neLat: number,
  neLng: number
): Promise<LocationPopupData[]> {
  const { data } = await instance.post("/geographics/in-bounds", {
    swLat,
    swLng,
    neLat,
    neLng,
  });
  return data;
}

export type Kpis = {
  total_customers: string;
  total_beauticians: string;
  total_businesses: string;
  totalActiveAppointments: string;
};
export async function getKpis(): Promise<Kpis> {
  const res = await fetch(API_URL + "/reports/kpis", { cache: "no-store" });
  return res.json();
}

export type TopBusinesses = {
  id: string;
  name: string;
  logo: string;
  cover_image: string;
  website: string;
  is_verified: boolean;
  rating: string;
  city: string;
  address: string;
  district: string;
  total_appointments: number;
};
export async function getTopBusinesses({
  days,
  limit,
}: {
  days?: number;
  limit?: number;
}): Promise<TopBusinesses[]> {
  const res = await fetch(
    API_URL + "/business/top-businesses-by-appointments",
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        days,
        limit,
      }),
      next: { revalidate: 60 * 60 * 24 },
    }
  );
  const data = await res.json();
  return data;
}

export type BeauticianInfo = {
  id: string;
  user_id: string;
  business_id: string;
  bio: string;
  experience_years: number;
  specialties: string[];
  is_freelancer: boolean;
  rating: string;
};
export async function getBeauticianInfo(id: string): Promise<BeauticianInfo> {
  const res = await fetch(API_URL + `/beauticians/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return data;
}

export type BusinessInfo = {
  id: string;
  owner_id: string;
  name: string;
  description: string;
  logo: string;
  cover_image: string;
  location_id: string;
  business_type_id: string;
  phone: string;
  email: string;
  website: string;
  instagram: string;
  whatsapp: string;
  rating: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
};
export async function getBusinessInfo(id: string): Promise<BusinessInfo> {
  const res = await fetch(API_URL + `/business/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return data;
}

export type ServiceInfo = {
  id: string;
  business_id: string;
  category_id: string;
  title: string;
  description: string;
  price: string;
  duration_minutes: number;
  image: string;
  gender_target: string;
  is_active: boolean;
  rating: string;
};

export async function getServiceInfo(id: string): Promise<ServiceInfo> {
  const res = await fetch(API_URL + `/services/${id}`, {
    next: { revalidate: 30 * 60 },
  });
  const data = await res.json();

  return data;
}

export async function getServicesByBusinessId(
  businessId: string
): Promise<ServiceInfo[]> {
  const res = await fetch(
    API_URL + `/services/services-by-business/${businessId}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data;
}

export type BeauticianByBusiness = {
  id: string;
  bio: string;
  experience_years: number;
  rating: string;
  specialties: string[];
  user_id: string;
  profile_picture: string | null;
  full_name: string;
};
export async function getBeauticiansByBusinessId(
  businessId: string
): Promise<BeauticianByBusiness[]> {
  const res = await fetch(API_URL + `/beauticians/by-business/${businessId}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data;
}
