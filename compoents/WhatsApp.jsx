
"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function WhatsApp() {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp/call number

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Hello, I would like to know more about your products."
      )}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">
      {/* WhatsApp Button */}
    

      {/* Call Button */}
      <button
        onClick={handleCall}
        aria-label="Call us"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-blue-500
          border
          border-white
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
          active:scale-95
        "
      >
        <FaPhoneAlt size={26} />
      </button>
        <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl
          active:scale-95
        "
      >
        <FaWhatsapp size={35} />
      </button>
    </div>
  );
}

