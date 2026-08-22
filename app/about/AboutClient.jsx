import React from "react";
import { FiArrowRight, FiClock, FiCompass, FiFeather } from "react-icons/fi";
import LEDShowcase from "../../compoents/About/LEDShowcase";
import LEDFeatures from "@/compoents/About/LEDFeatures";
import Image from "next/image";
import { GiDoubleStreetLights } from "react-icons/gi";

export default function AboutClient() {
  return (
    <>
      <section className="mx-auto mt-20 w-full max-w-7xl px-5 py-6 md:px-10 lg:px-16 md:py-12">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          {/* ================= HEADING ================= */}
          <div className="mb-6 text-center lg:col-span-12 lg:mb-1">
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
              About the <span className="text-[#85a30f]">Art of Elstrong</span>
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
              At Elstrong, we believe lighting is more than just function; it's
              the invisible architecture of a space. We craft luminous
              experiences that transform environments and elevate the everyday.
            </p>
          </div>

          {/* ================= IMAGE ================= */}
        </div>
      </section>

      <section className="w-full bg-gray-100 py-6 md:py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-12 lg:gap-x-16">
            {/* ================= TEXT ================= */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="space-y-8 lg:pr-8">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#85a30f]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#85a30f]">
                      Our Story
                    </p>
                  </div>

                  <h2 className="text-4xl font-[600] leading-[1.1] tracking-tight text-gray-900 md:text-5xl">
                    A Heritage of{" "}
                    <span className="relative inline-block text-[#85a30f]">
                      Light
                      <svg
                        className="absolute -bottom-1 left-0 w-full"
                        height="6"
                        viewBox="0 0 120 6"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 3 Q30 0 60 3 T120 3"
                          stroke="#85a30f"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.4"
                        />
                      </svg>
                    </span>
                  </h2>
                </div>

                <p className="text-base leading-6 text-gray-900">
                  Founded on the principles of architectural clarity and
                  uncompromising quality, we emerged from a desire to redefine
                  modern LED lighting. Our journey began with a simple vision:
                  to create lighting solutions that are as beautiful when
                  switched off as they are illuminating when switched on.
                </p>

                <p className="text-base leading-6 text-gray-900">
                  We combine premium materials, advanced LED technology, and
                  thoughtful engineering to create lighting products that
                  deliver exceptional performance, efficiency, and timeless
                  aesthetics. Every piece is designed to enhance spaces and
                  inspire the way people experience them.
                </p>

                {/* Mini stats row */}
                <div className="flex gap-10 border-y border-gray-300/70 py-6">
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">15+</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-800">
                      Years of Craft
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">40k+</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-800">
                      Spaces Lit
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">100%</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-800">
                      In-House Design
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-1">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 border border-[#85a30f] bg-[#85a30f] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-[#5f7a0a]"
                  >
                    Read Our Story
                    <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= IMAGE ================= */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="relative h-[450px] w-full lg:h-[600px]">
                {/* Ambient glow, echoes "light" theme */}
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[#85a30f]/10 blur-3xl" />

                {/* Offset frame accent */}
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#85a30f]/40 lg:-bottom-6 lg:-right-6" />

                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                  <img
                    src="https://images.unsplash.com/photo-1612523563676-709f47fab6ea?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlZCUyMGxhbXB8ZW58MHx8MHx8fDA%3D"
                    alt="Modern LED pendant light illuminating a contemporary interior"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                  />
                </div>

                {/* Floating badge card */}
                <div className="absolute -left-5 bottom-8 z-20 hidden max-w-[220px] bg-white p-5 shadow-xl md:block lg:-left-8">
                  <p className="text-3xl font-semibold text-[#85a30f]">2009</p>
                  <p className="mt-1 text-sm leading-snug text-gray-900">
                    The year we lit our first space — and never stopped refining
                    the craft.
                  </p>
                  <GiDoubleStreetLights className="absolute top-4  text-[#85a30f] right-4 size-13" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <LEDShowcase/> */}
      <LEDFeatures />

      <section className="w-full bg-white py-12 md:py-14 ">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
          {/* ================= CONTENT ================= */}
          <div className="w-full lg:max-w-[625px]">
            {/* Heading */}
            <h2 className="mb-4 text-[48px] font-bold leading-[1.05] tracking-[-1.5px] text-black sm:text-[58px] lg:text-[64px]">
              Our <span className="text-[#85a30f]">Story</span>
            </h2>

            {/* Sub Heading */}
            <h3 className="mb-8 max-w-[600px] text-[22px] font-semibold  tracking-[-0.3px] text-black sm:text-[25px] lg:text-[28px] lg:leading-[1.4]">
              Lighting spaces. Inspiring lives.
              <br className="hidden lg:block" />
              Building a brighter future.
            </h3>

            {/* Paragraph */}
            <div className="space-y-5 text-[15px] font-normal leading-6 text-black sm:text-[16px]">
              <p>
                We are passionate about creating high-quality LED lighting
                solutions that combine modern design, energy efficiency, and
                reliable performance. From homes and offices to commercial and
                architectural spaces, our lighting products are designed to
                deliver bright, comfortable, and consistent illumination.
              </p>

              <p>
                With a focus on innovation and quality, we continuously develop
                lighting solutions that meet the evolving needs of modern
                spaces. Our range includes LED downlights, panel lights, flood
                lights, track lights, outdoor lighting, and other professional
                illumination solutions. We believe great lighting is more than
                just brightness — it creates atmosphere, enhances design, and
                transforms the way people experience a space.
              </p>
            </div>

            {/* Small Accent */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#85a30f]" />

              <span className="h-px w-16 bg-black/90" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/90">
                Designed to Illuminate
              </span>
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative w-full overflow-hidden">
            <div className="relative h-[420px]   border-t-8 border-[#85a30f] w-full md:h-[520px] ">
              <img
                src="/abouttt.png"
                alt="LED Lighting Solutions"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Green Accent */}
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE PRINCIPLES
      ====================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-14">
        {/* Heading */}
        <div className="mb-14 text-center md:mb-10">
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
              Behind every minimalist silhouette lies careful engineering. From
              thermal management to advanced optics, our LED solutions are
              engineered for reliable performance, durability, efficiency, and
              consistent illumination.
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
            Transform Your <span className="text-[#85a30f]">Space</span>
          </h2>

          <p className="mb-10 text-base leading-8 text-black md:text-lg">
            Discover lighting solutions designed to transform your environment.
            Whether you're selecting from our collections or planning a complete
            lighting project, our team is ready to help.
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
  );
}
