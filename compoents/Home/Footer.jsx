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
          bg-[#85a30f]/10
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
          bg-[#85a30f]/5
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* =================================================
            NEWSLETTER / TOP SECTION
        ================================================= */}
      


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
              <span className="text-[#85a30f]">.</span>
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
                  hover:text-[#85a30f]
                "
              >
                <FiMail
                  size={16}
                  className="text-[#85a30f]"
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
                  hover:text-[#85a30f]
                "
              >
                <FiPhone
                  size={16}
                  className="text-[#85a30f]"
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
                  className="mt-1 shrink-0 text-[#85a30f]"
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
                  hover:border-[#85a30f]
                  hover:bg-[#85a30f]
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
                  hover:border-[#85a30f]
                  hover:bg-[#85a30f]
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
                  hover:border-[#85a30f]
                  hover:bg-[#85a30f]
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
                  hover:border-[#85a30f]
                  hover:bg-[#85a30f]
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
              text-[#85a30f]
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
              text-[#85a30f]
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
              text-[#85a30f]
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
      hover:text-[#85a30f]
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
      hover:text-[#85a30f]
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