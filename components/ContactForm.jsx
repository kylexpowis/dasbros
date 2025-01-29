// components/ContactForm.jsx
export default function ContactForm() {
    return (
      <section id="contact" className="bg-black text-white p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <form action="#" method="POST" className="max-w-lg mx-auto">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-gray-800 text-white rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-gray-800 text-white rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 bg-gray-800 text-white rounded"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-darkGreen text-white font-bold rounded mt-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    );
  }
  