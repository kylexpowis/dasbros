"use client";

import { useRef } from "react";
import VFXCarousel from "../components/vfxCarousel"; // Import VFXCarousel component

export default function VFXCard() {
  const vfxCard = useRef(null);

  return (
    <div
      ref={vfxCard}
      className="h-screen flex flex-col items-center justify-center bg-gray-600"
    >
      <h2 className="text-3xl font-bold mb-4">VFX</h2>
      <VFXCarousel />
    </div>
  );
}
