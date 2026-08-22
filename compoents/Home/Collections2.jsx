"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

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

  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const cardsRef = useRef([]);

  const activeIndexRef = useRef(0);
  const animationRef = useRef(null);
  const scrollTriggerRef = useRef(null);

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
        x: 0,
        scale: 1,
        opacity: 1,
        z: 50,
      };
    }

    if (distance === 1) {
      return {
        y: -24,
        x: 0,
        scale: 0.985,
        opacity: 0.95,
        z: 40,
      };
    }

    if (distance === 2) {
      return {
        y: -48,
        x: 0,
        scale: 0.97,
        opacity: 0.9,
        z: 30,
      };
    }

    if (distance === 3) {
      return {
        y: -72,
        x: 0,
        scale: 0.955,
        opacity: 0.82,
        z: 20,
      };
    }

    return {
      y: -90,
      x: 0,
      scale: 0.94,
      opacity: 0,
      z: 1,
    };
  };

  /*
  ============================================================
  SET STACK
  ============================================================
  */

  const setStack = (index) => {
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, cardIndex) => {
      const position = getStackPosition(cardIndex, index);

      gsap.set(card, {
        y: position.y,
        x: position.x,
        scale: position.scale,
        opacity: position.opacity,
        zIndex: position.z,
      });
    });
  };

  /*
  ============================================================
  CHANGE CARD
  ============================================================
  */

  const changeCard = (newIndex, direction = "next") => {
    const currentIndex = activeIndexRef.current;

    if (newIndex === currentIndex) return;

    const currentCard = cardsRef.current[currentIndex];
    const nextCard = cardsRef.current[newIndex];

    if (!currentCard || !nextCard) return;

    if (animationRef.current) {
      animationRef.current.kill();
    }

    setIsAnimating(true);

    /*
    ----------------------------------------
    NEXT
    ----------------------------------------
    */

    if (direction === "next") {
      /*
        New card starts below.
      */

      gsap.set(nextCard, {
        y: 500,
        x: 0,
        scale: 0.94,
        opacity: 0,
        zIndex: 60,
      });

      /*
        Current card moves upward.
      */

      animationRef.current = gsap.timeline({
        onComplete: () => {
          activeIndexRef.current = newIndex;
          setActiveIndex(newIndex);
          setIsAnimating(false);

          setStack(newIndex);
        },
      });

      animationRef.current.to(currentCard, {
        y: -140,
        scale: 0.96,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });

      animationRef.current.to(
        nextCard,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.38"
      );
    }

    /*
    ----------------------------------------
    PREVIOUS
    ----------------------------------------
    */

    else {
      /*
        Previous card starts above.
      */

      gsap.set(nextCard, {
        y: -140,
        x: 0,
        scale: 0.94,
        opacity: 0,
        zIndex: 60,
      });

      animationRef.current = gsap.timeline({
        onComplete: () => {
          activeIndexRef.current = newIndex;
          setActiveIndex(newIndex);
          setIsAnimating(false);

          setStack(newIndex);
        },
      });

      animationRef.current.to(currentCard, {
        y: 140,
        scale: 0.96,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });

      animationRef.current.to(
        nextCard,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.38"
      );
    }
  };

  /*
  ============================================================
  INITIAL STACK + SCROLLTRIGGER
  ============================================================
  */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /*
      Initial card positions
      */

      setStack(0);

      /*
      --------------------------------------------------------
      SCROLLTRIGGER
      --------------------------------------------------------
      */

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,

        /*
          Pin the entire section while scrolling.
        */

        pin: true,

        /*
          Increase this value if you want more scroll
          distance between each card.
        */

        end: "+=3000",

        scrub: false,

        /*
        ------------------------------------------------------
        ON SCROLL
        ------------------------------------------------------
        */

        onUpdate: (self) => {
          const progress = self.progress;

          /*
            Convert scroll progress into card index.

            0.00 - 0.24  = card 1
            0.25 - 0.49  = card 2
            0.50 - 0.74  = card 3
            0.75 - 1.00  = card 4
          */

          const newIndex = Math.min(
            collections.length - 1,
            Math.floor(progress * collections.length)
          );

          const currentIndex = activeIndexRef.current;

          if (newIndex === currentIndex) return;

          const direction =
            newIndex > currentIndex ? "next" : "prev";

          changeCard(newIndex, direction);
        },
      });
    }, section);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      ctx.revert();
    };
  }, []);

  /*
  ============================================================
  NEXT BUTTON
  ============================================================
  */

  const nextSlide = () => {
    if (isAnimating) return;

    const current = activeIndexRef.current;

    const next =
      (current + 1) % collections.length;

    changeCard(next, "next");
  };

  /*
  ============================================================
  PREVIOUS BUTTON
  ============================================================
  */

  const prevSlide = () => {
    if (isAnimating) return;

    const current = activeIndexRef.current;

    const previous =
      (current - 1 + collections.length) %
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

    const current = activeIndexRef.current;

    if (index === current) return;

    const direction =
      index > current ? "next" : "prev";

    /*
      Move ScrollTrigger progress to the
      correct card position.

      This keeps the scrollbar and card
      position synchronized.
    */

    if (scrollTriggerRef.current) {
      const progress =
        index / collections.length + 0.01;

      const scrollPosition =
        scrollTriggerRef.current.start +
        (scrollTriggerRef.current.end -
          scrollTriggerRef.current.start) *
          progress;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }

    changeCard(index, direction);
  };

  /*
  ============================================================
  RENDER
  ============================================================
  */

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        min-h-[1000px]
        w-full
        flex-col
        justify-start
        overflow-hidden
        bg-[#f8f8f6]
        px-4
        py-16
        md:px-8
        md:py-14
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="mb-10 px-4 text-center md:mb-14">
        <div className="split-title mb-15 ">
          <h2 className="split-title__text">
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
        ref={stackRef}
        className="
          relative
          mx-auto
          h-[500px]
          w-full
          max-w-[1250px]
          md:h-[360px]
          
        "
      >
        {/* ===================================================
            LEFT ARROW
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
            RIGHT ARROW
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
          {collections.map((item, index) => {
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
                  zIndex: isActive
                    ? 50
                    : 40 - index,
                }}
              >
                <div className="grid h-full grid-cols-1 md:grid-cols-[42%_58%]">
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative h-[52%] overflow-hidden md:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-1000
                        ease-out
                      "
                    />

                    <div className="absolute inset-0 bg-black/[0.03]" />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      relative
                      flex
                      h-[48%]
                      flex-col
                      justify-between
                      bg-white
                      p-7
                      sm:p-9
                      md:h-full
                      md:p-12
                      lg:p-16
                    "
                  >
                    {/* TOP */}

                    <div>
                      <p
                        className="
                          mb-5
                          text-[9px]
                          font-medium
                          tracking-[0.28em]
                          text-black/90
                          md:text-[10px]
                        "
                      >
                        0{index + 1} / 0{collections.length}
                      </p>

                      <h3
                        className="
                          max-w-md
                          text-xl
                          font-medium
                          leading-[1.1]
                          tracking-[-0.03em]
                          text-black
                          sm:text-2xl
                          md:text-4xl
                          lg:text-5xl
                        "
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* BOTTOM */}

                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p
                          className="
                            text-[9px]
                            font-medium
                            tracking-[0.24em]
                            text-black/95
                            md:text-[10px]
                          "
                        >
                          {item.subtitle}
                        </p>

                        <p
                          className="
                            mt-3
                            max-w-sm
                            text-xs
                            leading-relaxed
                            text-black/90
                            md:text-sm
                          "
                        >
                          Explore refined lighting designed
                          to bring character, warmth and
                          atmosphere to modern spaces.
                        </p>
                      </div>

                      <button
                        type="button"
                        className="
                          flex
                          h-11
                          w-11
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
                          md:h-14
                          md:w-14
                        "
                      >
                        <FiArrowUpRight
                          size={20}
                          strokeWidth={1.4}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          DOTS
      ====================================================== */}

      <div className="mt-7 flex items-center justify-center gap-2 md:mt-9">
        {collections.map((_, index) => {
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
              aria-label={`Go to collection ${index + 1}`}
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
        })}
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
          bottom-8
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