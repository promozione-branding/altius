"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    heading: "Reliable Lighting Solutions",
    text: "ELSTRONG provided us with a reliable LED lighting solution for our project. The product quality, professional communication, and overall service experience were satisfactory.",
    name: "Rajiv Mehta",
    role: "Project Manager",
    image: "/testi.webp",
  },
  {
    heading: "Quality LED Products",
    text: "We were looking for dependable LED lighting products for our commercial requirements. The ELSTRONG team understood our needs and helped us select suitable lighting solutions.",
    name: "Priya Sharma",
    role: "Interior Designer",
    image: "/testi.webp",
  },
  {
    heading: "Professional Service",
    text: "Our experience with ELSTRONG was smooth and professional. The team was responsive to our requirements and provided useful guidance regarding the lighting products.",
    name: "Arjun Kapoor",
    role: "Business Owner",
    image: "/testi.webp",
  },
  {
    heading: "Modern Lighting Solutions",
    text: "ELSTRONG offers a good range of modern LED lighting solutions. The products were suitable for our application, and the team provided helpful support throughout the process.",
    name: "Amit Verma",
    role: "Architect",
    image: "/testi.webp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /*
   * Detect mobile/tablet
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /*
   * Number of visible cards
   */
  const visibleCards = isMobile ? 1 : 3;

  /*
   * Clone testimonials for infinite loop
   */
  const sliderItems = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  /*
   * Auto slide
   */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /*
   * Reset position after reaching clones
   */
  useEffect(() => {
    if (current >= testimonials.length * 2) {
      const timeout = setTimeout(() => {
        setCurrent(testimonials.length);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current]);

  /*
   * Start from middle set
   */
  useEffect(() => {
    setCurrent(testimonials.length);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-6 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* ================= MAIN AREA ================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[48%_52%]">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative z-10">
            <div className="relative aspect-[1.34/1] w-full overflow-hidden rounded-[14px]">
              <Image
                src="https://images.unsplash.com/photo-1541956197774-1c6c637c8776?q=80&w=687&auto=format&fit=crop"
                alt="LED Light Manufacturer, LED Light, LED Light Supplier"
                fill
                priority
                className="object-cover"
              />

              {/* Bottom Shape */}
              <div className="absolute bottom-0 right-0 h-[38px] w-[38px] rounded-tl-[30px] bg-white" />

              <div className="absolute bottom-0 right-0 h-[17px] w-[17px] rounded-full bg-white" />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative z-20 pt-10 lg:pl-6 lg:pt-5 xl:pl-8">

            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-gray-700 sm:text-[11px]">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[570px] text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-black sm:text-[50px] lg:text-[52px] xl:text-[56px]">
              Bright Ideas.
              <br />
              Trusted Performance.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-sm leading-6 text-gray-500 sm:text-[15px]">
              Discover what our customers say about the performance, efficiency,
              and modern design of our LED lighting solutions.
            </p>
          </div>

          {/* ================= TESTIMONIAL SLIDER ================= */}
          <div
            className="
              relative
              z-30
              mt-6
              w-full
              overflow-hidden

              lg:absolute
              lg:left-[29%]
              lg:top-[268px]
              lg:mt-0
              lg:w-[71%]
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* ================= TRACK ================= */}
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              style={{
                transform: `translateX(-${
                  (current * 100) / visibleCards
                }%)`,
              }}
            >
              {sliderItems.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="
                    w-full
                    min-w-full
                    shrink-0
                    px-0

                    lg:w-1/3
                    lg:min-w-1/3
                    lg:px-2
                  "
                >
                  {/* ================= CARD ================= */}
                  <div
                    className="
                      relative
                      flex
                      min-h-[250px]
                      flex-col
                      rounded-[14px]
                      border
                      border-[#ebe7e1]
                      bg-[#f9f7f3]
                      p-5
                      shadow-[0_4px_18px_rgba(0,0,0,0.04)]

                      sm:p-7
                      lg:min-h-[260px]
                    "
                  >

                    {/* ================= STARS ================= */}
                    <div className="mb-5 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={13}
                          className="text-[#85a30f]"
                        />
                      ))}
                    </div>

                    {/* ================= TESTIMONIAL HEADING ================= */}
                    <h3 className="mb-3 text-[16px] font-semibold leading-tight tracking-[-0.02em] text-black sm:text-[17px]">
                      {testimonial.heading}
                    </h3>

                    {/* ================= TESTIMONIAL TEXT ================= */}
                    <p className="max-w-[280px] text-[13px] font-medium italic leading-[1.5] tracking-[-0.01em] text-gray-700 sm:text-[14px]">
                      “{testimonial.text}”
                    </p>

                    {/* ================= USER ================= */}
                    <div className="mt-auto flex items-center gap-3 pt-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={42}
                        height={42}
                        className="h-[42px] w-[42px] rounded-full object-cover"
                      />

                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>

                        <p className="mt-0.5 text-[11px] text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* ================= QUOTE ================= */}
                    <span
                      className="
                        absolute
                        bottom-6
                        right-5
                        font-serif
                        text-[48px]
                        leading-none
                        text-gray-300
                      "
                    >
                      ”
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DOTS ================= */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:mt-[175px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(testimonials.length + index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500

                ${
                  current % testimonials.length === index
                    ? "w-5 bg-[#85a30f]"
                    : "w-1.5 bg-gray-200"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}