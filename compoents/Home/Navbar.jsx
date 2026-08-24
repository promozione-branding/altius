"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { GrCatalog } from "react-icons/gr";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/product",
    hot: true,
    dropdown: true,
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Our Story",
    href: "/product",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const shopCategories = [
  "Square Lights",
  "LED Lights",
  "Outdoor Light",
  "Downlight Led",
  "Flood Light",
  "LED Track Light",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-[120]
        w-full
        transition-all
        duration-500
        ease-in-out

        ${
          pathname !== "/" || scrolled
            ? "bg-black shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* =================================================
            MAIN NAV
        ================================================= */}
        <div
          className="
            relative
            flex
            h-[82px]
            items-center
            justify-between
            md:h-[94px]
          "
        >
          {/* =================================================
              LEFT - LOGO
          ================================================= */}
          <a href="/" className="relative z-10 flex shrink-0 items-center">
            <Image
              src="/logo.jpeg"
              alt="elstrong"
              width={100}
              height={100}
              className={`
                h-auto
                w-[75px]
               
                md::w-[100px]
                transition-all
                object-contain
                duration-500
               
              `}
            />
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <div
            className="
              hidden
              items-center
              gap-8
              lg:flex
              xl:gap-11
            "
          >
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                {/* ================= HOT BADGE ================= */}
                {item.hot && (
                  <span
                    className="
                      absolute
                      -top-[25px]
                      left-1/2
                      -translate-x-1/2
                      rounded-sm
                      bg-[#85a30f]
                      px-2
                      py-1
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    HOT
                    <span
                      className="
                        absolute
                        left-1/2
                        top-full
                        -translate-x-1/2
                        border-l-[5px]
                        border-r-[5px]
                        border-t-[5px]
                        border-l-transparent
                        border-r-transparent
                        border-t-[#85a30f]
                      "
                    />
                  </span>
                )}

                {/* ================= NAV LINK ================= */}
                <a
                  href={item.href}
                  className={`
                    flex
                    items-center
                    gap-1.5
                    text-[16px]
                    font-semibold
                    transition-all
                    duration-300
                    xl:text-[17px]

                    ${
                      scrolled
                        ? "text-white hover:text-[#85a30f]"
                        : "text-white hover:text-[#85a30f]"
                    }
                  `}
                >
                  {item.name}

                  {item.dropdown && (
                    <FiChevronDown
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                      "
                    />
                  )}
                </a>

                {/* ================= HOVER LINE ================= */}
                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    bg-[#85a30f]
                    transition-all
                    duration-300
                    group-hover:w-full
                  `}
                />

                {/* =================================================
                    DROPDOWN
                ================================================= */}
                {item.dropdown && (
                  <div
                    className="
                      invisible
                      absolute
                      left-1/2
                      top-full
                      -translate-x-1/2
                      pt-7
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:visible
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        w-60
                        rounded-xl
                        border
                        border-neutral-100
                        bg-white
                        p-3
                        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                      "
                    >
                      {shopCategories.map((category) => (
                        <a
                          href="#"
                          key={category}
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-lg
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-neutral-700
                            transition-colors
                            hover:bg-[#faf7ef]
                            hover:text-[#85a30f]
                          "
                        >
                          {category}

                          <span className="text-neutral-300">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* =================================================
              RIGHT - CATALOGUE
          ================================================= */}
          <div className="hidden lg:flex">
            <button
              className={`
                group
                flex
                items-center
                gap-2
                border
                px-4
                py-2.5
                text-[14px]
                font-semibold
                transition-all
                duration-300

                ${
                  scrolled
                    ? `
                      border-[#85a30f]
                      text-white
                      hover:bg-[#85a30f]
                      hover:text-white
                    `
                    : `
                      border-white/60
                      text-white
                      hover:border-white
                      hover:bg-white
                      hover:text-neutral-900
                    `
                }
              `}
            >
              Get Catalogue
              <GrCatalog
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300
              lg:hidden

              ${
                scrolled
                  ? `
                    border-neutral-200
                    text-neutral-900
                    hover:bg-neutral-100
                  `
                  : `
                    border-white/40
                    text-white
                    hover:bg-white/10
                  `
              }
            `}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={25} />}
          </button>
        </div>

        {/* =================================================
            MOBILE NAV
        ================================================= */}
        {mobileOpen && (
          <div
            className="
              border-t
              border-neutral-100
              bg-white
              py-5
              lg:hidden
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-neutral-100
                  py-4
                  text-[16px]
                  font-semibold
                  text-neutral-800
                  transition-colors
                  hover:text-[#b28b32]
                "
              >
                <span className="flex items-center gap-3">
                  {item.name}

                  {item.hot && (
                    <span
                      className="
                        rounded-sm
                        bg-[#85a30f]
                        px-2
                        py-1
                        text-[9px]
                        font-bold
                        text-white
                      "
                    >
                      HOT
                    </span>
                  )}
                </span>

                {item.dropdown && <FiChevronDown size={18} />}
              </a>
            ))}

            {/* ================= MOBILE CATALOGUE ================= */}
            <button
              className="
                mt-5
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                border
                border-[#b28b32]
                text-sm
                font-semibold
                text-neutral-800
                transition-all
                duration-300
                hover:bg-[#b28b32]
                hover:text-white
              "
            >
              <GrCatalog size={18} />
              Get Catalogue
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
