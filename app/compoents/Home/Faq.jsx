"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What are your shipping options and delivery times?",
    answer:
      "We offer standard and express shipping worldwide. Standard shipping typically takes 5-7 business days, while express delivery arrives within 2-3 business days. Free standard shipping is available on all orders over $150.",
  },
  {
    question: "Do your products come with a warranty?",
    answer:
      "Yes, all Lampic products are covered by a comprehensive 2-year limited warranty that protects against manufacturing defects and electrical malfunctions under normal use conditions.",
  },
  {
    question: "Can I request a custom lighting design for my project?",
    answer:
      "Absolutely. Our design team specializes in bespoke lighting solutions for residential and commercial spaces. Please contact our concierge service to schedule a consultation with one of our lead designers.",
  },
  {
    question: "Are your lamps energy efficient?",
    answer:
      "Sustainability is at our core. 95% of our collection utilizes high-efficiency LED technology, which consumes up to 80% less energy than traditional incandescent bulbs while providing superior light quality and longevity.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day hassle-free return policy. If you are not completely satisfied with your purchase, you can return it in its original packaging for a full refund or exchange.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-24 lg:self-start">

            {/* Small Heading */}
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a44c] sm:text-xs">
              Got Questions?
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl">
              Frequently Asked
              <br />
              Questions
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
              Everything you need to know about our lighting,
              shipping and design services. Can&apos;t find your
              answer? Reach out to our concierge team.
            </p>

            {/* Image */}
            <div className="group h-50 relative mt-10 aspect-[4/5] w-full max-w-md overflow-hidden ">
              <img
                src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=1200&q=80"
                alt="Modern pendant lighting fixture"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pt-2">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-gray-200"
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                    "
                  >
                    <span
                      className="
                        text-base
                        font-semibold
                        leading-relaxed
                        text-gray-900
                        md:text-lg
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "border-[#c9a44c] bg-[#c9a44c] text-white"
                            : "border-gray-200 text-gray-400 group-hover:border-black group-hover:text-black"
                        }
                      `}
                    >
                      <FiChevronDown
                        size={18}
                        strokeWidth={1.75}
                        className={`
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? "rotate-180"
                              : "rotate-0"
                          }
                        `}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-5 pr-8 text-sm leading-relaxed text-gray-600 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}