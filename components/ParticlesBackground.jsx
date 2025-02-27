"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load lightweight particles engine
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Keep behind content
        particles: {
          number: {
            value: 80, // Number of fireflies
            density: { enable: true, value_area: 800 },
          },
          shape: {
            type: "circle", // Glowing dots instead of triangles
          },
          size: {
            value: 3, // Smaller fireflies
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1, // Slow floating movement
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          opacity: {
            value: 0.6, // Soft glow
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.3,
              sync: false,
            },
          },
          color: {
            value: "#ffcc00", // Warm golden firefly color
          },
          glow: {
            enable: true,
            color: "#ffcc00",
            radius: 10,
            intensity: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // Slight movement when hovered
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
