"use client";

import { useRef } from "react";
import AnimationsCarousel from "../components/AnimationsCarousel"; // Import AnimationsCarousel component

export default function AnimationsCard() {
  const animationsCard = useRef(null);

  return (
    <div
      ref={animationsCard}
      className="h-screen flex flex-col items-center justify-center bg-gray-700"
    >
      <h2 className="text-3xl font-bold mb-4">Animations</h2>
      <AnimationsCarousel />
    </div>
  );
}
