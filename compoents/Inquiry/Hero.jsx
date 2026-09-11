"use client";

import React, { useState } from "react";
import { Phone, ArrowRight, Zap, Award, ShieldCheck } from "lucide-react";
import PopupForm from "../PopupForm";

export default function Hero() {
  const [open, setOpen] = useState(false);


  return (
    <>
    <section id="home" className="relative w-full overflow-hidden bg-black">
      {/* ================= HERO ================= */}
      <div className="relative min-h-[420px] w-full sm:h-[580px]">
        {/* BACKGROUND IMAGE */}
        <img
          src="/newbanner.webp"
          alt="LED Lighting Solutions"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-[1400px] items-center px-5 py-12 sm:min-h-[580px] sm:px-8  lg:px-12">
          <div className="w-full max-w-[600px]">
            {/* SMALL TOP TEXT */}
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b6d52a] sm:text-xs">
              Lighting Excellence
            </p>

            {/* MAIN HEADING */}
            <h1 className="max-w-[560px] text-3xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-5xl ">
              LED Lighting Manufacturer & 
              <br />
              Supplier for Commercial
              <br />
              <span className="text-[#b6d52a]">Industrial Needs.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 h-[30px] max-w-[470px] text-sm leading-6 text-white/90 sm:text-base">
             
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* GET QUOTE */}
              <button
                 onClick={()=>{
              setOpen(true)
            }}
               
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-[3px] bg-[#85a30f] px-6 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9dbb16] sm:h-12"
              >
                Get a Quote
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* CALL NOW */}
              <a
                href="tel:+919650167709"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[3px] border border-white/60 bg-black/30 px-6 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black sm:h-12"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

          {open && <PopupForm isOpen={open} onClose={() => setOpen(false)} />}

    </>
  );
}
