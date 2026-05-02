"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Page() {
  useEffect(() => {
    const map = L.map("map", {
      crs: L.CRS.Simple,
      minZoom: -1,
    });

    // YOUR IMAGE DIMENSIONS (adjust if needed)
    const width = 1200;
    const height = 1800;

const bounds: L.LatLngBoundsExpression = [[0, 0], [height, width]];

    L.imageOverlay("/yard.png", bounds).addTo(map);
    map.fitBounds(bounds);

    // 🔴 SAMPLE PLANTS (EDIT THESE)
    const plants = [
      {
        name: "Front Tree",
        x: 600,
        y: 1400,
        info: "Main focal tree near walkway"
      },
      {
        name: "Driveway Bed",
        x: 900,
        y: 1200,
        info: "Mixed perennials and shrubs"
      },
      {
        name: "Front Porch Planting",
        x: 500,
        y: 1100,
        info: "Foundation planting"
      }
    ];

    plants.forEach(p => {
      const marker = L.marker([p.y, p.x]).addTo(map);

      marker.bindPopup(`
        <div style="font-size:14px">
          <strong>${p.name}</strong><br/>
          ${p.info}
        </div>
      `);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div id="map" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}
