"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  
];
const lightingProducts2 = [
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
  
];
const lightingProducts3 = [
  {
    name: "Flare Concealed Light",
    description: "Built for outdoor applications",
    category: "Outdoor Lighting",
    image: "/product/Flare1.webp",
    href: "/categories/outdoor-light",
  },

  {
    name: "Glare Concealed Light",
    description: "Powerful illumination",
    category: "Flood Lighting",
    image: "/product/GLare1.webp",
    href: "/categories/flood-light",
  },
  {
    name: "Square Lights",
    description: "Minimal & contemporary",
    category: "Square Lighting",
    image: "/product/1x1Pannel1.webp",
    href: "/categories/square-lights",
  },
  {
    name: "Cylinder Light",
    description: "Clean & modern interiors",
    category: "Outdoor Lights",
    image: "/product/CylinderLight1.webp",
    href: "/categories/concealed-lights",
  },
  {
    name: "Spike Light",
    description: "High performance lighting",
    category: "Outdoor Lights",
    image: "/product/SpikeLight1.webp",
    href: "/categories/cob-lights",
  },
  
];

export default function Product() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="products" className="relative overflow-hidden w-full max-w--7xl bg-[#f6f7f4] py-6 sm:py-12">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#85a30f]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#85a30f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* ================= HEADER ================= */}
          <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[#85a30f]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#85a30f]">
                  Explore Our Products
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl lg:text-[42px]">
                Our LED Lighting <span className="text-[#85a30f]">Range</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-5 md:leading-6 text-gray-600 sm:text-base">
                Wide range of LED lighting solutions for residential,
                commercial, industrial and architectural spaces.
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                className="lighting-prev flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-[#85a30f] hover:bg-[#85a30f] hover:text-white"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="lighting-next flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-[#85a30f] hover:bg-[#85a30f] hover:text-white"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ================= SWIPER ================= */}
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
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
            }}
            className="!overflow-visible"
          >
            {lightingProducts.map((product, index) => (
              <SwiperSlide key={index} className="h-auto mt-3">
                <div
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="group block h-full"
                >
                  <article className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#85a30f]/40 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-[210px] overflow-hidden bg-[#f1f2ef]">
                      {/* Number */}
                      <div className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-gray-500 shadow-sm backdrop-blur">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                        className="object-cover  transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-3">
                      <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#85a30f]">
                        {product.category}
                      </span>

                      <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[#85a30f]">
                        {product.name}
                      </h3>

                      <div className="mt-auto pt-0 md:pt-5">
                        <div className="flex-col items-center justify-center gap-3 border-t border-gray-100 pt-4">
                          {/* Get Quote Button */}
                          <button className=" flex items-center justify-center gap-1 rounded-xl bg-[#85a30f] w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#718b0d] hover:shadow-lg hover:shadow-[#85a30f]/20">
                            Get Quote
                          </button>

                          {/* WhatsApp Button */}
                          <a
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            href="https://wa.link/jav0i1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex  items-center justify-center gap-1 rounded-full border border-[#25D366] bg-[#25D366]/5 px-4 py-2.5 text-sm font-semibold text-[#1f9d4d] transition-all mt-2 duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/20"
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

                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".lighting-prev",
              nextEl: ".lighting-next",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
            }}
            className="!overflow-visible"
          >
            {lightingProducts3.map((product, index) => (
              <SwiperSlide key={index} className="h-auto mt-3">
                <div
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="group block h-full"
                >
                  <article className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#85a30f]/40 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-[210px] overflow-hidden bg-[#f1f2ef]">
                      {/* Number */}
                      <div className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-gray-500 shadow-sm backdrop-blur">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                        className="object-cover  transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-3">
                      <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#85a30f]">
                        {product.category}
                      </span>

                      <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[#85a30f]">
                        {product.name}
                      </h3>

                      <div className="mt-auto pt-0 md:pt-5">
                        <div className="flex-col items-center justify-center gap-3 border-t border-gray-100 pt-4">
                          {/* Get Quote Button */}
                          <button className=" flex items-center justify-center gap-1 rounded-xl bg-[#85a30f] w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#718b0d] hover:shadow-lg hover:shadow-[#85a30f]/20">
                            Get Quote
                          </button>

                          {/* WhatsApp Button */}
                          <a
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            href="https://wa.link/jav0i1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex  items-center justify-center gap-1 rounded-full border border-[#25D366] bg-[#25D366]/5 px-4 py-2.5 text-sm font-semibold text-[#1f9d4d] transition-all mt-2 duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/20"
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

                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".lighting-prev",
              nextEl: ".lighting-next",
            }}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
            }}
            className="!overflow-visible"
          >
            {lightingProducts2.map((product, index) => (
              <SwiperSlide key={index} className="h-auto mt-3">
                <div
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="group block h-full"
                >
                  <article className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#85a30f]/40 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-[210px] overflow-hidden bg-[#f1f2ef]">
                      {/* Number */}
                      <div className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-gray-500 shadow-sm backdrop-blur">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                        className="object-cover  transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-3">
                      <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#85a30f]">
                        {product.category}
                      </span>

                      <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[#85a30f]">
                        {product.name}
                      </h3>

                      <div className="mt-auto pt-0 md:pt-5">
                        <div className="flex-col items-center justify-center gap-3 border-t border-gray-100 pt-4">
                          {/* Get Quote Button */}
                          <button className=" flex items-center justify-center gap-1 rounded-xl bg-[#85a30f] w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#718b0d] hover:shadow-lg hover:shadow-[#85a30f]/20">
                            Get Quote
                          </button>

                          {/* WhatsApp Button */}
                          <a
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                             href="https://wa.link/jav0i1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex  items-center justify-center gap-1 rounded-full border border-[#25D366] bg-[#25D366]/5 px-4 py-2.5 text-sm font-semibold text-[#1f9d4d] transition-all mt-2 duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/20"
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

                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
        </div>
      </section>

      {open && <PopupForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
