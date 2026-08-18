"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from "react-icons/fi";

const collections = [
  {
    title: "MODERN METROPOLITAN",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "SOFT ILLUMINATION",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "CONTEMPORARY LIVING",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "MINIMALIST LIGHT",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "TIMELESS ELEGANCE",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
  },
];

const TOTAL = collections.length;

// 3 copies for seamless infinite scrolling
const loopedCollections = [...collections, ...collections, ...collections];

const MIDDLE_START = TOTAL;

export default function Collections() {
  const [activeIndex, setActiveIndex] = useState(MIDDLE_START + 2);
  const [translateX, setTranslateX] = useState(0);
  const [transition, setTransition] = useState(true);

  const containerRef = useRef(null);
  const itemRef = useRef(null);

  const calculatePosition = useCallback(() => {
    const container = containerRef.current;
    const item = itemRef.current;

    if (!container || !item) return;

    const containerWidth = container.offsetWidth;
    const itemWidth = item.offsetWidth;

    const gap = 20;

    const step = itemWidth + gap;

    const position = containerWidth / 2 - itemWidth / 2 - activeIndex * step;

    setTranslateX(position);
  }, [activeIndex]);

  useEffect(() => {
    calculatePosition();
  }, [calculatePosition]);

  useEffect(() => {
    const handleResize = () => {
      calculatePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculatePosition]);

  useEffect(() => {
    if (activeIndex < TOTAL || activeIndex >= TOTAL * 2) {
      const timer = setTimeout(() => {
        const realIndex = ((activeIndex % TOTAL) + TOTAL) % TOTAL;

        setTransition(false);

        setActiveIndex(MIDDLE_START + realIndex);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!transition) {
      const frame = requestAnimationFrame(() => {
        setTransition(true);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [transition]);

  const nextSlide = () => {
    setTransition(true);
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransition(true);
    setActiveIndex((prev) => prev - 1);
  };

  const goToSlide = (realIndex) => {
    setTransition(true);
    setActiveIndex(MIDDLE_START + realIndex);
  };

  const currentIndex = ((activeIndex % TOTAL) + TOTAL) % TOTAL;

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f8f6] py-6 md:py-8">
      {/* =========================
          HEADING
      ========================== */}
      <div className="mb-12 px-6 text-center md:mb-14">
        <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl lg:text-6xl">
          Featured Collections
        </h2>
      </div>

      {/* =========================
          SLIDER
      ========================== */}
      <div ref={containerRef} className="relative w-full">
        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous collection"
          className="
            absolute
            left-4
            top-[38%]
            z-50
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            shadow-lg
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            md:left-8
            md:h-14
            md:w-14
          "
        >
          <FiChevronLeft size={24} strokeWidth={1.5} />
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next collection"
          className="
            absolute
            right-4
            top-[38%]
            z-50
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            shadow-lg
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            md:right-8
            md:h-14
            md:w-14
          "
        >
          <FiChevronRight size={24} strokeWidth={1.5} />
        </button>

        {/* =========================
            TRACK
        ========================== */}
        <div
          className={`
            flex
            items-start
            gap-5
            ${
              transition
                ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : ""
            }
          `}
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
          }}
        >
          {loopedCollections.map((item, index) => {
            const distance = Math.abs(index - activeIndex);

            const isActive = index === activeIndex;

            return (
              <div
                key={`${item.title}-${index}`}
                ref={isActive ? itemRef : null}
                onClick={() => setActiveIndex(index)}
                className="
                  group
                  relative
                  w-[78vw]
                  shrink-0
                  cursor-pointer
                  sm:w-[60vw]
                  md:w-[38vw]
                  lg:w-[34vw]
                  xl:w-[32vw]
                "
              >
                {/* =========================
                    IMAGE
                ========================== */}
                <div
                  className="
                    relative
                    aspect-[1.35/1]
                    w-full
                    overflow-hidden
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* 
                    WHITE OVERLAY

                    Center = no overlay
                    Left / Right = white overlay
                  */}
                  <div
                    className={`
                      absolute
                      inset-0
                      bg-white
                      transition-opacity
                      duration-700
                      ${isActive ? "opacity-0" : "opacity-[0.78]"}
                    `}
                  />

                  {/* 
                    Optional extra fade for far slides
                  */}
                  {distance > 1 && (
                    <div
                      className="
                        absolute
                        inset-0
                        bg-white/20
                      "
                    />
                  )}
                </div>

                {/* =========================
                    TEXT
                ========================== */}
                <div
                  className={`
                    pt-6
                    text-center
                    transition-all
                    duration-700
                    ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-40"
                    }
                  `}
                >
                  <h3 className="text-sm font-semibold tracking-[0.08em] text-black md:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[9px] font-medium tracking-[0.22em] text-black/55 md:text-[10px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            DOTS
        ========================== */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {collections.map((_, index) => {
            const active = index === currentIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to collection ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    active
                      ? "w-7 bg-black"
                      : "w-1.5 bg-black/20 hover:bg-black/50"
                  }
                `}
              />
            );
          })}
        </div>
      </div>

      {/* =========================
          BACK TO TOP
      ========================== */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="
          absolute
          bottom-6
          right-6
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          shadow-md
          transition-transform
          duration-300
          hover:-translate-y-1
          md:right-8
        "
      >
        <FiArrowUpRight size={20} strokeWidth={1.5} />
      </button>
    </section>
  );
}
