"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Ceiling Lights",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8nhTiZPwHZzyy4N19AGU90gMFn3eEyuiR-KqwkPuW2G266DlDG1gvkrAqpDOxq83TzN2aLiB4IN8h7KFLYE5XkcGeheoiGSpKpQTblzfkyIQzpg3bEutTaG7D_WCfER8tmM_QFexGNH0jagNFbraEsLyK_s9eJxMZuhNWXwX4c79duMeSm_8oG_V2eASc8HSbuWIUDI-BIUGeIEOQMBdOZvaN0pt0_k9ojaKS3xrBro7B0op_MI61",
  },
  {
    title: "Pendant Lights",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWYWeRJkXYQR8k9NCLYumPu59zX2kI8iq0DnpuITThnH2-Z_B8KvVw9T4WvOglHDtdotIzq7XWZX09u5QrNFxOp8YMH7R2DRMYzs4RFWIIM-Id7fNo7S0vDShlGRG7yPqTViRiqwcYdr9xDXg_nYDh-RdEGUl2rL7_ud0injFwqiYWbaI1pXVZvSlfgMsWCjgfcXTdf9EzSrQS7P1xZ8mkvd4ekmNLLyfR0bLtJWf3RRxuHLdjpZcN",
  },
  {
    title: "Wall Lights",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8nhTiZPwHZzyy4N19AGU90gMFn3eEyuiR-KqwkPuW2G266DlDG1gvkrAqpDOxq83TzN2aLiB4IN8h7KFLYE5XkcGeheoiGSpKpQTblzfkyIQzpg3bEutTaG7D_WCfER8tmM_QFexGNH0jagNFbraEsLyK_s9eJxMZuhNWXwX4c79duMeSm_8oG_V2eASc8HSbuWIUDI-BIUGeIEOQMBdOZvaN0pt0_k9ojaKS3xrBro7B0op_MI61",
  },
  {
    title: "Table Lamps",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU2sNi7WvYnOuSMD9HeP3EbSHCFCn31iX28JQFtYF8qL1wKBNWMUZ2qdbe57xeWp45VZAJ_12raC2xDPhf_qjtRv0yfMDW9_QS9ePkaUAQc35P0DmFAfUv1MDcHYoVQIjSdpIYM_1xeS_Wl-JA466YKzh_iEgH4yZem4HkB2DSwwS1Ray7MzN5LxA1k_yW6iBQGTMPxmdFetkOsnFhUkOQ8LHIRtb7fzilGfqdWru1QKxaoYn8e-F1",
  },
  {
    title: "Floor Lamps",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWYWeRJkXYQR8k9NCLYumPu59zX2kI8iq0DnpuITThnH2-Z_B8KvVw9T4WvOglHDtdotIzq7XWZX09u5QrNFxOp8YMH7R2DRMYzs4RFWIIM-Id7fNo7S0vDShlGRG7yPqTViRiqwcYdr9xDXg_nYDh-RdEGUl2rL7_ud0injFwqiYWbaI1pXVZvSlfgMsWCjgfcXTdf9EzSrQS7P1xZ8mkvd4ekmNLLyfR0bLtJWf3RRxuHLdjpZcN",
  },
  {
    title: "LED Collection",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU2sNi7WvYnOuSMD9HeP3EbSHCFCn31iX28JQFtYF8qL1wKBNWMUZ2qdbe57xeWp45VZAJ_12raC2xDPhf_qjtRv0yfMDW9_QS9ePkaUAQc35P0DmFAfUv1MDcHYoVQIjSdpIYM_1xeS_Wl-JA466YKzh_iEgH4yZem4HkB2DSwwS1Ray7MzN5LxA1k_yW6iBQGTMPxmdFetkOsnFhUkOQ8LHIRtb7fzilGfqdWru1QKxaoYn8e-F1",
  },
];

export default function ShopByCategory() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const titlesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const images = imagesRef.current;
      const titles = titlesRef.current;

      /*
       * Keep everything hidden initially.
       * Nothing animates when the page first loads.
       */

      gsap.set(cards, {
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(images, {
        scale: 1.12,
      });

      gsap.set(titles, {
        opacity: 0,
        y: 25,
      });

      /*
       * Animation starts ONLY when the section
       * reaches 80% of the viewport.
       */

      const tl = gsap.timeline({
        paused: true,
      });

      // Cards appear
      tl.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
      });

      // Images smoothly reveal
      tl.to(
        images,
        {
          scale: 1,
          duration: 1.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Titles come upward
      tl.to(
        titles,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=1"
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,

        // Animation starts when the section
        // reaches 80% from the top
        start: "top 80%",

        // Only play once
        once: true,

        onEnter: () => {
          tl.play();
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-6 font-serif md:py-14"
      data-purpose="shop-by-category"
    >
      <div className="container mx-auto px-8 lg:px-20">

        {/* ================= HEADER ================= */}

        <div className="mb-16 text-center">
          <h2 className="serif-text mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Shop by Category
          </h2>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            Curated Collections for Every Space
          </p>
        </div>

        {/* ================= CATEGORY GRID ================= */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                group
                relative
                aspect-square
                cursor-pointer
                overflow-hidden
              "
            >
              {/* IMAGE */}

              <div
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
                style={{
                  backgroundImage: `url("${category.image}")`,
                }}
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                  transition-colors
                  duration-500
                  group-hover:bg-[#85a30f]/40
                "
              />

              {/* TITLE */}

              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  ref={(el) => {
                    titlesRef.current[index] = el;
                  }}
                  className="
                    serif-text
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}