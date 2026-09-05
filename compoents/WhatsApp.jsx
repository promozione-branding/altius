"use client";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
export default function WhatsApp() {
  const phoneNumber = "919650167709";
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">
      {" "}
      {/* Call Button */}{" "}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call us"
        className=" flex h-14 w-14 items-center justify-center rounded-full border border-white bg-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 "
      >
        {" "}
        <FaPhoneAlt size={26} />{" "}
      </a>{" "}
      {/* WhatsApp Button */}{" "}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello, I would like to know more about your products.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className=" flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 "
      >
        {" "}
        <FaWhatsapp size={35} />{" "}
      </a>{" "}
    </div>
  );
}
