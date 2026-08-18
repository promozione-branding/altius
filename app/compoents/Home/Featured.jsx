"use client";

import React from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";

const products = [
  {
    name: "Ambient Glow",
    price: "$60.00",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Golden Glow",
    price: "$40.00",
    oldPrice: "$50.00",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Aurora Lamp",
    price: "$70.00",
    oldPrice: "$80.00",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Frosted Fixture",
    price: "$40.00",
    oldPrice: "$50.00",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Beacon Light",
    price: "$80.00",
    oldPrice: "$90.00",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Ambient Glow",
    price: "$60.00",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Featured() {
  return (
    <section
      className="
        relative
        overflow-x-clip
        bg-[#faf9f6]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* =================================================
            TOP LABEL
        ================================================= */}
        <div className="mb-10 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c49a3a]" />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#b28b32]
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
              LEFT CONTENT - STICKY ON DESKTOP
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
            {/* Decorative glow */}
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

              {/* Small heading */}
              <p
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

              {/* Main heading */}
              <h2
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

                <span className="text-[#b28b32]">
                  Products
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-[390px]
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                "
              >
                Discover lighting pieces designed to bring
                warmth, character, and modern elegance to
                every corner of your space.
              </p>

              {/* CTA */}
              <a
                href="/"
                className="
                  group
                  mt-8
                  inline-flex
                  w-fit
                  items-center
                  gap-4
                  border
                  border-[#b28b32]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[#9b7626]
                  transition-all
                  duration-300
                  hover:bg-[#b28b32]
                  hover:text-white
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

            {/* Products heading */}
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
                    text-[#b28b32]
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
                    hover:border-[#d6b665]
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
                        text-[#c49a3a]
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
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90"
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

              {/* Light indicator */}
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
                    bg-[#e6bb55]
                    shadow-[0_0_20px_#e6bb55]
                  "
                />
              </div>

              {/* Small text */}
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#e4c56e]
                "
              >
                Light your way
              </p>

              {/* Image heading */}
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