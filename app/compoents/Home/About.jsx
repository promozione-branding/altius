"use client";

import React from "react";
import { FiArrowRight, FiCheck, FiZap, FiLayers } from "react-icons/fi";

export default function About() {
  return (
    <>
        <section className="relative overflow-hidden bg-[#f7f6f2] py-6  md:py-16">

      {/* ================= BACKGROUND ACCENT ================= */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#c9a44c]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#c9a44c]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* ================= TOP LABEL ================= */}
        {/* <div className="mb-12 flex items-center gap-4 lg:mb-16">

          <span className="h-px w-10 bg-[#b28b32]" /> */}

        {/* <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#a17d2b]
              sm:text-xs
            "
          >
            Professional Lighting Solutions
          </span> */}
        {/* 
          <span className="hidden h-px w-20 bg-neutral-300 sm:block" />

        </div> */}

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* =================================================
              IMAGE SIDE
          ================================================= */}
          <div className="relative">
            {/* Decorative square */}
            <div
              className="
                absolute
                -left-4
                -top-4
                h-24
                w-24
                border
                border-[#c9a44c]/40
                sm:-left-6
                sm:-top-6
                sm:h-32
                sm:w-32
              "
            />

            {/* Image wrapper */}
            <div
              className="
                group
                relative
                z-10
                aspect-[4/3]
                overflow-hidden
                bg-neutral-200
                sm:aspect-[5/4]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90"
                alt="Modern commercial space with professional LED lighting"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  group-hover:scale-105
                "
              />

              {/* Image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-black/50
                  via-transparent
                  to-transparent
                "
              />

              {/* Golden light glow */}
              <div
                className="
                  absolute
                  bottom-[-80px]
                  left-1/2
                  h-52
                  w-52
                  -translate-x-1/2
                  rounded-full
                  bg-[#e3bb58]/30
                  blur-3xl
                "
              />

              {/* Image label */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  items-center
                  gap-3
                  sm:bottom-7
                  sm:left-7
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <FiZap size={17} className="text-[#e6c66d]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/60">
                    Engineered
                  </p>

                  <p className="text-sm font-medium text-white">
                    For Performance
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE BADGE
            ================================================= */}
            <div
              className="
                absolute
                -bottom-8
                right-3
                z-20
                w-[180px]
                border
                border-[#d4b35e]/40
                bg-[#171717]
                p-5
                shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                sm:right-8
                sm:w-[210px]
                sm:p-6
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#d8b95f]
                "
              >
                Lighting Excellence
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span
                  className="
                    text-4xl
                    font-semibold
                    leading-none
                    tracking-tight
                    text-white
                  "
                >
                  100%
                </span>

                <span className="mb-1 text-xs text-white/50">Focused</span>
              </div>

              <div className="mt-4 h-px bg-white/10" />

              <p className="mt-3 text-[11px] leading-5 text-white/50">
                Designed around efficiency, performance and modern architectural
                aesthetics.
              </p>
            </div>
          </div>

          {/* =================================================
              CONTENT SIDE
          ================================================= */}
          <div className="relative">
            {/* Small eyebrow */}
            <p
              className="
                mb-5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#a17d2b]
              "
            >
              About ELSTRONG
            </p>

            {/* Main heading */}
            <h2
              className="
                max-w-[650px]
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.04em]
                text-[#171717]
                sm:text-5xl
                lg:text-6xl
                xl:text-[70px]
              "
            >
              Industrial lighting
              <br />
              <span className="text-[#b28b32]">built to perform.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[570px]
                text-sm
                leading-7
                text-neutral-500
                sm:text-base
                sm:leading-8
              "
            >
              Transform commercial and industrial environments with advanced LED
              lighting solutions engineered for efficiency, reliability and
              exceptional illumination. From warehouses and offices to retail
              spaces, we create lighting systems designed around the way your
              space works.
            </p>

            {/* =================================================
                FEATURE LIST
            ================================================= */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#b28b32]/10
                    text-[#a17d2b]
                  "
                >
                  <FiCheck size={15} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Energy Efficient
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    High-performance LED systems with optimized energy
                    consumption.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#b28b32]/10
                    text-[#a17d2b]
                  "
                >
                  <FiLayers size={15} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Tailored Solutions
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Lighting designed around your space and application
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                STATS
            ================================================= */}
            <div
              className="
                mt-10
                grid
                max-w-[600px]
                grid-cols-3
                border-y
                border-neutral-200
                py-6
              "
            >
              <div className="border-r border-neutral-200">
                <p
                  className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-neutral-900
                  sm:text-3xl
                "
                >
                  24/7
                </p>

                <p
                  className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-neutral-400
                  sm:text-[10px]
                "
                >
                  Reliability
                </p>
              </div>

              <div className="border-r border-neutral-200 pl-4 sm:pl-6">
                <p
                  className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-neutral-900
                  sm:text-3xl
                "
                >
                  LED
                </p>

                <p
                  className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-neutral-400
                  sm:text-[10px]
                "
                >
                  Technology
                </p>
              </div>

              <div className="pl-4 sm:pl-6">
                <p
                  className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-neutral-900
                  sm:text-3xl
                "
                >
                  Pro
                </p>

                <p
                  className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-neutral-400
                  sm:text-[10px]
                "
                >
                  Solutions
                </p>
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================= */}
            <div className="mt-8">
              <a
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  bg-[#171717]
                  px-7
                  py-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#b28b32]
                "
              >
                Discover Services
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <FiArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-[#faf9f6] py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        <div className="
          group
          relative
          h-[420px]
          overflow-hidden
          sm:h-[500px]
          lg:h-[580px]
        ">

          {/* ================= IMAGE ================= */}
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90"
            alt="Modern kitchen with elegant pendant lighting"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              group-hover:scale-105
            "
          />

          {/* ================= OVERLAY ================= */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/70
            via-black/30
            to-black/5
          " />

          {/* ================= GOLD LIGHT GLOW ================= */}
          <div className="
            pointer-events-none
            absolute
            -left-20
            top-1/2
            h-72
            w-72
            -translate-y-1/2
            rounded-full
            bg-[#dcb452]/20
            blur-3xl
          " />

          {/* ================= CONTENT ================= */}
          <div className="
            relative
            z-10
            flex
            h-full
            max-w-xl
            flex-col
            justify-center
            px-7
            sm:px-12
            lg:px-16
          ">

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#d8b65d]" />

              <span className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#e5c975]
                sm:text-xs
              ">
                Illuminate Your Space
              </span>

            </div>


            {/* Heading */}
            <h2 className="
              max-w-[550px]
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            ">
              Light up the heart
              <br />
              <span className="text-[#e5c56b]">
                of your home.
              </span>
            </h2>


            {/* Description */}
            <p className="
              mt-6
              max-w-[480px]
              text-sm
              leading-7
              text-white/70
              sm:text-base
            ">
              Discover statement lighting designed to transform
              kitchens, dining spaces and modern interiors with
              warmth, character and effortless elegance.
            </p>


            {/* CTA */}
            <a
              href="/collections"
              className="
                group/btn
                mt-8
                flex
                w-fit
                items-center
                gap-4
                border
                border-white/40
                bg-white/10
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#d8b65d]
                hover:bg-[#b28b32]
              "
            >
              Explore Lighting

              <span className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                transition-transform
                duration-300
                group-hover/btn:translate-x-1
              ">
                <FiArrowRight size={14} />
              </span>
            </a>

          </div>


          {/* ================= BOTTOM RIGHT LABEL ================= */}
          <div className="
            absolute
            bottom-6
            right-6
            hidden
            items-center
            gap-3
            sm:flex
            lg:bottom-8
            lg:right-10
          ">

            <span className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/50
            ">
              Premium LED Collection
            </span>

            <span className="
              h-px
              w-10
              bg-[#d8b65d]
            " />

          </div>

        </div>

      </div>
    </section>

    </>

  );
}
