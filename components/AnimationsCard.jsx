"use client";

import { useRef } from "react";
import AnimationsCarousel from "./AnimationsCarousel";

export default function AnimationsCard() {
  const animationsCard = useRef(null);

  return (
    <div
      ref={animationsCard}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl sm:text-2xl font-bold text-center mb-6">
        Animations
      </h2>
      <AnimationsCarousel />
    </div>
  );
}
