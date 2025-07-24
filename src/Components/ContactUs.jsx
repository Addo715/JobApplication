import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-4 pt-6 pb-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Whether you have a question about features,
            pricing, or anything else — our team is ready to answer all your questions.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li><strong>Email:</strong> contact@jobbridge.com</li>
            <li><strong>Phone:</strong> +233 50 123 4567</li>
            <li><strong>Location:</strong> Accra, Ghana</li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;