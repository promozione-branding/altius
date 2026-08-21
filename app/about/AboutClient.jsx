import React from 'react'
import { FiArrowRight, FiClock, FiCompass, FiFeather } from 'react-icons/fi'

export default function AboutClient() {
  return (
    <>
        <section className="mx-auto mt-15 w-full max-w-7xl px-5 py-16 md:px-10 lg:px-16 md:py-24">
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
        
        {/* ================= HEADING ================= */}
        <div className="mb-6 text-center lg:col-span-12 lg:mb-12">
          <h1
            className="
              mx-auto
              mb-6
              max-w-4xl
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-gray-900
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            About the{" "}
            <span className="text-[#85a30f]">
              Art of Elstrong
            </span>
          </h1>

          <p
            className="
              mx-auto
              max-w-2xl
              text-base
              
              text-black
              sm:text-lg
              
            "
          >
            At Elstrong, we believe lighting is more than just function;
            it's the invisible architecture of a space. We craft luminous
            experiences that transform environments and elevate the everyday.
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="
            relative
            h-[55vh]
            w-full
            overflow-hidden
            rounded-sm
            lg:col-span-12
            md:h-[90vh]
          "
        >
          {/* Subtle overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              bg-black/5
            "
          />

          <img
           src="/ban2.webp"
            alt="A minimalist high-end interior illuminated with modern LED lighting"
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-1000
              ease-out
              hover:scale-105
            "
          />
        </div>
      </div>
    </section>
     <section className="w-full bg-gray-100 py-6 md:py-14 ">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-12 lg:gap-x-16">
            
            {/* ================= TEXT ================= */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="space-y-7 lg:pr-10">
                
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#85a30f]">
                    Our Story
                  </p>

                  <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
                    A Heritage of{" "}
                    <span className="text-[#85a30f]">Light</span>
                  </h2>
                </div>

                <p className="text-base leading-8 text-black">
                  Founded on the principles of architectural clarity and
                  uncompromising quality, we emerged from a desire to redefine
                  modern LED lighting. Our journey began with a simple vision:
                  to create lighting solutions that are as beautiful when
                  switched off as they are illuminating when switched on.
                </p>

                <p className="text-base leading-8 text-black">
                  We combine premium materials, advanced LED technology, and
                  thoughtful engineering to create lighting products that
                  deliver exceptional performance, efficiency, and timeless
                  aesthetics. Every piece is designed to enhance spaces and
                  inspire the way people experience them.
                </p>

                {/* Button */}
                <div className="pt-3">
                  <a
                    href="#"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      border
                      border-[#85a30f]
                      px-7
                      py-3.5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-black
                      transition-all
                      duration-300
                      hover:bg-[#85a30f]
                      hover:text-white
                    "
                  >
                    Read Our Story

                    <FiArrowRight
                      className="
                        text-base
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= IMAGE ================= */}
            <div className="order-1 h-[450px] lg:order-2 lg:col-span-7 lg:h-[600px]">
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                
                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[#85a30f]/5" />

                <img
                  src="https://images.unsplash.com/photo-1612523563676-709f47fab6ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlZCUyMGxhbXB8ZW58MHx8MHx8fDA%3D"
                  alt="Modern LED pendant light illuminating a contemporary interior"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-1000
                    ease-out
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE PRINCIPLES
      ====================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-14">
        
        {/* Heading */}
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#85a30f]">
            What We Believe
          </p>

          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Core Principles
          </h2>

          <div className="mx-auto h-px w-12 bg-[#85a30f]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* ================= VALUE 1 ================= */}
          <div
            className="
              group
              flex
              flex-col
              items-start
              border
              border-gray-200
              bg-white
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#85a30f]/50
              hover:shadow-xl
            "
          >
            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#f1f5e5]
                text-[#85a30f]
                transition-all
                duration-300
                group-hover:bg-[#85a30f]
                group-hover:text-white
              "
            >
              <FiClock className="text-2xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Timeless Design
            </h3>

            <p className="text-sm leading-7 text-black">
              We reject fleeting trends in favor of enduring aesthetics. Our
              lighting forms are designed with clean geometry and balanced
              proportions, ensuring they remain relevant and beautiful across
              different interiors and generations.
            </p>
          </div>

          {/* ================= VALUE 2 ================= */}
          <div
            className="
              group
              flex
              flex-col
              items-start
              border
              border-gray-200
              bg-white
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#85a30f]/50
              hover:shadow-lg
            "
          >
            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#f1f5e5]
                text-[#85a30f]
                transition-all
                duration-300
                group-hover:bg-[#85a30f]
                group-hover:text-white
              "
            >
              <FiCompass className="text-2xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Precision Engineering
            </h3>

            <p className="text-sm leading-7 text-black">
              Behind every minimalist silhouette lies careful engineering.
              From thermal management to advanced optics, our LED solutions
              are engineered for reliable performance, durability, efficiency,
              and consistent illumination.
            </p>
          </div>

          {/* ================= VALUE 3 ================= */}
          <div
            className="
              group
              flex
              flex-col
              items-start
              border
              border-gray-200
              bg-white
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#85a30f]/50
              hover:shadow-lg
            "
          >
            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#f1f5e5]
                text-[#85a30f]
                transition-all
                duration-300
                group-hover:bg-[#85a30f]
                group-hover:text-white
              "
            >
              <FiFeather className="text-2xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Sustainable Innovation
            </h3>

            <p className="text-sm leading-7 text-black">
              Efficient lighting should also be responsible lighting. We use
              modern LED technology to reduce energy consumption while
              delivering powerful, long-lasting illumination for residential,
              commercial, and architectural environments.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#eef2e5] py-6 md:py-14">
        
        {/* Decorative dots */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-30
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #85a30f 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Soft glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#85a30f]/10
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#85a30f]">
            Let's Create Together
          </p>

          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Transform Your{" "}
            <span className="text-[#85a30f]">Space</span>
          </h2>

          <p className="mb-10 text-base leading-8 text-black md:text-lg">
            Discover lighting solutions designed to transform your
            environment. Whether you're selecting from our collections or
            planning a complete lighting project, our team is ready to help.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <a
              href="#products"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                bg-[#85a30f]
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:bg-[#718c0c]
                sm:w-auto
              "
            >
              Explore Collection

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="
                flex
                w-full
                items-center
                justify-center
                border
                border-[#85a30f]
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#85a30f]
                transition-all
                duration-300
                hover:bg-[#85a30f]
                hover:text-white
                sm:w-auto
              "
            >
              Contact Design Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
