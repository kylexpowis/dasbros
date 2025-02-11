"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar({
  videographyCard,
  animationsCard,
  vfxCard,
  contactForm,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    // Close the drawer after scrolling to the section
    setDrawerOpen(false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white p-8 z-50">
        <div className="flex justify-between items-center">
          {/* Logo or title */}
          <Link href="/" className="hover:text-yellow-400">
            DasBros.co.uk
          </Link>
          {/* Hamburger Icon */}
          <button onClick={toggleDrawer} className="block z-50">
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-4 transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: drawerOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ marginTop: "64px", maxWidth: "80vw" }} // Ensures it's never too wide for small screens
      >
        <div className="space-y-6 flex flex-col items-start w-full">
          {/* Videography Link */}
          <button
            className="text-xl py-2 px-4 w-full text-left hover:text-yellow-400"
            onClick={() => scrollToSection(videographyCard)} // Scroll to Videography
          >
            Videography
          </button>

          {/* Animations Link */}
          <button
            className="text-xl py-2 px-4 w-full text-left hover:text-yellow-400"
            onClick={() => scrollToSection(animationsCard)} // Scroll to Animations
          >
            Animations
          </button>

          {/* VFX Link */}
          <button
            className="text-xl py-2 px-4 w-full text-left hover:text-yellow-400"
            onClick={() => scrollToSection(vfxCard)} // Scroll to VFX
          >
            Graphic Posters
          </button>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/officialdasbros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl py-2 px-4 w-full text-left hover:text-yellow-400"
          >
            Instagram
          </a>

          {/* Contact Link inside the Drawer */}
          <a
            href="#contact"
            className="text-xl py-2 px-4 w-full text-left hover:text-yellow-400"
            onClick={() => scrollToSection(contactForm)} // Scroll to Contact Form
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
}
