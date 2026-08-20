"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);

  const lampRef = useRef(null);
  const outerGlowRef = useRef(null);
  const innerGlowRef = useRef(null);

  // LEFT CONTENT REFS
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =================================
         INITIAL STATE
      ================================= */

      gsap.set(
        [headingRef.current, paragraphRef.current, buttonsRef.current],
        {
          opacity: 0,
          y: 50,
        }
      );

      /* =================================
         SCROLL TRIGGER TIMELINE
      ================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // Animation starts when section reaches
          // around 80% of viewport
          start: "top 80%",

          // Only play once
          toggleActions: "play none none none",

          // markers: true, // uncomment while testing
        },

        defaults: {
          ease: "power3.out",
        },
      });

      /* HEADING */

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      });

      /* PARAGRAPH */

      tl.to(
        paragraphRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.45"
      );

      /* BUTTONS */

      tl.to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.35"
      );

      /* =================================
         LAMP GLOW
         STARTS WHEN SECTION ENTERS
      ================================= */

      const glowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      /* MAIN LAMP */

      glowTimeline.to(lampRef.current, {
        filter: `
          drop-shadow(0 0 8px rgba(133,163,15,0.9))
          drop-shadow(0 0 20px rgba(217,237,101,0.9))
          drop-shadow(0 0 40px rgba(217,237,101,0.75))
          drop-shadow(0 0 70px rgba(217,237,101,0.55))
        `,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* OUTER GLOW */

      glowTimeline.to(
        outerGlowRef.current,
        {
          scale: 1.18,
          opacity: 0.75,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        "<"
      );

      /* INNER GLOW */

      glowTimeline.to(
        innerGlowRef.current,
        {
          scale: 1.25,
          opacity: 0.9,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-gray-200">
      <section
        ref={sectionRef}
        className="relative mx-auto max-w-7xl bg-gray-200 px-4 py-6 sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* ================= CONTENT ================= */}

          <div>
            {/* HEADING */}

            <h2
              ref={headingRef}
              className="mb-6 font-sans text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Elevate Your Space with{" "}
              <span className="text-[#85a30f]">
                Custom Lighting
              </span>
            </h2>

            {/* PARAGRAPH */}

            <p
              ref={paragraphRef}
              className="max-w-xl text-base leading-7 text-black sm:text-lg"
            >
              Transform your home or commercial project with our professional
              lighting consultation services. Our experts help you select the
              perfect fixtures to create the ideal atmosphere for any
              environment.
            </p>
          </div>

          {/* ================= LAMP ================= */}

          <div className="absolute right-[400px] top-1/2 -translate-y-1/2">

            {/* HUGE SOFT AMBIENT GLOW */}

            <div
              ref={outerGlowRef}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#dfff65]/40
                blur-[85px]
                opacity-60
              "
            />

            {/* BRIGHT CENTER GLOW */}

            <div
              ref={innerGlowRef}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[43%]
                h-[150px]
                w-[150px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#efffa0]/60
                blur-[45px]
                opacity-70
              "
            />

            {/* EXTRA LIGHT SOURCE */}

            <div
              className="
                pointer-events-none
                absolute
                left-[45%]
                top-[25%]
                h-[80px]
                w-[80px]
                -translate-x-1/2
                rounded-full
                bg-white/70
                blur-[30px]
              "
            />

            {/* SVG LAMP */}

            <svg
              ref={lampRef}
              xmlns="http://www.w3.org/2000/svg"
              width={179}
              height={179}
              viewBox="-5.5 0 63.991 63.991"
              className="relative z-10"
              style={{
                filter: `
                  drop-shadow(0 0 8px rgba(133,163,15,0.9))
                  drop-shadow(0 0 20px rgba(217,237,101,0.8))
                  drop-shadow(0 0 40px rgba(217,237,101,0.6))
                `,
              }}
            >
              <g
                stroke="#333"
                strokeWidth={2}
                data-name="Group 67"
                transform="translate(-604 -599.009)"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m633 661-21.341-38.414 19.918-19.918"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m640.39 607.407-7.99 7.993-7.4-11.088 4.3-4.3Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M656 612.615 637.615 631l-10.607-19.092 9.9-9.9Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M643 662h-28l4-6h20Z"
                />

                <path
                  fill="#85a30f"
                  strokeMiterlimit={10}
                  d="M654 662h-50"
                />

                <circle
                  cx={2.708}
                  cy={2.708}
                  r={2.708}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(610.167 620.417)"
                />
              </g>
            </svg>

            {/* LIGHT RAYS */}

            <div
              className="
                pointer-events-none
                absolute
                left-[47%]
                top-[40%]
                z-0
                h-[230px]
                w-[230px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#dfff65]/10
                blur-[50px]
              "
            />
          </div>

          {/* ================= BUTTONS ================= */}

          <div
            ref={buttonsRef}
            className="flex flex-col gap-4 sm:flex-row md:justify-end"
          >
            <button
              className="
                h-12
                bg-black
                px-8
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                transition-colors
                hover:bg-[#85a30f]
              "
            >
              Get Quote
            </button>

            <a
              href="tel:+919999999999"
              className="
                flex
                h-12
                items-center
                justify-center
                border
                border-black
                px-8
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-black
                transition-colors
                hover:bg-gray-100
              "
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}