"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#181818] py-5 sm:pt-5">
      <div className="mx-auto w-full max-w-full ">
        
        <div className="overflow-hidden rounded-2xl bg-[#181818]">
          
          {/* Heading */}
          <div className="px-2 text-center">
            <h2 className="text-xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Premium LED Lighting Solutions
              <br />
              <span className="text-[#f5f5f5]">
                Direct From Manufacturer
              </span>
            </h2>

            <p className="mt-2 text-xs font-medium text-gray-300 sm:text-sm">
              Architectural, Commercial & Industrial LED Lights.
            </p>

            <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
              Bulk Supply & Best Pricing.
            </p>

           
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-5 aspect-[16/7] w-full max-w-[1100px] overflow-hidden rounded-xl">
            <Image
           src="/aboutnew.webp"
              alt="Premium LED Lighting Solutions"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover object-center"
            />

            {/* Slight overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </div>

        </div>
      </div>
    </section>
  );
}