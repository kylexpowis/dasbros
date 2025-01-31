"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import VideographyCard from "../components/videographyCard";
import AnimationsCard from "../components/AnimationsCard";
import VFXCard from "@/components/vfxCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import NavBar from "@/components/NavBar";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  const videographyCard = useRef(null);
  const animationsCard = useRef(null);
  const vfxCard = useRef(null);
  const contactForm = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white max-w-screen overflow-hidden">
      <ParticlesBackground />
      <NavBar
        videographyCard={videographyCard}
        animationsCard={animationsCard}
        vfxCard={vfxCard}
        contactForm={contactForm}
      />
      {/* Logo and Navigation */}
      <div className="h-screen flex flex-col items-center justify-center">
        {/* Das Bros Logo */}
        <motion.img
          src="/DasBrosLogo.png"
          alt="Logo"
          className="w-32 h-auto mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Das Bros Text */}
        <motion.div
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{ fontFamily: "Poppins", fontWeight: "200" }}
        >
          Das Bros
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <button
            onClick={() => scrollToSection(videographyCard)}
            className="text-lg font-medium hover:text-yellow-400"
          >
            Videography
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <button
            onClick={() => scrollToSection(animationsCard)}
            className="text-lg font-medium hover:text-yellow-400"
          >
            Animations
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <button
            onClick={() => scrollToSection(vfxCard)}
            className="text-lg font-medium hover:text-yellow-400"
          >
            VFX
          </button>
        </motion.div>
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
      <div>
        <ContactCard />
      </div>
    </div>
  );
}
