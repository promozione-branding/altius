"use client";

import Link from "next/link";
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
  FiPhoneCall,
  FiSmartphone,
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

      {/* =================================================
          GIANT COMPANY WATERMARK
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-15
          z-0
          bottom-20
          flex
          w-full
          justify-center
          overflow-hidden
          px-2
          leading-none
          select-none
        "
      >
        <span
          className="
            block
            whitespace-nowrap
            text-center
            font-serif
            text-[4vw]
            font-bold
            tracking-[-0.06em]
            text-white/[0.10]
          "
        >
          <span className="text-[#85A30F]/[0.10]">ELSTRONG </span> &nbsp; BY
          ALTIUS LIGHTING
        </span>
      </div>

      {/* =================================================
          MAIN CONTENT
          ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
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

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-7
                text-white
                hover:text-white/45
              "
            >
              Premium LED lighting solutions created to bring performance,
              precision and timeless design to every space.
            </p>

            {/* Contact */}

            <div className="mt-7 space-y-4">
              {/* Email */}
              <a
                href="mailto:altiuslightings@gmail.com"
                className="flex items-center gap-3 text-sm text-white transition-colors hover:text-[#85a30f]"
              >
                <FiMail size={16} className="shrink-0 text-[#85a30f]" />
                altiuslightings@gmail.com
              </a>

              {/* Customer Care */}
              <a
                href="tel:+919650167709"
                className="flex items-center gap-3 text-sm text-white transition-colors hover:text-[#85a30f]"
              >
                <FiPhone size={16} className="shrink-0 text-[#85a30f]" />
                <span>
                  <span className="text-white">Customer Care:</span> +91
                  96501 67709
                </span>
              </a>

              {/* Landline */}
              <a
                href="tel:+911145700658"
                className="flex items-center gap-3 text-sm text-white transition-colors hover:text-[#85a30f]"
              >
                <FiPhoneCall size={16} className="shrink-0 text-[#85a30f]" />
                <span>
                  <span className="text-white">Landline:</span> +91 11 4570
                  0658
                </span>
              </a>

              {/* Alternate Number */}
              <a
                href="tel:+919958659788"
                className="flex items-center gap-3 text-sm text-white transition-colors hover:text-[#85a30f]"
              >
                <FiSmartphone size={16} className="shrink-0 text-[#85a30f]" />
                <span>
                  <span className="text-white">Alternate:</span> +91 99586
                  59788
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start w-full gap-3 text-sm leading-6 text-white">
                <FiMapPin size={16} className="mt-1 shrink-0 text-[#85a30f]" />

                <span>
                  F-185, Sector-3, DSIISC,
               
                  Bawana Industrial Area,
                  <br />
                  New Delhi, India
                </span>
              </div>
            </div>

            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/elstrong_lights"
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
                href="https://www.facebook.com/ElStrongLights"
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

              {/* <a
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
              </a> */}
            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#85a30f]
              "
            >
              Company
            </h3>

            <ul className="space-y-4">
              {[
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Contact", "/contact"],
                ["Blogs", "/blogs"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white
                      transition-colors
                      hover:text-white/45
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#85a30f]
              "
            >
              Solutions
            </h3>

            <ul className="space-y-4">
              {[
                ["Concealed Lights", "/categories/concealed-lights"],
                ["COB Lens Model", "/categories/cob-lens-model"],
                ["LED Slim Panel", "/categories/led-slim-panel"],
                ["PC Panel", "/categories/pc-panel"],
                ["Outdoor Lights", "/categories/outdoor-lights"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white
                      transition-colors
                      hover:text-white/45
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SUPPORT
          ================================================= */}

          <div>
            <h3
              className="
                mb-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#85a30f]
              "
            >
              Information
            </h3>

            <ul className="space-y-4">
              {[
                ["FAQs", "/"],
                ["Shipping & Delivery", "/"],
                ["Privacy Policy", "/"],
                ["Terms & Conditions", "/"],
                ["Return Policy", "/"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white
                      transition-colors
                      hover:text-white/45
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
                  </Link>
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
            relative
            z-20
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
          <p
            className="
              text-[11px]
              text-white/30
            "
          >
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
            <span>Website Designed By</span>

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
