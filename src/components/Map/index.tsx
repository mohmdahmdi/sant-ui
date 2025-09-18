"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
  loading: () => (
    <p className="h-96 flex items-center justify-center">Loading map...</p>
  ),
});

export default MapClient;
