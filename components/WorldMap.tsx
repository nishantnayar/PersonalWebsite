"use client";

import { useState, useRef, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  useMapContext,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const ACCENT = "#2d5a3d";

type CityInfo = {
  name: string;
  coordinates: [number, number];
  anchor: "start" | "end";
  dx: number;
  dy: number;
  period: string;
  role: string;
};

// Edit role/period text to match your experience in each city
const CITIES: CityInfo[] = [
  {
    name: "Bangalore",
    coordinates: [77.59, 12.97],
    anchor: "start",
    dx: 8,
    dy: 2,
    period: "Career start",
    role: "Investment banking — built the data analytics foundation that shaped everything after.",
  },
  {
    name: "Tokyo",
    coordinates: [139.69, 35.69],
    anchor: "start",
    dx: 8,
    dy: 2,
    period: "Asia-Pacific",
    role: "Financial services · Asia-Pacific operations — navigating cross-border data and compliance.",
  },
  {
    name: "London",
    coordinates: [-0.13, 51.51],
    anchor: "end",
    dx: -8,
    dy: 2,
    period: "Europe",
    role: "Global banking · European markets — translating complex data problems across jurisdictions.",
  },
  {
    name: "New York",
    coordinates: [-74.01, 40.71],
    anchor: "end",
    dx: -8,
    dy: 14,
    period: "North America",
    role: "Asset management · financial technology — driving program delivery at scale.",
  },
  {
    name: "Boston",
    coordinates: [-71.06, 42.36],
    anchor: "start",
    dx: 8,
    dy: -6,
    period: "North America",
    role: "Commercial banking — technical program management and data governance.",
  },
  {
    name: "Chicago",
    coordinates: [-87.63, 41.88],
    anchor: "end",
    dx: -8,
    dy: 14,
    period: "Current base",
    role: "Lead Solutions Analyst & TPM — XAI, GenAI, and building things at the intersection of finance and tech.",
  },
];

// Career trajectory: each pair is [fromIndex, toIndex]
const ARCS: [number, number][] = [
  [0, 1], // Bangalore → Tokyo
  [1, 2], // Tokyo → London
  [2, 3], // London → New York
  [3, 4], // New York → Boston
  [4, 3], // Boston → New York
  [3, 5], // New York → Chicago
];

function CurvedArcs() {
  const { projection } = useMapContext();

  return (
    <g>
      {ARCS.map(([fi, ti], idx) => {
        const from = projection(CITIES[fi].coordinates);
        const to = projection(CITIES[ti].coordinates);
        if (!from || !to) return null;

        const dist = Math.hypot(to[0] - from[0], to[1] - from[1]);
        const mx = (from[0] + to[0]) / 2;
        const my = (from[1] + to[1]) / 2 - dist * 0.3;

        return (
          <path
            key={idx}
            d={`M ${from[0]} ${from[1]} Q ${mx} ${my} ${to[0]} ${to[1]}`}
            fill="none"
            stroke={ACCENT}
            strokeWidth={1}
            strokeOpacity={0.4}
            strokeDasharray="5 3"
          />
        );
      })}
    </g>
  );
}

export default function WorldMap() {
  const [hovered, setHovered] = useState<CityInfo | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const enter = useCallback((city: CityInfo) => setHovered(city), []);
  const leave = useCallback(() => setHovered(null), []);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded overflow-hidden bg-paper-warm border border-ink/10"
      style={{ aspectRatio: "16 / 9" }}
    >
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 240, center: [20, 25] }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#d8d4cb"
                stroke="#ede9e1"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        <CurvedArcs />

        {CITIES.map((city, i) => (
          <Marker
            key={i}
            coordinates={city.coordinates}
            onMouseEnter={() => enter(city)}
            onMouseLeave={leave}
          >
            {/* Outer glow ring */}
            <circle
              r={hovered?.name === city.name ? 12 : 8}
              fill={ACCENT}
              fillOpacity={hovered?.name === city.name ? 0.18 : 0.1}
              style={{ transition: "r 0.15s, fill-opacity 0.15s" }}
            />
            {/* Dot */}
            <circle
              r={hovered?.name === city.name ? 5 : 3.5}
              fill={ACCENT}
              stroke="#fff"
              strokeWidth={1.5}
              style={{ cursor: "pointer", transition: "r 0.15s" }}
            />
            {/* City label */}
            <text
              textAnchor={city.anchor}
              dx={city.dx}
              dy={city.dy}
              style={{
                fontSize: "9px",
                fontWeight: 600,
                fill: hovered?.name === city.name ? ACCENT : "#4b5563",
                fontFamily: "inherit",
                letterSpacing: "0.02em",
                pointerEvents: "none",
                transition: "fill 0.15s",
              }}
            >
              {city.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Hover info card — bottom-left corner */}
      <div
        className="absolute bottom-4 left-4 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.15s, transform 0.15s",
        }}
      >
        {hovered && (
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg px-4 py-3 min-w-[220px] max-w-[260px]">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="text-sm font-bold text-gray-900 leading-tight">
                {hovered.name}
              </p>
            </div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-blue-500 mb-1.5">
              {hovered.period}
            </p>
            <p className="text-xs text-gray-600 leading-snug">{hovered.role}</p>
          </div>
        )}
      </div>

      {/* Static hint when nothing is hovered */}
      <div
        className="absolute bottom-4 right-4 pointer-events-none"
        style={{
          opacity: hovered ? 0 : 0.6,
          transition: "opacity 0.15s",
        }}
      >
        <p className="text-[10px] text-gray-400 italic">Hover a city</p>
      </div>
    </div>
  );
}
