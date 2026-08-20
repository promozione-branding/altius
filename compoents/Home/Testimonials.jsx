"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "The LED lights have completely transformed our interiors. The brightness is excellent, the design feels premium, and the energy savings are noticeable.",
    name: "Rajiv Mehta",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop",
  },
  {
    text: "Excellent lighting quality with a clean, modern finish. The lights provide consistent illumination and have worked perfectly for our commercial space.",
    name: "Priya Sharma",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=687&auto=format&fit=crop",
  },
  {
    text: "We upgraded our showroom with these LED lights and the difference is impressive. The lighting makes every product stand out while keeping energy consumption low.",
    name: "Arjun Kapoor",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-white py-6 md:py-16 ">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* ================= MAIN AREA ================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[48%_52%]">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative z-10">

            <div className="relative aspect-[1.34/1] w-full overflow-hidden rounded-[14px]">
              <Image
              
                src="https://images.unsplash.com/photo-1541956197774-1c6c637c8776?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Refined interior space"
                fill
                priority
                className="object-cover"
              />

              {/* Bottom white curved accent */}
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
             Discover what our customers say about the performance, efficiency, and
  modern design of our LED lighting solutions.
            </p>

          </div>

          {/* ================= TESTIMONIAL CARDS ================= */}
          <div
            className="
              relative
              z-30
              mt-[-1px]
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:absolute
              lg:left-[29%]
              lg:top-[268px]
              lg:mt-0
              lg:w-[71%]
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  min-h-[250px]
                  flex-col
                  rounded-[14px]
                  border
                  border-[#ebe7e1]
                  bg-[#f9f7f3]
                  p-6
                  shadow-[0_4px_18px_rgba(0,0,0,0.04)]
                  sm:p-7
                  lg:min-h-[260px]
                "
              >

                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={13}
                      className="text-[#85a30f]"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="max-w-[280px] text-[15px] font-medium italic leading-[1.32] tracking-[-0.02em] text-black">
                  {testimonial.text}
                </p>

                {/* User */}
                <div className="mt-auto flex items-center gap-3 pt-7">

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

                {/* Quote mark */}
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
            ))}
          </div>

        </div>

        {/* ================= SLIDER DOTS ================= */}
        <div className="mt-12 flex items-center justify-center gap-2 lg:mt-[175px]">

          <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />

        </div>

      </div>
    </section>
  );
}