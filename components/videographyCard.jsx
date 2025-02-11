"use client";

import { useRef } from "react";
import VideographyCarousel from "./VideographyCarousel";

export default function VideoCard() {
  const videographyCard = useRef(null);

  return (
    <div
      ref={videographyCard}
      className="h-screen flex flex-col items-center justify-center px-6 sm:px-12"
    >
      <h2 className="text-2xl sm:text-2xl font-bold text-center mb-6">
        Videography
      </h2>
      <VideographyCarousel />
    </div>
  );
}
