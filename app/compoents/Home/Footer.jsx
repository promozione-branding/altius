"use client";

import React from "react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">

      {/* ================= DECORATIVE GLOW ================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#c9a44c]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#c9a44c]/5
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* =================================================
            NEWSLETTER / TOP SECTION
        ================================================= */}
        <div
          className="
            flex
            flex-col
            gap-8
            border-b
            border-white/10
            py-14
            sm:py-16
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:py-20
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#d2b45c]
                sm:text-xs
              "
            >
              Stay Inspired
            </p>

            <h2
              className="
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Illuminate your world
              <br className="hidden sm:block" />
              <span className="text-[#c9a44c]">
                with better light.
              </span>
            </h2>

            <p className="
              mt-4
              max-w-lg
              text-sm
              leading-6
              text-white/50
            ">
              Explore premium LED lighting solutions designed
              for modern homes, commercial spaces and
              architectural environments.
            </p>

          </div>


          {/* Newsletter */}
          <div className="w-full max-w-md">

            <p className="
              mb-3
              text-xs
              uppercase
              tracking-[0.15em]
              text-white/40
            ">
              Join our newsletter
            </p>

            <form className="
              flex
              border
              border-white/15
              bg-white/[0.03]
              p-1
              focus-within:border-[#c9a44c]/60
            ">

              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                "
              />

              <button
                type="submit"
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  bg-[#c9a44c]
                  px-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-black
                  transition-all
                  hover:bg-[#dfc16a]
                  sm:px-5
                "
              >
                Subscribe
                <FiArrowRight size={15} />
              </button>

            </form>

          </div>

        </div>


        {/* =================================================
            MAIN FOOTER GRID
        ================================================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-14
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
            lg:gap-10
            lg:py-16
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}
          <div>

            <a
              href="/"
              className="
                inline-block
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
              "
            >
              ELSTRONG
              <span className="text-[#c9a44c]">.</span>
            </a>

            <p className="
              mt-5
              max-w-sm
              text-sm
              leading-7
              text-white/45
            ">
              Premium LED lighting solutions created to bring
              performance, precision and timeless design to
              every space.
            </p>


            {/* Contact */}
            <div className="mt-7 space-y-4">

              <a
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-[#d2b45c]
                "
              >
                <FiMail
                  size={16}
                  className="text-[#c9a44c]"
                />

                elstrong@email.com
              </a>


              <a
                href="tel:+911234567890"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-[#d2b45c]
                "
              >
                <FiPhone
                  size={16}
                  className="text-[#c9a44c]"
                />

                +91 12345 67890
              </a>


              <div className="
                flex
                items-start
                gap-3
                text-sm
                leading-6
                text-white/50
              ">
                <FiMapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#c9a44c]"
                />

                <span>
                  New Delhi, India
                </span>
              </div>

            </div>


            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiInstagram size={16} />
              </a>


              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiFacebook size={16} />
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiLinkedin size={16} />
              </a>


              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiYoutube size={16} />
              </a>

            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}
          <div>

            <h3 className="
              mb-6
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d2b45c]
            ">
              Company
            </h3>

            <ul className="space-y-4">

              {[
                ["About Us", "/about"],
                ["Our Story", "/our-story"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
                ["Careers", "/careers"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/45
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}

                    <FiArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}
          <div>

            <h3 className="
              mb-6
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d2b45c]
            ">
              Solutions
            </h3>

            <ul className="space-y-4">

              {[
                ["LED Lighting", "/led-lighting"],
                ["Industrial Lighting", "/industrial-lighting"],
                ["Commercial Lighting", "/commercial-lighting"],
                ["Architectural Lighting", "/architectural-lighting"],
                ["Smart Lighting", "/smart-lighting"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/45
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}

                    <FiArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              SUPPORT
          ================================================= */}
          <div>

            <h3 className="
              mb-6
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d2b45c]
            ">
              Information
            </h3>

            <ul className="space-y-4">

              {[
                ["FAQs", "/faq"],
                ["Shipping & Delivery", "/shipping"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms"],
                ["Return Policy", "/return-policy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/45
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}

                    <FiArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}

            </ul>

          </div>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="
            text-[11px]
            text-white/30
          ">
            © 2026 ELSTRONG . All rights reserved.
          </p>


         <div
  className="
    flex
    flex-wrap
    items-center
    gap-2
    text-[10px]
    tracking-wider
    text-white/30
  "
>
  <span>
    Website Designed By
  </span>

  <a
    href="https://inquirybazaar.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      font-semibold
      text-white/50
      transition-colors
      duration-300
      hover:text-[#c9a44c]
    "
  >
    Inquiry Bazaar Pvt. Ltd.
  </a>

  <span className="text-white/20">|</span>

  <a
    href="https://inquirybazaar.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      font-semibold
      text-white/50
      transition-colors
      duration-300
      hover:text-[#c9a44c]
    "
  >
    B2B Marketplace
  </a>
</div>

        </div>

      </div>
    </footer>
  );
}