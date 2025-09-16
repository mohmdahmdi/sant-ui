"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLocationsInBound } from "@/hooks/apiHooks";

function MapEventHandler({
  onBoundsChange,
}: {
  onBoundsChange: (bounds: { sw: L.LatLng; ne: L.LatLng }) => void;
}) {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      onBoundsChange({
        sw: bounds.getSouthWest(),
        ne: bounds.getNorthEast(),
      });
    },
    zoomend: () => {
      const bounds = map.getBounds();
      onBoundsChange({
        sw: bounds.getSouthWest(),
        ne: bounds.getNorthEast(),
      });
    },
  });
  return null;
}

export default function Map() {
  const [bounds, setBounds] = useState<{
    sw: L.LatLng;
    ne: L.LatLng;
  } | null>(null);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!bounds) {
      const initialCenter = new L.LatLng(35.7219, 51.3347);
      // `toBounds` already returns LatLngBounds
      const initialBounds = initialCenter.toBounds(5000);
      setBounds({
        sw: initialBounds.getSouthWest(),
        ne: initialBounds.getNorthEast(),
      });
    }
  }, [bounds]);

  const {
    locationsInBound,
    isLoadingLocationsInBound,
    error,
    isFetchingLocationsInBound,
  } = useLocationsInBound({
    swLat: bounds?.sw.lat || 0,
    swLon: bounds?.sw.lng || 0,
    neLat: bounds?.ne.lat || 0,
    neLon: bounds?.ne.lng || 0,
  });

  const handleBoundsChange = (newBounds: { sw: L.LatLng; ne: L.LatLng }) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setBounds(newBounds);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <MapContainer
        center={[35.7219, 51.3347]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapEventHandler onBoundsChange={handleBoundsChange} />

        {locationsInBound?.map((loc) => (
          <Marker
            key={loc.id || `${loc.latitude}-${loc.longitude}`}
            position={[Number(loc.latitude), Number(loc.longitude)]}
          >
            <Popup>{loc.name || "Unnamed Location"}</Popup>
          </Marker>
        ))}

        <Marker position={[35.7219, 51.3347]}>
          <Popup>Initial Center</Popup>
        </Marker>
      </MapContainer>

      {/* Status overlay */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          fontSize: "12px",
          zIndex: 1000,
        }}
      >
        {bounds && (
          <>
            <div>
              SW: {bounds.sw.lat.toFixed(4)}, {bounds.sw.lng.toFixed(4)}
            </div>
            <div>
              NE: {bounds.ne.lat.toFixed(4)}, {bounds.ne.lng.toFixed(4)}
            </div>
          </>
        )}
        <br />
        {isLoadingLocationsInBound || isFetchingLocationsInBound ? (
          <span style={{ color: "#0070f3" }}>📡 Loading...</span>
        ) : error ? (
          <span style={{ color: "#f00" }}>❌ Error</span>
        ) : locationsInBound ? (
          <span style={{ color: "#00a000" }}>
            ✅ {locationsInBound?.length || 0} found
          </span>
        ) : null}
      </div>
    </div>
  );
}
