"use client";

import { useRef } from "react";
import VideographyCarousel from "./VideographyCarousel";

export default function VideoCard() {
  const videographyCard = useRef(null);

  return (
    <div
      ref={videographyCard}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Videography</h2>
      <VideographyCarousel />
    </div>
  );
}
