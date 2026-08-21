"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Energy Efficient",
    text: "Advanced LED technology delivers powerful illumination while consuming significantly less energy.",
    position: "left",
  },
  {
    number: "02",
    title: "Long Lasting",
    text: "Built for dependable everyday performance with a long operational lifespan and consistent brightness.",
    position: "left",
  },
  {
    number: "03",
    title: "Premium Illumination",
    text: "Designed to provide clean, balanced light that enhances residential, commercial, and architectural spaces.",
    position: "right",
  },
  {
    number: "04",
    title: "Modern Design",
    text: "Minimal, versatile designs blend naturally into contemporary interiors and professional environments.",
    position: "right",
  },
];

export default function LEDFeatures() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapRef = useRef(null);
  const featureRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(imageWrapRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.9,
      });

      gsap.set(imageRef.current, {
        rotation: -4,
        scale: 1.08,
      });

      gsap.set(featureRefs.current, {
        opacity: 0,
        y: 45,
      });

      /* =========================================
         MAIN SCROLL ANIMATION
      ========================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(imageWrapRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      })

        .to(
          featureRefs.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.45",
        )

        .to(
          imageRef.current,
          {
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        );

      /* =========================================
         FLOATING / HANGING IMAGE MOTION
      ========================================= */

      gsap.to(imageRef.current, {
        y: -12,
        rotation: 2,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         FEATURE HOVER
      ========================================= */

      featureRefs.current.forEach((item) => {
        if (!item) return;

        const number = item.querySelector(".feature-number");
        const title = item.querySelector(".feature-title");

        const enter = () => {
          gsap.to(number, {
            x: 8,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(title, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(number, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(title, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);

        item._enter = enter;
        item._leave = leave;
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f6f2] py-6 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Why Choose LED
          </span>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Lighting designed for better spaces.
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
            Experience efficient, reliable and beautifully designed LED lighting
            created to bring exceptional illumination to every space.
          </p>
        </div>

        {/* =========================================
            FEATURE GRID
        ========================================= */}

        <div className="grid items-center gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-[1fr_420px_1fr] lg:gap-x-16">
          {/* =====================================
              LEFT FEATURES
          ===================================== */}

          <div className="order-2 space-y-12 lg:order-1">
            {features
              .filter((feature) => feature.position === "left")
              .map((feature, index) => (
                <Feature
                  key={feature.number}
                  feature={feature}
                  index={index}
                  featureRefs={featureRefs}
                />
              ))}
          </div>

          {/* =====================================
              CENTER IMAGE
          ===================================== */}

          <div className="order-1 flex justify-center lg:order-2">
            <div
              ref={imageWrapRef}
              className="
                relative
                w-full
                max-w-[360px]
                overflow-hidden
                rounded-t-[180px]
                rounded-b-[30px]
                bg-gray-200
                shadow-2xl
              "
            >
              {/* Decorative frame */}
              <div className="pointer-events-none absolute inset-3 z-10 rounded-t-[165px] rounded-b-[22px] border border-[#85a30f]" />

              <img
                ref={imageRef}
                src="/led.webp"
                alt="Premium LED Light"
                className="
                  h-[500px]
                  w-full
                  object-cover
                  will-change-transform
                "
              />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent px-7 pb-7 pt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  LED Collection
                </p>

                <p className="mt-2 font-serif text-2xl text-white">
                  Illuminate beautifully.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT FEATURES
          ===================================== */}

          <div className="order-3 space-y-12">
            {features
              .filter((feature) => feature.position === "right")
              .map((feature, index) => (
                <Feature
                  key={feature.number}
                  feature={feature}
                  index={index + 2}
                  featureRefs={featureRefs}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FEATURE COMPONENT
========================================= */

function Feature({ feature, index, featureRefs }) {
  return (
    <div
      ref={(el) => {
        featureRefs.current[index] = el;
      }}
      className="group cursor-default"
    >
      <div className="flex items-start gap-5">
        {/* NUMBER */}

        <div className="feature-number shrink-0 font-serif text-5xl font-bold leading-none text-gray-300 transition-colors duration-300 group-hover:text-[#85a30f] sm:text-6xl">
          {feature.number}
        </div>

        {/* CONTENT */}

        <div className="border-t border-gray-300 pt-4">
          <h3 className="feature-title font-serif text-2xl font-semibold text-gray-900 sm:text-3xl">
            {feature.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
            {feature.text}
          </p>
        </div>
      </div>
    </div>
  );
}
