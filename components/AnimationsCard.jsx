"use client";

import { useRef } from "react";
import AnimationsCarousel from "./AnimationsCarousel"; // Import AnimationsCarousel component

export default function AnimationsCard() {
  const animationsCard = useRef(null);

  return (
    <div
      ref={animationsCard}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold mb-4">Animations</h2>
      <AnimationsCarousel />
    </div>
  );
}
