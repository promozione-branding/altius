"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Mobilefooter() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] block px-3 pb-[max(10px,env(safe-area-inset-bottom))] sm:hidden">
      {/* Floating Footer */}
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-[#11150e]/95 p-2 shadow-[0_-8px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        {/* Call */}
        <a
          href="tel:+919XXXXXXXXX"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.06] py-2.5 text-white transition-all active:scale-95"
        >
          <Phone size={18} strokeWidth={2.2} />

          <span className="text-[10px] font-semibold">Call</span>
        </a>

        {/* Get Quote */}
        <Link
          href="/enquiry"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-[#85a30f] py-2.5 text-white shadow-lg shadow-[#85a30f]/20 transition-all active:scale-95"
        >
          <FileText size={18} strokeWidth={2.2} />

          <span className="text-[10px] font-bold">Get Quote</span>
        </Link>

        {/* WhatsApp */}
        <a
           href="https://wa.link/jav0i1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 py-2.5 text-green-500 transition-all active:scale-95"
        >
          <FaWhatsapp size={25} />

          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
