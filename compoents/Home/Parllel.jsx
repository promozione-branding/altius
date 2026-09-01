import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Parllel() {
  return (
    <>
      <section className="relative w-full bg-[#faf9f6]">
        <div
          className="
            relative
            min-h-[650px]
            bg-fixed
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1772112334844-2eed0111e690?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          {/* ================= OVERLAY ================= */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/75
              via-black/35
              to-black/10
            "
          />

          {/* ================= GOLD GLOW ================= */}

          <div
            className="
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
            "
          />

          {/* ================= CONTENT ================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[650px]
              items-center
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-[1500px]
                px-7
                right-0
                sm:px-12
                relative
                lg:px-16
              "
            >
              <div className="max-w-[620px] relative z-20 border border-[#85a30f] bg-black/60 py-10 px-10">
                {/* Label */}
                <div className="hidden md:block absolute right-[20px] z-10 -bottom-26 -translate-y-1/2">
                  {/* HUGE SOFT AMBIENT GLOW */}

                  {/* BRIGHT CENTER GLOW */}

                  {/* EXTRA LIGHT SOURCE */}

                  {/* SVG LAMP */}

                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={129}
  height={179}
  viewBox="-5.5 0 63.991 63.991"
  className="relative z-10"
  style={{
    transform: "scaleX(-1)",
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
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#85a30f]" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#85a30f]
                      sm:text-xs
                    "
                  >
                    Illuminate Your Space
                  </span>
                </div>

                {/* Heading */}

                <h2
                  className="
                    max-w-[550px]
                    text-4xl
                    font-semibold
                    font-serif
                    leading-[1.02]
                    tracking-[-0.04em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Light up the heart
                  <br />
                  <span className="text-[#85a30f]">of your home.</span>
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-6
                    z-50
                    max-w-[480px]
                    text-sm
                    leading-7
                    text-white
                    sm:text-base
                  "
                >
                  Discover statement lighting designed to transform kitchens,
                  dining spaces and modern interiors with warmth, character and
                  effortless elegance.
                </p>

                {/* CTA */}

                <Link
                  href="/products"
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
                    hover:border-[#85a30f]
                    hover:bg-[#85a30f]
                  "
                >
                  Explore Lighting
                  <span
                    className="
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
                    "
                  >
                    <FiArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM RIGHT LABEL ================= */}

          <div
            className="
              absolute
              bottom-6
              right-6
              z-10
              hidden
              items-center
              gap-3
              sm:flex
              lg:bottom-8
              lg:right-10
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Premium LED Collection
            </span>

            <span className="h-px w-10 bg-[#85a30f]" />
          </div>
        </div>

        {/* ================= EXTRA SCROLL SPACE ================= */}

        {/* <div className=" bg-gray-200 py-3">
          <div className="mx-auto flex h-full max-w-4xl items-center justify-center px-6 text-center">
            <p className="font-serif text-2xl text-black">
              Designed to bring warmth, character and elegance into every space.
            </p>
          </div>
        </div> */}

        
      </section>
    </>
  )
}
