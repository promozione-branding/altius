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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-white py-6 md:py-12"
      data-purpose="faq-section"
    >
      <div className="container mx-auto px-6 lg:px-20">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
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
                  aria-expanded={isOpen}
                >
                  <span
                    className="
                      text-base
                      font-semibold
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-black
                      md:text-lg
                    "
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <FiChevronDown
                    size={22}
                    strokeWidth={1.5}
                    className={`
                      shrink-0
                      text-gray-400
                      transition-all
                      duration-300
                      group-hover:text-black
                      ${
                        isOpen
                          ? "rotate-180 text-black"
                          : "rotate-0"
                      }
                    `}
                  />
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
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-gray-600 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}