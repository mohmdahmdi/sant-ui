"use client";

import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { BusinessBannerImage } from "@/utils/imageLoader";

export type LocationPopupData = {
  id: string;
  name: string;
  description: string;
  owner_id: string;
  logo: string;
  cover_image: string;
  is_active: boolean;
  is_verified: boolean;
  rating: string;
  location_id: string;
  city: string;
  district: string;
  address: string;
  latitude: number;
  longitude: number;
  lng: string;
  lat: string;
};

export default function BusinessMarker({
  loc,
  icon,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loc: LocationPopupData;
  icon: L.Icon;
}) {
  const map = useMap();

  const handleMarkerClick = () => {
    const position: [number, number] = [
      Number(loc.latitude),
      Number(loc.longitude),
    ];

    map.flyTo(position, map.getZoom(), {
      animate: true,
      duration: 0.8,
    });
  };

  return (
    <Marker
      position={[Number(loc.latitude), Number(loc.longitude)]}
      icon={icon}
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      <Popup
        autoPan={true}
        autoClose={true}
        closeButton={true}
        closeOnClick={true}
      >
        <div className="p-2 text-sm">
          <div>
            {/* <Image alt={loc.name} src={loc.cover_image} width={20} height={20}/> */}
          </div>
          <div className="">
            <BusinessBannerImage
              src={loc.cover_image}
              className="blur-lg"
            />
            <h3 className="font-bold text-lg text-primary-600 rtl">{loc.name}</h3>
            <p className="text-gray-600">{loc.description}</p>
            <Link
              href={"/business/profile/" + loc.id}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
