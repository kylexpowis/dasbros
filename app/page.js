"use client";

import { useRef } from "react";
import VideographyCard from "../components/VideographyCard";
import AnimationsCard from "../components/AnimationsCard";
import VFXCard from "@/components/vfxCard";
import { DasBrosLogo } from "../public/DasBrosLogo.png";

export default function Home() {
  const videographyCard = useRef(null);
  const animationsCard = useRef(null);
  const vfxCard = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white">
      {/* Logo and Navigation */}
      <div className="h-screen flex flex-col items-center justify-center">
        <img src="/DasBrosLogo.png" alt="Logo" className="w-32 h-auto mb-6" />
        <div className="text-4xl font-bold mb-6">Das Bros</div>
        <div className="space-y-4">
          <button
            onClick={() => scrollToSection(videographyCard)}
            className="text-lg font-medium hover:underline"
          >
            Videography
          </button>
          <button
            onClick={() => scrollToSection(animationsCard)}
            className="text-lg font-medium hover:underline"
          >
            Animations
          </button>
          <button
            onClick={() => scrollToSection(vfxCard)}
            className="text-lg font-medium hover:underline"
          >
            VFX
          </button>
        </div>
      </div>

      {/* Sections */}
      <div ref={videographyCard}>
        <VideographyCard />
      </div>
      <div ref={animationsCard}>
        <AnimationsCard />
      </div>
      <div ref={vfxCard}>
        <VFXCard />
      </div>
    </div>
  );
}
