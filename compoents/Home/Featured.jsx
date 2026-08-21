"use client";

import React, { useLayoutEffect, useRef } from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Led Light",
    price: "$60.00",
    image: "/light3.jpeg",
  },
  {
    name: "LED Track Light",
    price: "$40.00",
    oldPrice: "$50.00",
    image: "/LEDTrackLight.webp",
  },
  {
    name: "Outdoor Light",
    price: "$70.00",
    oldPrice: "$80.00",
    image: "/OutdoorLight.webp",
  },
  {
    name: "Square Panel Light",
    price: "$40.00",
    oldPrice: "$50.00",
    image: "/SquarePanelLight.webp",
  },
  {
    name: "Flood Light",
    price: "$80.00",
    oldPrice: "$90.00",
    image: "/FloodLight.webp",
  },
  {
    name: "Downlight Led",
    price: "$60.00",
    image: "/COBLEDDownlight.webp",
  },
];

export default function Featured() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // INITIAL STATES
      // ==========================================

      gsap.set("#featured-label", {
        x: -100,
        opacity: 0,
      });

      gsap.set("#featured-heading", {
        x: -120,
        opacity: 0,
      });

      gsap.set("#featured-description", {
        x: -100,
        opacity: 0,
      });

      gsap.set("#featured-cta", {
        x: -80,
        opacity: 0,
      });

      // ==========================================
      // SCROLL TRIGGER TIMELINE
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

      // ==========================================
      // LABEL
      // ==========================================

      tl.to(
        "#featured-label",
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
        },
        0
      );

      // ==========================================
      // HEADING
      // ==========================================

      tl.to(
        "#featured-heading",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        0.15
      );

      // ==========================================
      // DESCRIPTION
      // ==========================================

      tl.to(
        "#featured-description",
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        0.4
      );

      // ==========================================
      // CTA
      // ==========================================

      tl.to(
        "#featured-cta",
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        0.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-x-clip
        bg-[#faf9f6]
        py-6
        md:py-16
      "
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* =================================================
            TOP LABEL
        ================================================= */}

        <div className="mb-10 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#85a30f]" />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#85a30f]
            "
          >
            Handpicked Lighting
          </span>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            relative
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[0.75fr_1.35fr_1fr]
            lg:items-start
            lg:gap-8
            xl:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              h-fit
              lg:sticky
              lg:top-28
              lg:self-start
            "
          >
            {/* Decorative Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                bottom-0
                h-64
                w-64
                rounded-full
                bg-[#d9a441]/10
                blur-3xl
              "
            />

            <div className="relative z-10">

              {/* Small Heading */}

              <p
                id="featured-label"
                className="
                  mb-4
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                "
              >
                Illuminate your space
              </p>

              {/* Main Heading */}

              <h2
                id="featured-heading"
                className="
                  max-w-[500px]
                  text-5xl
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-neutral-900
                  sm:text-6xl
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                Featured
                <br />
                <span className="text-[#85a30f]">
                  Products
                </span>
              </h2>

              {/* Description */}

              <p
                id="featured-description"
                className="
                  mt-7
                  max-w-[390px]
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                "
              >
                Discover lighting pieces designed to bring warmth,
                character, and modern elegance to every corner of
                your space.
              </p>

              {/* CTA */}

              <a
                id="featured-cta"
                href="/"
                className="
                  group
                  mt-8
                  inline-flex
                  w-fit
                  items-center
                  gap-4
                  border
                  border-black
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#ccee46]
                  hover:text-black
                "
              >
                Explore Products

                <FiArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>

          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div>
            {/* Products Heading */}

            <div
              className="
                mb-5
                flex
                items-end
                justify-between
                border-b
                border-neutral-200
                pb-4
              "
            >
              <div>
                <p
                  className="
                    mb-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#85a30f]
                  "
                >
                  Latest collection
                </p>

                <h3
                  className="
                    text-xl
                    font-medium
                    uppercase
                    tracking-wide
                    text-neutral-900
                    sm:text-2xl
                  "
                >
                  New Arrivals
                </h3>
              </div>

              {/* Desktop View All */}

              <a
                href="/shop"
                className="
                  hidden
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-neutral-500
                  transition-colors
                  hover:text-[#b28b32]
                  sm:flex
                "
              >
                View All

                <FiArrowRight size={15} />
              </a>
            </div>

            {/* =================================================
                PRODUCT GRID
            ================================================= */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:gap-5
              "
            >
              {products.map((product, index) => (
                <div
                  key={`${product.name}-${index}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    border
                    border-neutral-200
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#85a30f]
                    hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* Product Image */}

                  <div
                    className="
                      relative
                      aspect-square
                      overflow-hidden
                      bg-[#f5f4f1]
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        mix-blend-multiply
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Product Details */}

                  <div className="p-3 sm:p-4">

                    {/* Product Name */}

                    <h4
                      className="
                        truncate
                        text-sm
                        font-semibold
                        text-neutral-900
                        sm:text-base
                      "
                    >
                      {product.name}
                    </h4>

                    {/* Rating */}

                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-1
                        text-[#85a30f]
                      "
                    >
                      <FiStar size={11} fill="currentColor" />
                      <FiStar size={11} fill="currentColor" />
                      <FiStar size={11} fill="currentColor" />
                      <FiStar size={11} fill="currentColor" />
                      <FiStar size={11} fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              LIFESTYLE IMAGE
          ================================================= */}

          <div
            className="
              relative
              h-full
              overflow-hidden
              rounded-2xl
            "
          >
            <img
              src="/featured.png"
              alt="Modern interior lighting"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                hover:scale-105
              "
            />

            {/* Dark Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
              "
            />

            {/* Image Content */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-6
                sm:p-8
              "
            >
              {/* Light Indicator */}

              <div
                className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-[#85a30f]
                    shadow-[0_0_20px_#e6bb55]
                  "
                />
              </div>

              {/* Small Text */}

              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#85a30f]
                "
              >
                Light your way
              </p>

              {/* Image Heading */}

              <h3
                className="
                  mt-2
                  max-w-[400px]
                  text-3xl
                  font-medium
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                Lighting that
                <br />
                transforms spaces.
              </h3>

              {/* Collection Link */}

              <a
                href="/collections"
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Discover Collection

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/40
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-black
                  "
                >
                  <FiArrowRight size={15} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            MOBILE VIEW ALL
        ================================================= */}

        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="/shop"
            className="
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-[#a17d2b]
            "
          >
            View All Products

            <FiArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}