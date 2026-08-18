import React from "react";

export default function Hero() {
  return (
    <>
      <section className="relative flex min-h-[600px] h-[707px] w-full items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 h-full w-full">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/banner.jpg')",
            }}
            aria-label="Luxury minimalist living room"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <span className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white">
           Discover the Collection
          </span>

          <h1 className="mb-8 max-w-4xl text-4xl  font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
           Elevate your interiors with <br /> lighting made to inspire.
          </h1>

          <button className="bg-black px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-black">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}
