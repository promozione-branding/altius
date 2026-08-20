import React from "react";

export default function CTA() {
  return (
    <>
    <div className="bg-gray-50  w-full ">
      <section className="bg-gray-50 py-6 sm:px-6  max-w-7xl mx-auto md::py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-sans font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Elevate Your Space with Custom Lighting
            </h2>

            <p className="max-w-xl text-base leading-7 text-black sm:text-lg">
              Transform your home or commercial project with our professional
              lighting consultation services. Our experts help you select the
              perfect fixtures to create the ideal atmosphere for any
              environment.
            </p>
          </div>


            <div className="absolute right-100">
                 <svg
    xmlns="http://www.w3.org/2000/svg"
    width={179}
    height={179}
    fill="#85a30f"
    viewBox="-5.5 0 63.991 63.991"
   
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
        data-name="Path 84"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m640.39 607.407-7.99 7.993-7.4-11.088 4.3-4.3Z"
        data-name="Path 85"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M656 612.615 637.615 631l-10.607-19.092 9.9-9.9Z"
        data-name="Path 86"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M643 662h-28l4-6h20Z"
        data-name="Path 87"
      />
      <path
        fill="##85a30f"
        strokeMiterlimit={10}
        d="M654 662h-50"
        data-name="Line 91"
      />
      <circle
        cx={2.708}
        cy={2.708}
        r={2.708}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-name="Ellipse 18"
        transform="translate(610.167 620.417)"
      />
    </g>
  </svg>
            </div>
          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
            {/* Get Quote */}
            <button
              className="
          h-12
          px-8
          bg-black
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-white
          transition-colors
          hover:bg-gray-800
        "
            >
              Get Quote
            </button>

            {/* Call Now */}
            <a
              href="tel:+919999999999"
              className="
          flex
          h-12
          items-center
          justify-center
          border
          border-black
          px-8
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-black
          transition-colors
          hover:bg-gray-100
        "
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
