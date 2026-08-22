"use client";

import React, { useLayoutEffect, useRef } from "react";
import { FiArrowRight, FiCheck, FiZap, FiLayers } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurvedLoop from "../ui/CurvedLoop";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // INITIAL STATES
      // ==========================================

      gsap.set(".about-eyebrow", {
        y: 25,
        opacity: 0,
      });

      gsap.set(".about-heading", {
        y: 60,
        opacity: 0,
      });

      gsap.set(".about-description", {
        y: 35,
        opacity: 0,
      });

      gsap.set(".about-feature", {
        y: 35,
        opacity: 0,
      });

      gsap.set(".about-stats", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".about-cta", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".about-image", {
        y: 30,
        scale: 1,
        opacity: 0,
      });

      gsap.set(".about-image-overlay", {
        opacity: 0,
      });

      gsap.set(".about-decoration", {
        scale: 0.7,
        opacity: 0,
        rotation: -8,
      });

      gsap.set(".about-badge", {
        y: 50,
        opacity: 0,
      });

      gsap.set(".about-glow-left", {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(".about-glow-right", {
        opacity: 0,
        scale: 0.7,
      });

      // ==========================================
      // MAIN TIMELINE
      // ==========================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Background glow
      tl.to(
        ".about-glow-left",
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        },
        0,
      );

      // Decorative square
      tl.to(
        ".about-decoration",
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        0.1,
      );

      // Image
      tl.to(
        ".about-image",
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        0,
      );

      // Image overlay
      tl.to(
        ".about-image-overlay",
        {
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
        },
        0.35,
      );

      // Badge
      tl.to(
        ".about-badge",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.65,
      );

      // Eyebrow
      tl.to(
        ".about-eyebrow",
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        0.35,
      );

      // Heading
      tl.to(
        ".about-heading",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        0.45,
      );

      // Description
      tl.to(
        ".about-description",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        0.75,
      );

      // Features
      tl.to(
        ".about-feature",
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
        },
        0.9,
      );

      // Stats
      tl.to(
        ".about-stats",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        1.2,
      );

      // CTA
      tl.to(
        ".about-cta",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        1.35,
      );

      // ==========================================
      // SUBTLE FLOATING EFFECTS
      // ==========================================

      gsap.to(".about-glow-left", {
        x: 35,
        y: 25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-glow-right", {
        x: -30,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Badge subtle floating
      gsap.to(".about-badge", {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Image subtle breathing effect
      gsap.to(".about-image-inner", {
        scale: 1.025,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* =========================================================
          FIRST SECTION
      ========================================================= */}

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#f7f6f2] py-6 md:py-13"
      >
        {/* ================= BACKGROUND ACCENT ================= */}

        <div
          className="
            about-glow-left
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
            about-glow-right
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
          {/* ================= MAIN CONTENT ================= */}

          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-14
              lg:grid-cols-[1.05fr_0.95fr]
              md:gap-20
              
            "
          >
            {/* =================================================
                IMAGE SIDE
            ================================================= */}

            <div className="relative">
              {/* Decorative square */}

              <div
                className="
                  about-decoration
                  absolute
                  -left-4
                  -top-4
                  h-24
                  w-24
                  border
                  border-[#85a30f]/40
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
                <div className="about-image-inner h-full w-full">
                  <img
                    src="/ban3.webp"
                    alt="Modern commercial space with professional LED lighting"
                    className="
                      about-image
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-1000
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Image overlay */}

                <div
                  className="
                    about-image-overlay
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
                    bg-[#85a30f]/30
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
                    <FiZap size={17} className="text-[#85a30f]" />
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
                  about-badge
                  absolute
                  -top-15
                  right-3
                  z-20
                  w-[180px]
                  border
                  border-[#85a30f]/40
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
                    text-[#85a30f]
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

                <p className="mt-3 text-[11px] leading-5 text-white">
                  Designed around efficiency, performance and modern
                  architectural aesthetics.
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
                  about-eyebrow
                  mb-5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#85a30f]
                "
              >
                About ELSTRONG
              </p>

              {/* Main heading */}

              <h2
                className="
                  about-heading
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
                <span className="text-[#85a30f]">built to perform.</span>
              </h2>

              {/* Description */}

              <p
                className="
                  about-description
                  mt-7
                  max-w-[570px]
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                  sm:leading-8
                "
              >
                Transform commercial and industrial environments with advanced
                LED lighting solutions engineered for efficiency, reliability
                and exceptional illumination. From warehouses and offices to
                retail spaces, we create lighting systems designed around the
                way your space works.
              </p>

              {/* =================================================
                  FEATURE LIST
              ================================================= */}

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Feature 1 */}

                <div className="about-feature flex items-start gap-3">
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
                      bg-[#85a30f]/10
                      text-[#85a30f]
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

                {/* Feature 2 */}

                <div className="about-feature flex items-start gap-3">
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
                      bg-[#85a30f]/10
                      text-[#85a30f]
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
                  about-stats
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
                      text-black
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
                      text-black
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
                      text-black
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

              <div className="about-cta mt-8">
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
                    hover:bg-[#85a30f]
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

      {/* =========================================================
          SECOND SECTION — KEPT SAME
      ========================================================= */}

    
    </>
  );
}
