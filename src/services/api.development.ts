import {
  getBeauticanInfo_data,
  getBeauticiansByBusinessId_data,
  getKpis_data,
  getMapLocations_data,
  getPopularServiceCategories_data,
  getServiceInfo_data,
  getServicesByBusinessId_data,
  getTopBusinesses_data,
} from "@/data/mocks";
import {
  BeauticianByBusiness,
  BeauticianInfo,
  Kpis,
  Location,
  ServiceCategory,
  ServiceInfo,
  TopBusinesses,
} from "./api";

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

export async function getKpis(): Promise<Kpis> {
  return new Promise((resolve) => setTimeout(() => resolve(getKpis_data), 300));
}

export async function getTopBusinesses(): Promise<TopBusinesses[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getTopBusinesses_data), 300)
  );
}

export async function getBeauticianInfo(): Promise<BeauticianInfo> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getBeauticanInfo_data), 300)
  );
}

export async function getBusinessInfo(): Promise<BeauticianInfo> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getBeauticanInfo_data), 300)
  );
}

export async function getServiceInfo(): Promise<ServiceInfo> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getServiceInfo_data), 300)
  );
}

export async function getServicesByBusinessId(): Promise<ServiceInfo[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getServicesByBusinessId_data), 300)
  );
}

export async function getBeauticiansByBusinessId(): Promise<
  BeauticianByBusiness[]
> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getBeauticiansByBusinessId_data), 300)
  );
}
