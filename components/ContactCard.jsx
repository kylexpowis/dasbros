"use client";

import { useRef } from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component

export default function ContactCard() {
  const contactCard = useRef(null);

  return (
    <div
      ref={contactCard}
      className="flex-col items-center justify-center bg-black text-white p-20"
    >
      <ContactForm />
    </div>
  );
}
