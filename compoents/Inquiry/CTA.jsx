"use client"
import { Phone, MessageCircle } from "lucide-react";
import PopupForm from "../PopupForm";
import { useState } from "react";

export default function CTA() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <section className="w-full bg-[#07120d] border-y border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 sm:px-6 md:flex-row md:gap-8 lg:px-8">
        
        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
            Looking for the <span className="text-yellow-400">Right LED Lighting Solution?</span>
          </h2>

          <p className="mt-1 text-xs text-gray-300 sm:text-sm">
            Talk to our team and get expert guidance today.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
          {/* Primary */}
          <button
            onClick={()=>{
              setOpen(true)
            }}
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-yellow-400 px-5 py-2 text-xs font-bold text-black shadow-sm transition-all duration-200 hover:bg-yellow-300 hover:shadow-yellow-400/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#07120d] sm:text-sm"
          >
            Get a Quote
          </button>

          {/* Call */}
          <a
            href="tel:+919650167709"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-yellow-400/60 hover:bg-white/10 sm:text-sm"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.link/jav0i1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-yellow-400/60 hover:bg-white/10 sm:text-sm"
          >
              <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M20.52 3.449A11.815 11.815 0 0012.05.01C5.495.01.16 5.344.157 11.9c0 2.096.547 4.142 1.588 5.946L.057 23.95l6.244-1.638a11.878 11.878 0 005.744 1.463h.005c6.554 0 11.89-5.334 11.893-11.89a11.82 11.82 0 00-3.423-8.436zM12.05 21.785h-.004a9.874 9.874 0 01-5.031-1.378l-.361-.214-3.705.972.989-3.613-.235-.371a9.852 9.852 0 01-1.51-5.28c.003-5.45 4.438-9.884 9.89-9.884a9.82 9.82 0 017.003 2.902 9.82 9.82 0 012.898 7.006c-.002 5.45-4.437 9.884-9.934 9.884z" />
                          </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

          {open && <PopupForm isOpen={open} onClose={() => setOpen(false)} />}


    </>
  );

}