import "./globals.css";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";

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
        <Navbar />
        <div className="black-background"></div>{" "}
        {/* Background behind particles */}
        <ParticlesBackground /> {/* Particles effect */}
        {children} {/* Main content */}
        <ContactForm />
      </body>
    </html>
  );
}
