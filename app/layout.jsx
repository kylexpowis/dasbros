// app/layout.jsx

import "./globals.css";
import ParticlesBackground from "../components/ParticlesBackground";

export const metadata = {
  title: "Das Bros Portfolio",
  description: "Videography, Animations, VFX Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="black-background"></div>{" "}
        {/* Background behind particles */}
        <ParticlesBackground /> {/* Particles effect */}
        {children} {/* Main content */}
      </body>
    </html>
  );
}
