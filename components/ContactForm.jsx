import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_2moehrs", // Service ID
        "template_ta4i3bm", // Template ID
        formRef.current,
        "4JELoE4tdH_wgwTUU" // Public Key
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="bg-black text-white p-8">
      <div className="flex items-center justify-center h-full">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-[#111111] text-white rounded text-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-[#111111] text-white rounded text-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 bg-[#111111] text-white rounded text-lg"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-yellow-400 text-black font-bold rounded mt-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {message && (
                <p
                  className={`mt-2 ${
                    message.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
