"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <nav className="fixed w-full top-0 left-0 bg-black text-white p-4 z-50">
        <div className="flex justify-between items-center">
          {/* Logo or title */}
          <div className="text-1xl font-bold">DasBros.co.uk</div>
          {/* Hamburger Icon */}
          <button onClick={toggleDrawer}>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-4 z-40 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: drawerOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ marginTop: "64px" }} // Ensure the drawer starts below the navbar (adjust based on navbar height)
      >
        <div className="space-y-6 flex flex-col items-start">
          {/* Videography Link */}
          <button
            className="text-xl py-2 px-4 w-full text-left"
            onClick={() => scrollToSection(videographyCard)} // Scroll to Videography
          >
            Videography
          </button>

          {/* Animations Link */}
          <button
            className="text-xl py-2 px-4 w-full text-left"
            onClick={() => scrollToSection(animationsCard)} // Scroll to Animations
          >
            Animations
          </button>

          {/* VFX Link */}
          <button
            className="text-xl py-2 px-4 w-full text-left"
            onClick={() => scrollToSection(vfxCard)} // Scroll to VFX
          >
            VFX
          </button>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl py-2 px-4 w-full text-left"
          >
            Instagram
          </a>

          {/* Contact Link inside the Drawer */}
          <a
            href="#contact"
            className="text-xl py-2 px-4 w-full text-left"
            onClick={() => scrollToSection(contactForm)} // Scroll to Contact Form
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
}
