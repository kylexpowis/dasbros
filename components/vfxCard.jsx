"use client";

import { useRef } from "react";
import VFXCarousel from "./vfxCarousel"; // Import VFXCarousel component

export default function VFXCard() {
  const vfxCard = useRef(null);

  return (
    <div
      ref={vfxCard}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl sm:text-2xl font-bold text-center mb-6">VFX</h2>
      <VFXCarousel />
    </div>
  );
}
