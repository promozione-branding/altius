"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);

  const stringRef = useRef(null);
  const handleRef = useRef(null);
  const glowRef = useRef(null);

  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);

  const subtitleRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // =========================================
      // INITIAL STATES
      // =========================================

      gsap.set(backgroundRef.current, {
        scale: 1.08,
        filter: "brightness(0.2)",
      });

      gsap.set(overlayRef.current, {
        opacity: 0.75,
      });

      // String starts above the screen
      gsap.set(stringRef.current, {
        height: 180,
        y: -160,
        transformOrigin: "top center",
      });

      // Bulb starts completely outside viewport
      gsap.set(handleRef.current, {
        y: -250,
        scale: 0.9,
        opacity: 1,
      });

      // Glow starts hidden
      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.2,
      });

      // Text starts hidden
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 30,
      });

      // =========================================
      // 1. BULB ENTERS FROM OUTSIDE SCREEN
      // =========================================

      tl.to({}, {
        duration: 0.5,
      });

      tl.to(stringRef.current, {
        y: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      tl.to(
        handleRef.current,
        {
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        "<",
      );

      // =========================================
      // 2. BULB BOUNCE
      // =========================================

      tl.to(handleRef.current, {
        y: 18,
        duration: 0.18,
        ease: "power2.in",
      });

      tl.to(handleRef.current, {
        y: -8,
        duration: 0.18,
        ease: "power2.out",
      });

      tl.to(handleRef.current, {
        y: 4,
        duration: 0.14,
        ease: "power2.inOut",
      });

      tl.to(handleRef.current, {
        y: 0,
        duration: 0.18,
        ease: "power2.out",
      });

      // =========================================
      // 3. SMALL PAUSE
      // =========================================

      tl.to({}, {
        duration: 0.5,
      });

      // =========================================
      // 4. PULL STRING DOWN
      // =========================================

      tl.to(stringRef.current, {
        height: 50,
        duration: 0.75,
        ease: "power3.inOut",
      });

      tl.to(
        handleRef.current,
        {
          y: 70,
          duration: 0.75,
          ease: "power3.inOut",
        },
        "<",
      );

      // =========================================
      // 5. SWITCH BOUNCE
      // =========================================

      tl.to(handleRef.current, {
        scale: 1.15,
        duration: 0.12,
        ease: "power2.out",
      });

      tl.to(handleRef.current, {
        scale: 0.94,
        duration: 0.1,
        ease: "power2.in",
      });

      tl.to(handleRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "back.out(2)",
      });

      // =========================================
      // 6. LIGHT TURNS ON
      // =========================================

      tl.to(
        glowRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.15",
      );

      // =========================================
      // 7. BACKGROUND LIGHTS UP
      // =========================================

      tl.to(
        backgroundRef.current,
        {
          scale: 1,
          filter: "brightness(1)",
          duration: 0.7,
          ease: "power2.out",
        },
        "-=1.1",
      );

      // =========================================
      // 8. OVERLAY FADES
      // =========================================

      tl.to(
        overlayRef.current,
        {
          opacity: 0.22,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1.2",
      );

      // =========================================
      // 9. SUBTITLE
      // =========================================

      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.6",
      );

      // =========================================
      // 10. HEADING
      // =========================================

      tl.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.45",
      );

      // =========================================
      // 11. BUTTONS
      // =========================================

      tl.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power4.out",
        },
        "-=0.4",
      );

      // =========================================
      // 12. REMOVE STRING + BULB
      // =========================================

      tl.to(
        stringRef.current,
        {
          y: -120,
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "+=0.35",
      );

      tl.to(
        handleRef.current,
        {
          y: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "<",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        flex
        w-full
        h-[740px]
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div
          ref={backgroundRef}
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/newbanner.webp')",
          }}
          aria-label="Luxury minimalist living room"
        />

        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
        />
      </div>

      {/* =========================================
          LIGHT GLOW
      ========================================== */}

      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[2]
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-yellow-300/20
          blur-[120px]
        "
      />

      {/* =========================================
          PULL STRING
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[50]
          -translate-x-1/2
        "
      >
        {/* STRING */}

        <div
          ref={stringRef}
          className="
            mx-auto
            w-[2px]
            bg-white/80
            shadow-[0_0_8px_rgba(255,255,255,0.8)]
          "
        />

        {/* BULB */}

        <div
          ref={handleRef}
          className="
            relative
            -mt-1
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-yellow-300
            shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_40px_rgba(250,204,21,0.9),0_0_90px_rgba(250,204,21,0.6)]
          "
        >
          <div
            className="
              h-4
              w-4
              rounded-full
              bg-white
              shadow-[0_0_15px_white,0_0_30px_white]
            "
          />
        </div>
      </div>

      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[1500px]
          items-center
          px-6
          sm:px-10
          lg:px-16
        "
      >
        <div className="max-w-3xl text-left">

          {/* SUBTITLE */}

          <span
            ref={subtitleRef}
            className="
              mb-5
              block
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-white
            "
          >
            Discover the Collection
          </span>

          {/* HEADING */}

          <h1
            ref={headingRef}
            className="
              mb-8
              max-w-3xl
              text-4xl
              font-semibold
              leading-[1.05]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Elevate your interiors
            <br />
            with lighting made
            <br />
            to inspire.
          </h1>

          {/* BUTTONS */}

          <div
            ref={buttonRef}
            className="
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* SHOP NOW */}

            <Link
            href="/products"
              className="
                bg-black
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-widest
                text-white
                transition-all
                duration-300
                hover:bg-[#85a30f]
              "
            >
              Shop Now
            </Link>

            {/* EXPLORE */}

            <Link
            href="/categories"
              className="
                border
                border-white/70
                bg-white/10
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-widest
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}