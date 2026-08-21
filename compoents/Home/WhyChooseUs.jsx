"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  FaDraftingCompass,
  FaLeaf,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: FaDraftingCompass,
    title: "Expert Design",
    description: "Curated by top interior designers for timeless elegance.",
  },
  {
    icon: FaLeaf,
    title: "Energy Efficiency",
    description: "Advanced LED technology for sustainable, modern living.",
  },
  {
    icon: FaShieldAlt,
    title: "2-Year Warranty",
    description: "Guaranteed quality and peace of mind on all our products.",
  },
  {
    icon: FaHeadset,
    title: "Free Consultation",
    description: "Expert advice tailored to your unique architectural space.",
  },
];

const ledImages = ["/LEDTrackLight1.webp", "/LEDTrackLight2.webp"];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const leftLightRef = useRef(null);
  const rightLightRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(leftLightRef.current, {
        x: -400,
        opacity: 0,
        rotate: -15,
      });

      gsap.set(rightLightRef.current, {
        x: 400,
        opacity: 0,
        rotate: 15,
      });

      const lightTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      lightTl
        // Left light comes from left
        .to(leftLightRef.current, {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power4.out",
        })

        // Right light comes from right
        .to(
          rightLightRef.current,
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8",
        );
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(".why-card", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".why-icon", {
        opacity: 0,
        scale: 0.5,
        rotation: -20,
      });

      gsap.set(".why-title", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".why-description", {
        opacity: 0,
        y: 20,
      });

      // Main animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power3.inOut",
          },
          "-=0.5",
        )
        .to(".why-card", {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power3.out",
        })
        .to(
          ".why-icon",
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .to(
          ".why-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          ".why-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.45",
        );

      // Card hover animations
      const cards = gsap.utils.toArray(".why-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".why-icon");

        const enter = () => {
          gsap.to(card, {
            y: -10,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(icon, {
            scale: 1.12,
            rotation: 5,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._enter = enter;
        card._leave = leave;
      });

      // Cleanup hover listeners
      return () => {
        cards.forEach((card) => {
          card.removeEventListener("mouseenter", card._enter);
          card.removeEventListener("mouseleave", card._leave);
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden relative bg-gray-50 py-10 md:py-16"
      data-purpose="why-choose-us"
    >
      <div ref={leftLightRef} className="absolute -top-13 left-15 z-10">
        <Image
          height={100}
          width={100}
          alt="LED Track Light"
          className="h-60 w-60"
          src="/LEDTrackLight1.webp"
        />
      </div>

      {/* Right Track Light */}
      <div ref={rightLightRef} className="absolute -top-13 right-15 z-10">
        <Image
          height={100}
          width={100}
          alt="LED Track Light"
          className="h-60 w-60"
          src="/LEDTrackLight2.webp"
        />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16">
          <p
            ref={subtitleRef}
            className="mb-3 font-serif text-sm font-semibold uppercase tracking-[0.25em] text-gray-500"
          >
            The Led Solution
          </p>

          <h2
            ref={headingRef}
            className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Why Choose Elstrong
          </h2>

          <div ref={lineRef} className="mx-auto mt-5 h-px w-16 bg-gray-900" />
        </div>

        {/* Features */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-8 font-serif sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="why-card group flex flex-col items-center px-5 py-8 text-center will-change-transform"
              >
                {/* Icon */}
                <div
                  className="
                    why-icon
                    mb-6
                    flex h-16 w-16
                    items-center justify-center
                    rounded-full
                    border border-gray-200
                    bg-white
                    text-gray-800
                    shadow-sm
                    transition-colors
                    duration-300
                    group-hover:border-[#85a30f]
                    group-hover:bg-white
                    group-hover:text-[#85a30f]
                    will-change-transform
                  "
                >
                  <Icon className="text-2xl" />
                </div>

                {/* Title */}
                <h3 className="why-title mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="why-description max-w-xs text-sm  text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
