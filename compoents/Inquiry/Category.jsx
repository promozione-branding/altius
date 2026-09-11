"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoIosDocument } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

import PopupForm from "../PopupForm";

const lightingProducts = [
  {
    name: "LED Slim Panel",
    description: "Modern & efficient",
    category: "Slim Panel Lights",
    image: "/slimsquarepanel.webp",
    href: "/categories/led-slim-panel",
  },
  {
    name: "PC Panel Lights",
    description: "For commercial spaces",
    category: "Panel Lights",
    image: "/pcpanel.webp",
    href: "/categories/pc-panel-lights",
  },
  {
    name: "Track Lights",
    description: "Focused lighting for retail & offices",
    category: "Track Lighting",
    image: "/wallLight.webp",
    href: "/categories/led-track-light",
  },
  {
    name: "Concealed Lights",
    description: "Clean & modern interiors",
    category: "Concealed Lighting",
    image: "/category/ledconcel1.webp",
    href: "/categories/concealed-lights",
  },
  {
    name: "COB Lights",
    description: "High performance lighting",
    category: "COB Lighting",
    image: "/coblensmodel.webp",
    href: "/categories/cob-lights",
  },
  {
    name: "Outdoor Lights",
    description: "Built for outdoor applications",
    category: "Outdoor Lighting",
    image: "/product/Klight1.webp",
    href: "/categories/outdoor-light",
  },
  {
    name: "Flood Lights",
    description: "Powerful illumination",
    category: "Flood Lighting",
    image: "/product/flood1.webp",
    href: "/categories/flood-light",
  },
  {
    name: "Square Lights",
    description: "Minimal & contemporary",
    category: "Square Lighting",
    image: "/product/1x1Pannel1.webp",
    href: "/categories/square-lights",
  },
];

export default function Category() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="category" className="relative w-full  overflow-hidden bg-[#f6f7f4] py-6 sm:py-12">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#85a30f]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#85a30f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[#85a30f]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#85a30f]">
                  CATEGORY
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-[#171717] sm:text-4xl lg:text-[42px]">
                Our LED Lighting <span className="text-[#85a30f]">Range</span>
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                className="lighting-prev flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-[#85a30f] hover:bg-[#85a30f] hover:text-white"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                className="lighting-next flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-[#85a30f] hover:bg-[#85a30f] hover:text-white"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".lighting-prev",
              nextEl: ".lighting-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              // Mobile
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              // Tablet
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              // Medium Tablet
              768: {
                slidesPerView: 3,
                spaceBetween: 18,
              },

              // Desktop
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },

              // Large Desktop
              1280: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            className="overflow-hidden max-w-7xl"
          >
            {lightingProducts.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  onClick={() => setOpen(true)}
                  className="group block h-full cursor-pointer"
                >
                  <article className="relative flex h-full  flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#85a30f]/40 hover:shadow-xl sm:min-h-[330px]">
                    {/* Image */}
                    <div className="relative h-[145px] overflow-hidden bg-[#f1f2ef] sm:h-[190px] lg:h-[210px]">
                      {/* Number */}
                      <div className="absolute left-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-gray-500 shadow-sm backdrop-blur sm:left-4 sm:top-4 sm:h-8 sm:w-8 sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex h-[20px] flex-1 flex-col p-2.5 sm:p-4 lg:p-5">
                      <h3 className="text-sm font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[#85a30f] sm:text-base lg:text-lg">
                        {product.category}
                      </h3>

                      {/* Enquiry Button */}
                      <div className=" w-full pt-3 sm:pt-4">
                        <div className="flex w-full items-center justify-center border-t border-gray-100 pt-3 sm:pt-4">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpen(true);
                            }}
                            className="flex w-full items-center justify-center gap-1 rounded-xl bg-[#85a30f] px-1.5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#718b0d] hover:shadow-lg hover:shadow-[#85a30f]/20 sm:px-2 sm:py-3.5 sm:text-sm"
                          >
                            Enquiry Now
                            <IoIosDocument size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation */}
          <div className="mt-5 flex justify-center gap-2 sm:hidden">
            <button
              type="button"
              className="lighting-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all hover:border-[#85a30f] hover:bg-[#85a30f] hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="lighting-next flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all hover:border-[#85a30f] hover:bg-[#85a30f] hover:text-white"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      {open && <PopupForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
