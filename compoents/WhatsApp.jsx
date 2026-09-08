"use client";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function WhatsApp() {
  const phoneNumber = "919650167709";

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">
      {/* Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call us"
        className="
          flex h-12 px-3 md:h-14 items-center gap-2 md:gap-3 rounded-2xl
          bg-blue-500 md:pl-4 md:pr-5 text-white
          shadow-[0_8px_24px_-6px_rgba(31,41,55,0.55)]
          transition-transform duration-300 ease-out
          hover:-translate-y-0.5
          active:scale-95
        "
      >
        <FaPhoneAlt size={21} className="shrink-0" />
        <span className="whitespace-nowrap text-sm md:text-base font-medium tracking-tight">
          Call us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          "Hello, I would like to know more about your products."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex h-12 px-3 md:h-14 items-center  gap-2 md:gap-3  rounded-2xl
          bg-green-500 md:pl-4 md:pr-5 text-white
          shadow-[0_8px_24px_-6px_rgba(11,93,59,0.6)]
          transition-transform duration-300 ease-out
          hover:-translate-y-0.5
          active:scale-95
        "
      >
        <FaWhatsapp size={25} className="shrink-0" />
        <span className="whitespace-nowrap text-sm md:text-base  font-medium tracking-tight">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}