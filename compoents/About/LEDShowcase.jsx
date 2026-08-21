"use client";

import React from "react";

const ledImages = [
  {
    image: "/light3.jpeg",
    title: "LED Light",
    category: "Indoor Lighting",
    rotate: "-rotate-3",
  },
  {
    image: "/LEDTrackLight.webp",
    title: "LED Track Light",
    category: "Architectural Lighting",
    rotate: "rotate-2",
  },
  {
    image: "/COBLEDDownlight.webp",
    title: "COB LED Downlight",
    category: "Downlight Series",
    rotate: "-rotate-2",
  },
  {
    image: "/FloodLight.webp",
    title: "LED Flood Light",
    category: "Outdoor Lighting",
    rotate: "rotate-3",
  },
  {
    image: "/SquarePanelLight.webp",
    title: "LED Panel Light",
    category: "Commercial Lighting",
    rotate: "-rotate-3",
  },
];

export default function LEDShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ee] py-20 md:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mx-auto mb-16  text-center md:mb-20">
          <span className="mb-4 block text-base font-semibold uppercase tracking-[0.3em] text-gray-500">
            Our Collection
          </span>

          <h2 className="serif-text text-4xl font-bold tracking-tight text-gray-900  md:text-7xl">
            Light designed to inspire.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base  text-black md:text-lg">
            Explore our collection of modern LED lighting solutions,
            thoughtfully designed to bring efficiency, elegance, and character
            to every space.
          </p>
        </div>

        {/* =========================================
            SCRAPBOOK GALLERY
        ========================================= */}
        <div className="relative mx-auto max-w-6xl">
          {/* Desktop overlapping area */}
          <div className="relative hidden min-h-[700px] md:block">
            {/* Card 1 */}
            <div
              className="
                absolute
                left-[3%]
                top-[8%]
                z-10
                w-[260px]
                -rotate-3
                bg-white
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                hover:z-50
                hover:-translate-y-3
                hover:rotate-0
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={ledImages[0].image}
                  alt={ledImages[0].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="font-serif text-lg font-semibold text-gray-900">
                  {ledImages[0].title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {ledImages[0].category}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
                absolute
                left-[27%]
                top-[28%]
                z-20
                w-[280px]
                rotate-2
                bg-white
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                hover:z-50
                hover:-translate-y-3
                hover:rotate-0
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={ledImages[1].image}
                  alt={ledImages[1].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="font-serif text-lg font-semibold text-gray-900">
                  {ledImages[1].title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {ledImages[1].category}
                </p>
              </div>
            </div>

            {/* Card 3 - Center */}
            <div
              className="
                absolute
                left-[50%]
                top-[2%]
                z-30
                w-[300px]
                -translate-x-1/2
                -rotate-2
                bg-white
                p-4
                shadow-[0_25px_60px_rgba(0,0,0,0.14)]
                transition-all
                duration-500
                hover:z-50
                hover:-translate-y-3
                hover:rotate-0
                hover:shadow-[0_35px_80px_rgba(0,0,0,0.2)]
              "
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={ledImages[2].image}
                  alt={ledImages[2].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="font-serif text-lg font-semibold text-gray-900">
                  {ledImages[2].title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {ledImages[2].category}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="
                absolute
                right-[22%]
                top-[32%]
                z-20
                w-[275px]
                rotate-3
                bg-white
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                hover:z-50
                hover:-translate-y-3
                hover:rotate-0
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={ledImages[3].image}
                  alt={ledImages[3].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="font-serif text-lg font-semibold text-gray-900">
                  {ledImages[3].title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {ledImages[3].category}
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="
                absolute
                bottom-[0]
                right-[2%]
                z-10
                w-[250px]
                -rotate-3
                bg-white
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                hover:z-50
                hover:-translate-y-3
                hover:rotate-0
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={ledImages[4].image}
                  alt={ledImages[4].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="font-serif text-lg font-semibold text-gray-900">
                  {ledImages[4].title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {ledImages[4].category}
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              MOBILE GALLERY
          ========================================= */}
          <div className="grid grid-cols-2 gap-5 md:hidden">
            {ledImages.map((item, index) => (
              <div
                key={item.title}
                className={`
                  bg-white
                  p-3
                  shadow-[0_12px_30px_rgba(0,0,0,0.1)]
                  ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}
                `}
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pt-3">
                  <h3 className="font-serif text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-gray-400">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            BOTTOM TEXT
        ========================================= */}
        <div className="mt-16 text-center md:mt-15">
          <p className="mx-auto max-w-2xl text-sm leading-6 text-black md:text-base">
            From architectural downlights to powerful outdoor flood lights,
            discover LED solutions made for modern spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
