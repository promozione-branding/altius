"use client";

import React, { useLayoutEffect, useRef } from "react";
import { FiPhone, FiMessageCircle, FiFileText } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA2() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headingLines =
        headingRef.current.querySelectorAll(".heading-line");

      const buttons =
        buttonsRef.current.querySelectorAll(".cta-button");

      // Initial states
      gsap.set(bgRef.current, {
        scale: 1.12,
      });

      gsap.set(headingLines, {
        y: 60,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        y: 25,
        opacity: 0,
      });

      gsap.set(buttons, {
        y: 30,
        opacity: 0,
        scale: 0.95,
      });

      gsap.set(contactRef.current, {
        y: 20,
        opacity: 0,
      });

      // =========================
      // SCROLL TRIGGER ANIMATION
      // =========================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Background
      tl.to(bgRef.current, {
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
      })

        // Heading
        .to(
          headingLines,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=1.3"
        )

        // Description
        .to(
          descriptionRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )

        // Buttons
        .to(
          buttons,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        )

        // Contact
        .to(
          contactRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.25"
        );

      // =========================
      // BUTTON HOVER
      // =========================

      buttons.forEach((button) => {
        const icon = button.querySelector(".cta-icon");

        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            y: -5,
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1.15,
              rotate: -5,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1718221621618-e477ce33485a?q=80&w=1189&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-5 py-14 sm:px-8 lg:px-12">
        <div className="w-full text-center text-white">

          {/* HEADING */}

          <h2
            ref={headingRef}
            className="mx-auto max-w-3xl overflow-hidden text-3xl font-semibold leading-tight sm:text-4xl md:text-[42px]"
          >
            <span className="heading-line block">
              Illuminate Your Space with
            </span>

            <span className="heading-line block font-bold">
              Premium LED Lighting Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            ref={descriptionRef}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base"
          >
            Get expert guidance on the right LED lighting solutions for your
            home, office, commercial space, or architectural project.
          </p>

          {/* BUTTONS */}

          <div
            ref={buttonsRef}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* CALL */}

            <a
              href="tel:+919876543210"
              className="
                cta-button
                flex
                w-full
                max-w-[210px]
                items-center
                justify-center
                gap-2
                border
                border-white/80
                bg-white/10
                px-6
                py-3
                text-sm
                font-medium
                backdrop-blur-sm
                transition-colors
                duration-300
                hover:bg-white
                hover:text-black
                sm:w-auto
              "
            >
              <FiPhone className="cta-icon" size={17} />
              Call for Quote
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="
                cta-button
                flex
                w-full
                max-w-[210px]
                items-center
                justify-center
                gap-2
                border
                border-white/80
                bg-transparent
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
                transition-colors
                duration-300
                hover:border-[#85a30f]
                hover:bg-[#85a30f]
                sm:w-auto
              "
            >
              <FiMessageCircle
                className="cta-icon"
                size={18}
              />
              WhatsApp Us
            </a>

            {/* GET QUOTE */}

            <a
              href="/contact"
              className="
                cta-button
                flex
                w-full
                max-w-[210px]
                items-center
                justify-center
                gap-2
                border
                border-white/80
                bg-white/10
                px-6
                py-3
                text-sm
                font-medium
                backdrop-blur-sm
                transition-colors
                duration-300
                hover:bg-white
                hover:text-black
                sm:w-auto
              "
            >
              <FiFileText
                className="cta-icon"
                size={17}
              />
              Get a Quote
            </a>
          </div>

          {/* CONTACT */}

          <div
            ref={contactRef}
            className="
              mx-auto
              mt-10
              flex
              max-w-3xl
              flex-col
              items-center
              justify-center
              gap-2
              border-t
              border-white/20
              pt-5
              text-xs
              text-white/80
              sm:flex-row
              sm:gap-5
            "
          >
            <a
              href="tel:+919876543210"
              className="transition hover:text-white"
            >
              +91 98765 43210
            </a>

            <span className="hidden h-4 w-px bg-white/30 sm:block" />

            <a
              href="mailto:sales@elstrong.com"
              className="transition hover:text-white"
            >
              sales@elstrong.com
            </a>

            <span className="hidden h-4 w-px bg-white/30 sm:block" />

            <span>
              Premium LED Lighting Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}