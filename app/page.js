"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import VideographyCard from "../components/videographyCard";
import AnimationsCard from "../components/AnimationsCard";
import VFXCard from "@/components/vfxCard";

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
        <motion.img
          src="/DasBrosLogo.png"
          alt="Logo"
          className="w-32 h-auto mb-6"
          initial={{ opacity: 0, y: -50 }} // Start off-screen above
          animate={{ opacity: 1, y: 0 }} // Fade in and move down
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        />
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
