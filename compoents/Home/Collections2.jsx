"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";

const collections = [
  {
    title: "LED CEILING LIGHTS",
    subtitle: "DISCOVER COLLECTION",
    image: "/light3.jpeg",
  },
  {
    title: "SOFT ILLUMINATION",
    subtitle: "DISCOVER COLLECTION",
    image: "/OutdoorLight.webp",
  },
  {
    title: "CONTEMPORARY LIVING",
    subtitle: "DISCOVER COLLECTION",
    image: "/light3.jpeg",
  },
  {
    title: "MINIMALIST LIGHT",
    subtitle: "DISCOVER COLLECTION",
    image: "/OutdoorLight.webp",
  },
];

export default function Collections2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardsRef = useRef([]);
  const activeIndexRef = useRef(0);
  const animationRef = useRef(null);

  /*
  ============================================================
  STACK POSITION
  ============================================================
  */

  const getStackPosition = (index, currentIndex) => {
    const total = collections.length;

    let distance = index - currentIndex;

    if (distance < 0) {
      distance += total;
    }

    if (distance === 0) {
      return {
        y: 0,
        scale: 1,
        opacity: 1,
        z: 50,
      };
    }

    if (distance === 1) {
      return {
        y: -24,
        scale: 0.985,
        opacity: 0.95,
        z: 40,
      };
    }

    if (distance === 2) {
      return {
        y: -48,
        scale: 0.97,
        opacity: 0.9,
        z: 30,
      };
    }

    if (distance === 3) {
      return {
        y: -72,
        scale: 0.955,
        opacity: 0.82,
        z: 20,
      };
    }

    return {
      y: -90,
      scale: 0.94,
      opacity: 0,
      z: 1,
    };
  };

  /*
  ============================================================
  SET INITIAL STACK
  ============================================================
  */

  const setStack = (index) => {
    cardsRef.current.forEach((card, cardIndex) => {
      if (!card) return;

      const position = getStackPosition(
        cardIndex,
        index
      );

      gsap.set(card, {
        y: position.y,
        scale: position.scale,
        opacity: position.opacity,
        zIndex: position.z,
      });
    });
  };

  /*
  ============================================================
  INITIAL SETUP
  ============================================================
  */

  useLayoutEffect(() => {
    setStack(0);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  /*
  ============================================================
  CHANGE CARD
  ============================================================
  */

  const changeCard = (
    newIndex,
    direction = "next"
  ) => {
    if (isAnimating) return;

    const currentIndex =
      activeIndexRef.current;

    if (newIndex === currentIndex) return;

    const currentCard =
      cardsRef.current[currentIndex];

    const nextCard =
      cardsRef.current[newIndex];

    if (!currentCard || !nextCard) return;

    setIsAnimating(true);

    /*
    Cancel previous animation
    */

    if (animationRef.current) {
      animationRef.current.kill();
    }

    /*
    ========================================================
    NEXT
    ========================================================
    */

    if (direction === "next") {
      /*
        New card comes from bottom.
      */

      gsap.set(nextCard, {
        y: 420,
        scale: 0.94,
        opacity: 0,
        zIndex: 60,
      });

      animationRef.current =
        gsap.timeline({
          onComplete: () => {
            activeIndexRef.current =
              newIndex;

            setActiveIndex(newIndex);
            setIsAnimating(false);

            setStack(newIndex);
          },
        });

      /*
        Current card moves up.
      */

      animationRef.current.to(
        currentCard,
        {
          y: -140,
          scale: 0.96,
          opacity: 0,
          duration: 0.55,
          ease: "power3.inOut",
        }
      );

      /*
        New card comes from bottom.
      */

      animationRef.current.to(
        nextCard,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35"
      );
    }

    /*
    ========================================================
    PREVIOUS
    ========================================================
    */

    else {
      /*
        Previous card comes from top.
      */

      gsap.set(nextCard, {
        y: -140,
        scale: 0.94,
        opacity: 0,
        zIndex: 60,
      });

      animationRef.current =
        gsap.timeline({
          onComplete: () => {
            activeIndexRef.current =
              newIndex;

            setActiveIndex(newIndex);
            setIsAnimating(false);

            setStack(newIndex);
          },
        });

      /*
        Current card moves down.
      */

      animationRef.current.to(
        currentCard,
        {
          y: 140,
          scale: 0.96,
          opacity: 0,
          duration: 0.55,
          ease: "power3.inOut",
        }
      );

      /*
        Previous card comes from top.
      */

      animationRef.current.to(
        nextCard,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35"
      );
    }
  };

  /*
  ============================================================
  NEXT BUTTON
  ============================================================
  */

  const nextSlide = () => {
    if (isAnimating) return;

    const current =
      activeIndexRef.current;

    const next =
      (current + 1) %
      collections.length;

    changeCard(next, "next");
  };

  /*
  ============================================================
  PREVIOUS BUTTON
  ============================================================
  */

  const prevSlide = () => {
    if (isAnimating) return;

    const current =
      activeIndexRef.current;

    const previous =
      (current - 1 +
        collections.length) %
      collections.length;

    changeCard(previous, "prev");
  };

  /*
  ============================================================
  DOT NAVIGATION
  ============================================================
  */

  const goToSlide = (index) => {
    if (isAnimating) return;

    const current =
      activeIndexRef.current;

    if (index === current) return;

    const direction =
      index > current
        ? "next"
        : "prev";

    changeCard(index, direction);
  };

  /*
  ============================================================
  RENDER
  ============================================================
  */

  return (
    <section
      className="
        relative
        flex
        min-h-[650px]
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-[#f8f8f6]
        px-4
        py-10
        md:px-8
        md:py-12
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="mb-7 px-4 text-center md:mb-9">
        <div className="split-title mb-15">
          <h2 className="split-title__text text-base">
            Featured Collections

            <span className="split-title__top">
              Featured Collections
            </span>

            <span className="split-title__bottom">
              Featured Collections
            </span>

            <span className="split-title__word">
              BY ELSTRONG
            </span>
          </h2>
        </div>
      </div>

      {/* =====================================================
          CARD STACK
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          h-[390px]
          w-full
          max-w-[1200px]
          md:h-[320px]
  
        "
      >
        {/* ===================================================
            LEFT BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={prevSlide}
          disabled={isAnimating}
          aria-label="Previous collection"
          className="
            absolute
            left-0
            top-1/2
            z-[100]
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-black
            shadow-lg
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            disabled:pointer-events-none
            disabled:opacity-40
            md:left-3
            md:h-14
            md:w-14
          "
        >
          <FiChevronLeft
            size={24}
            strokeWidth={1.5}
          />
        </button>

        {/* ===================================================
            RIGHT BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          disabled={isAnimating}
          aria-label="Next collection"
          className="
            absolute
            right-0
            top-1/2
            z-[100]
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-black
            shadow-lg
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            disabled:pointer-events-none
            disabled:opacity-40
            md:right-3
            md:h-14
            md:w-14
          "
        >
          <FiChevronRight
            size={24}
            strokeWidth={1.5}
          />
        </button>

        {/* ===================================================
            CARDS
        ==================================================== */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            mx-auto
            h-full
            w-[calc(100%-70px)]
            sm:w-[calc(100%-110px)]
          "
        >
          {collections.map(
            (item, index) => {
              const isActive =
                index === activeIndex;

              return (
               <div
  key={`${item.title}-${index}`}
  ref={(el) => {
    cardsRef.current[index] = el;
  }}
  className="
    absolute
    left-0
    top-0
    h-full
    w-full
    overflow-hidden
    rounded-[22px]
    border
    border-black/[0.07]
    bg-white
    shadow-[0_20px_70px_rgba(0,0,0,0.08)]
    will-change-transform
  "
  style={{
    zIndex: isActive ? 50 : 40 - index,
  }}
>
  <div
    className="
      grid
      h-full
      grid-cols-1
      md:grid-cols-[40%_60%]
    "
  >
    {/* IMAGE */}
    <div
      className="
        relative
        h-full
        min-h-0
        overflow-hidden
        md:h-full
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
          object-center
        "
      />

      <div className="absolute inset-0 bg-black/[0.03]" />
    </div>

    {/* CONTENT */}
    <div
      className="
        relative
        flex
        h-1/2
        min-h-0
        flex-col
        justify-between
        overflow-hidden
        bg-white
        p-4
        sm:p-6
        md:h-full
        md:p-8
        lg:p-10
      "
    >
      {/* TOP */}
      <div>
        <p
          className="
            mb-2
            text-[8px]
            font-medium
            tracking-[0.28em]
            text-black/80
            sm:mb-4
            sm:text-[9px]
            md:text-[10px]
          "
        >
          0{index + 1} / 0{collections.length}
        </p>

        <h3
          className="
            max-w-md
            text-lg
            font-medium
            leading-[1.1]
            tracking-[-0.03em]
            text-black
            sm:text-xl
            md:text-3xl
            lg:text-4xl
          "
        >
          {item.title}
        </h3>
      </div>

      {/* BOTTOM */}
      <div
        className="
          flex
          items-end
          justify-between
          gap-3
        "
      >
        <div className="min-w-0">
          <p
            className="
              text-[8px]
              font-medium
              tracking-[0.24em]
              text-black/80
              sm:text-[9px]
              md:text-[10px]
            "
          >
            {item.subtitle}
          </p>

          <p
            className="
              mt-1
              max-w-sm
              text-[10px]
              leading-relaxed
              text-black/70
              sm:mt-2
              sm:text-xs
              md:text-sm
            "
          >
            Explore refined lighting designed to bring
            character, warmth and atmosphere to modern
            spaces.
          </p>
        </div>

        <button
          type="button"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            text-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            sm:h-10
            sm:w-10
            md:h-12
            md:w-12
          "
        >
          <FiArrowUpRight
            size={18}
            strokeWidth={1.4}
          />
        </button>
      </div>
    </div>
  </div>
</div>
              );
            }
          )}
        </div>
      </div>

      {/* =====================================================
          DOTS
      ====================================================== */}

      <div className="mt-6 flex items-center justify-center gap-2">
        {collections.map(
          (_, index) => {
            const active =
              index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() =>
                  goToSlide(index)
                }
                disabled={isAnimating}
                aria-label={`Go to collection ${
                  index + 1
                }`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    active
                      ? "w-8 bg-black"
                      : "w-1.5 bg-black/20 hover:bg-black/50"
                  }
                `}
              />
            );
          }
        )}
      </div>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

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
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          shadow-md
          transition-transform
          duration-300
          hover:-translate-y-1
          md:right-10
          md:h-12
          md:w-12
        "
      >
        <FiArrowUpRight
          size={19}
          strokeWidth={1.5}
        />
      </button>
    </section>
  );
}