import "./globals.css";
import ParticlesBackground from "../components/ParticlesBackground";

export const metadata = {
  title: "Das Bros Portfolio",
  description: "Videography, Animations, VFX Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link to Google Fonts for Poppins Extra Light 200 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="black-background"></div>{" "}
        {/* Background behind particles */}
        <ParticlesBackground /> {/* Particles effect */}
        {children} {/* Main content */}
      </body>
    </html>
  );
}
