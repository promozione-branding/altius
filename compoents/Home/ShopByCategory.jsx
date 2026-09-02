"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import { categories } from "@/Data/Data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ShopByCategory() {
  const sectionRef = useRef(null);

  const headerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const contentRef = useRef([]);
  const numberRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const images = imagesRef.current;
      const content = contentRef.current;
      const numbers = numberRef.current;

      /* =========================================
         INITIAL HEADER STATE
      ========================================= */

      gsap.set(labelRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 35,
      });

      /* =========================================
         INITIAL CARD STATE
      ========================================= */

      gsap.set(cards, {
        opacity: 0,
        y: 80,
        scale: 0.94,
      });

      gsap.set(images, {
        scale: 1.12,
      });

      gsap.set(content, {
        opacity: 0,
        y: 35,
      });

      gsap.set(numbers, {
        opacity: 0,
        x: -20,
      });

      /* =========================================
         MAIN TIMELINE
      ========================================= */

      const tl = gsap.timeline({
        paused: true,
      });

      /* =========================================
         HEADER ANIMATION
      ========================================= */

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      })

        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )

        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

      /* =========================================
         CARDS
      ========================================= */

      tl.to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.25"
      )

        /* IMAGE REVEAL */

        .to(
          images,
          {
            scale: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.85"
        )

        /* CARD CONTENT */

        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=1"
        )

        /* NUMBERS */

        .to(
          numbers,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6"
        );

      /* =========================================
         SCROLL TRIGGER
      ========================================= */

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,

        onEnter: () => {
          tl.play();
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        font-serif
        md:py-14
      "
      data-purpose="shop-by-category"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-lime-200/30
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-green-100/20
          blur-[120px]
        "
      />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}

        <div
          ref={headerRef}
          className="
            mb-10
            flex
            flex-col
            items-center
            text-center
            md:mb-12
          "
        >
          {/* =====================================
              SMALL LABEL
          ===================================== */}

          <div
            ref={labelRef}
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-lime-500" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-gray-500
              "
            >
              Explore Our Lighting
            </span>

            <span className="h-px w-8 bg-lime-500" />
          </div>

          {/* =====================================
              HEADING
          ===================================== */}

          <div className="overflow-hidden">
            <h2
              ref={headingRef}
              className="
                serif-text
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              Shop by Category
            </h2>
          </div>

          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p
            ref={descriptionRef}
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-500
              md:text-base
              md:leading-7
            "
          >
            Discover lighting solutions designed to transform every space with
            modern technology, refined design, and brilliant illumination.
          </p>
        </div>

        {/* =========================================
            CATEGORY GRID
        ========================================= */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-5
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {/* ONLY FIRST 8 CATEGORIES */}

          {categories?.slice(0, 8).map((category, index) => (
            <Link
              href={`/categories/${category.slug}`}
              key={category.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                group
                relative
                w-full
                max-w-[360px]
                aspect-[4/4.4]
                cursor-pointer
                overflow-hidden
                rounded-sm
                bg-gray-100
                will-change-transform
              "
            >
              {/* =====================================
                  MAIN IMAGE
              ===================================== */}

              <div
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                className="
                  absolute
                  inset-0
                  z-0
                  scale-100
                  bg-cover
                  bg-center
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  will-change-transform
                  group-hover:scale-105
                "
                style={{
                  backgroundImage: `url("${category.image}")`,
                }}
              />

              {/* =====================================
                  HOVER IMAGE
              ===================================== */}

              <div
                className="
                  absolute
                  inset-0
                  z-[1]
                  scale-105
                  bg-cover
                  bg-center
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-100
                  group-hover:opacity-100
                "
                style={{
                  backgroundImage: `url("${category.hoverImage}")`,
                }}
              />

              {/* =====================================
                  DARK OVERLAY
              ===================================== */}

              <div
                className="
                  absolute
                  inset-0
                  z-[2]
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-black/5
                  transition-all
                  duration-700
                  group-hover:from-black/85
                  group-hover:via-black/30
                "
              />

              {/* =====================================
                  GREEN GLOW
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-24
                  z-[3]
                  h-64
                  w-64
                  rounded-full
                  bg-lime-400/30
                  opacity-0
                  blur-[80px]
                  transition-all
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* =====================================
                  NUMBER
              ===================================== */}

              <div
                ref={(el) => {
                  numberRef.current[index] = el;
                }}
                className="
                  absolute
                  left-5
                  top-5
                  z-20
                  text-[10px]
                  font-bold
                  tracking-[0.25em]
                  text-white/80
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* =====================================
                  ARROW
              ===================================== */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:rotate-45
                  group-hover:border-lime-400
                  group-hover:bg-lime-400
                  group-hover:text-black
                "
              >
                <FiArrowUpRight size={18} />
              </div>

              {/* =====================================
                  CONTENT
              ===================================== */}

              <div
                ref={(el) => {
                  contentRef.current[index] = el;
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  p-5
                  md:p-6
                "
              >
                {/* Accent */}

                <div
                  className="
                    mb-2
                    h-[2px]
                    w-8
                    bg-lime-400
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                {/* Title */}

                <h3
                  className="
                    serif-text
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:-translate-y-1
                    md:text-3xl
                  "
                >
                  {category.name}
                </h3>

                {/* Explore */}

                <div
                  className="
                    mt-3
                    flex
                    max-h-0
                    items-center
                    gap-2
                    overflow-hidden
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/80
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:max-h-10
                    group-hover:opacity-100
                  "
                >
                  <span>Explore Collection</span>

                  <FiArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>

              {/* =====================================
                  SHINE
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-[100%]
                  top-0
                  z-10
                  h-full
                  w-[60%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-all
                  duration-1000
                  group-hover:left-[130%]
                "
              />

              {/* =====================================
                  OUTER BORDER
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-30
                  border
                  border-white/0
                  transition-all
                  duration-500
                  group-hover:border-lime-400/70
                "
              />

              {/* =====================================
                  INNER BORDER
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  z-30
                  border
                  border-white/0
                  transition-all
                  duration-700
                  group-hover:border-white/20
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}