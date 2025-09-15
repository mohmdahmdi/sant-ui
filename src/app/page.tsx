"use client";

import { usePopularServiceCategories } from "@/hooks/apiHooks";
import FilterIcon from "../assets/svg/FilterIcon";
import Search from "../stories/Search/Search";
import CategoryItem from "@/components/CategoryItem";
import HeroIcon from "../assets/svg/HeroIcon";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map components with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Import Leaflet CSS (this should be in a global CSS file, but including here for completeness)
import "leaflet/dist/leaflet.css";

export default function Home() {
  const {
    popularCategories,
    isLoadingErrorPopularCategories,
    isErrorPopularCategories,
  } = usePopularServiceCategories(8);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isLoading = false;

  return (
    <main className="container">
      <section className="flex w-full gap-x-6">
        <div className="bg-white shadow-md w-1/4 rounded-2xl p-4 h-[85vh]">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm text-primary-800 font-bold">فیلترها</p>
            <span className="h-px w-full bg-gray-300" />
            <FilterIcon className="" />
          </div>
          <Search placeHolder="جستجو..." value="" onChange={(text) => {}} />
        </div>
        <div className="w-5/12">
          {isLoading ? (
            <></>
          ) : (
            <div className="relative w-full overflow-hidden">
              <div className="flex flex-row-reverse animate-marquee gap-x-8">
                {popularCategories?.map((item, index) => (
                  <CategoryItem
                    key={`first-${index}`}
                    name={item.name}
                    id={item.id}
                  />
                ))}
                {popularCategories?.map((item, index) => (
                  <CategoryItem
                    key={`first-${index}`}
                    name={item.name}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="mt-6 h-[500px] w-full bg-white rounded-2xl shadow-md"></div>
        </div>
        <div className="w-1/3">
          <p className="mr-6 text-[29px] mt-">
            با{" "}
            <span className="text-secondary-800 text-4xl font-extrabold">
              سانتال!
            </span>{" "}
            بهترین ورژن خودتان را به نمایش بگذارید
          </p>
          <HeroIcon className="absolute left-0 top-1/2 -translate-y-1/2" />
        </div>
      </section>

      {/* Map section with conditional rendering */}
      <section className="w-full h-96 mt-8">
        {isClient ? (
          <MapContainer
            center={[35.7219, 51.3347]} // Tehran coordinates
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.7219, 51.3347]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-500">در حال بارگذاری نقشه...</p>
          </div>
        )}
      </section>
    </main>
  );
}
