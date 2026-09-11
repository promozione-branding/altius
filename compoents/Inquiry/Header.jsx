"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import PopupForm from "../PopupForm";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
        <div className="mx-auto flex h-[86px] w-full max-w-[1600px] items-center px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* ================= LOGO ================= */}
          <div className="flex shrink-0 items-center">
            <Link href="#home" className="block">
              <img
                src="/logo.jpeg"
                alt="altius Lighting"
                className="h-[80px] md:h-[88px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="hidden md:flex absolute left-1/2  -translate-x-1/2 items-center gap-8 lg:gap-10 xl:gap-12">
            {/* Home */}
            <Link
              href="#home"
              className="group relative whitespace-nowrap text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#85a30f] lg:text-[17px]"
            >
              Home
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#85a30f] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Products */}
            <div className="relative group">
              <Link
                href="#products"
                className="flex items-center gap-1 whitespace-nowrap text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#85a30f] lg:text-[17px]"
              >
                Products
              </Link>

              {/* Optional Dropdown */}
            </div>

            {/* About */}
            <Link
              href="#about"
              className="group relative whitespace-nowrap text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#85a30f] lg:text-[17px]"
            >
              About
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#85a30f] transition-all duration-300 group-hover:w-full" />
            </Link>

           

            {/* Contact */}
            <Link
              href="#contact"
              className="group relative whitespace-nowrap text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#85a30f] lg:text-[17px]"
            >
              Contact
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#85a30f] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* ================= GET QUOTE ================= */}
          <div className="ml-auto flex justify-center items-center gap-3 shrink-0">
           

            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-2 border border-[#85a30f] px-4 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#85a30f] hover:text-black sm:px-5 sm:py-3 lg:px-6 lg:text-[15px]"
            >
              <span>Get a Quote</span>

              <FileText
                size={19}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:rotate-6"
              />
            </button>

             <Link className="flex border border-white p-2.5  gap-2" href="https://wa.link/jav0i1">
            <span className="text-white hidden md:block">WhatsApp</span> <FaWhatsapp size={22} className="text-white " />

            </Link>
          </div>
        </div>
      </header>
      {open && <PopupForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
