// app/page.js
"use client";

import { useRef } from "react";

export default function Home() {
  const videographyRef = useRef(null);
  const animationsRef = useRef(null);
  const vfxRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-darkGreen text-white h-screen flex flex-col items-center justify-center space-y-8">
      {/* Logo Will Go here*/}
      <div className="text-4xl font-bold">Das Bros</div>

      {/* Navigation buttons */}
      <div className="space-y-6">
        <button
          onClick={() => scrollToSection(videographyRef)}
          className="text-lg font-medium hover:underline"
        >
          Videography
        </button>
        <button
          onClick={() => scrollToSection(animationsRef)}
          className="text-lg font-medium hover:underline"
        >
          Animations
        </button>
        <button
          onClick={() => scrollToSection(vfxRef)}
          className="text-lg font-medium hover:underline"
        >
          VFX
        </button>
      </div>
    </div>
  );
}
