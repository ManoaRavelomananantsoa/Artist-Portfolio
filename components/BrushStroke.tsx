// components/BrushStroke.tsx
"use client";
import { useEffect, useRef } from "react";

interface BrushStrokeColors {
  primary: string;
  secondary: string;
  detail: string;
}

interface BrushStrokeConfig {
  colors: BrushStrokeColors;
  primaryOpacity: number;
  secondaryOpacity: number;
  detailOpacity: number;
}

const defaultConfig: BrushStrokeConfig = {
  colors: {
    primary: "#fcd34d",
    secondary: "#f59e0b",
    detail: "#ffffff",
  },
  primaryOpacity: 0.25,
  secondaryOpacity: 0.1,
  detailOpacity: 0.04,
};

export default function BrushStroke({ config = defaultConfig }: { config?: BrushStrokeConfig }) {
  const stroke1 = useRef<SVGPathElement>(null);
  const stroke2 = useRef<SVGPathElement>(null);
  const stroke3 = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stroke1.current) stroke1.current.style.strokeDashoffset = "0";
      if (stroke2.current) stroke2.current.style.strokeDashoffset = "0";
      if (stroke3.current) stroke3.current.style.strokeDashoffset = "0";
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-5"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Coup principal — large, doré */}
      <path
        ref={stroke1}
        d="M -100 550 C 200 420, 500 650, 800 480 C 1050 340, 1280 580, 1600 440"
        fill="none"
        stroke={config.colors.primary}
        strokeWidth="120"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: config.primaryOpacity,
          strokeDasharray: 3000,
          strokeDashoffset: 3000,
          transition: "stroke-dashoffset 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
      {/* Coup secondaire — plus fin */}
      <path
        ref={stroke2}
        d="M -80 680 C 300 620, 650 720, 950 640 C 1150 580, 1350 680, 1580 620"
        fill="none"
        stroke={config.colors.secondary}
        strokeWidth="50"
        strokeLinecap="round"
        style={{
          opacity: config.secondaryOpacity,
          strokeDasharray: 2800,
          strokeDashoffset: 2800,
          transition: "stroke-dashoffset 1.1s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
      {/* Coup de détail blanc subtil */}
      <path
        ref={stroke3}
        d="M 50 360 C 350 290, 700 420, 1050 310 C 1280 240, 1430 360, 1560 300"
        fill="none"
        stroke={config.colors.detail}
        strokeWidth="30"
        strokeLinecap="round"
        style={{
          opacity: config.detailOpacity,
          strokeDasharray: 2600,
          strokeDashoffset: 2600,
          transition: "stroke-dashoffset 0.9s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </svg>
  );
}