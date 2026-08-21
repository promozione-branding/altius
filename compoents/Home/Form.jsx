"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    email: "",
    phone: "",
  });

  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =================================
         INITIAL STATES
      ================================= */

      // IMAGE
      gsap.set(imageWrapperRef.current, {
        y: 70,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      // RIGHT CONTENT
      gsap.set(contentRef.current, {
        x: -35,
        opacity: 0,
      });

      // EYEBROW
      gsap.set(".form-eyebrow", {
        y: 15,
        opacity: 0,
      });

      // HEADING
      gsap.set(".form-heading", {
        y: 25,
        opacity: 0,
      });

      // FORM FIELDS
      gsap.set(".form-field", {
        y: 15,
        opacity: 0,
      });

      // BUTTON
      gsap.set(".form-submit", {
        y: 15,
        opacity: 0,
      });

      /* =================================
         FAST MAIN TIMELINE
      ================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /* =================================
         IMAGE REVEAL
      ================================= */

      tl.to(imageWrapperRef.current, {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.65,
        ease: "power3.out",
      })

        /* =================================
           IMAGE SCALE
        ================================= */

        .fromTo(
          imageRef.current,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.55",
        )

        /* =================================
           RIGHT CONTENT
        ================================= */

        .to(
          contentRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.45",
        )

        /* =================================
           EYEBROW
        ================================= */

        .to(
          ".form-eyebrow",
          {
            y: 0,
            opacity: 1,
            duration: 0.22,
            ease: "power2.out",
          },
          "-=0.25",
        )

        /* =================================
           HEADING
        ================================= */

        .to(
          ".form-heading",
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.1",
        )

        /* =================================
           FORM FIELDS
        ================================= */

        .to(
          ".form-field",
          {
            y: 0,
            opacity: 1,
            duration: 0.22,
            stagger: 0.035,
            ease: "power2.out",
          },
          "-=0.12",
        )

        /* =================================
           BUTTON
        ================================= */

        .to(
          ".form-submit",
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.08",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-10 md:py-20"
      data-purpose="requirements-section"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* =================================
              LEFT - IMAGE
          ================================= */}

          <div
            ref={imageWrapperRef}
            className="
              group
              h-[400px]
              overflow-hidden
              rounded-lg
              will-change-transform
              md:h-[450px]
            "
          >
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1668255310325-20c3929913e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Table Lamp"
              className="
                h-full
                min-h-[400px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
                md:min-h-[450px]
              "
            />
          </div>

          {/* =================================
              RIGHT - FORM
          ================================= */}

          <div
            ref={contentRef}
            className="
              flex
              flex-col
              will-change-transform
            "
          >
            {/* =================================
                HEADING
            ================================= */}

            <div className="mb-8">
              <span
                className="
                  form-eyebrow
                  mb-3
                  block
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                "
              >
                Get in touch
              </span>

              <h2
                className="
                  form-heading
                  font-serif
                  text-4xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  md:text-5xl
                "
              >
                Send your requirements
              </h2>
            </div>

            {/* =================================
                FORM
            ================================= */}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME + PRODUCT */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* NAME */}
                <div className="form-field flex flex-col">
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>

                {/* PRODUCT */}
                <div className="form-field flex flex-col">
                  <label
                    htmlFor="product"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Product
                  </label>

                  <input
                    id="product"
                    name="product"
                    type="text"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* EMAIL */}
                <div className="form-field flex flex-col">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>

                {/* PHONE */}
                <div className="form-field flex flex-col">
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9999999999"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>
              </div>

              {/* =================================
                  SUBMIT
              ================================= */}

              <div className="form-submit pt-4">
                <button
                  type="submit"
                  className="
                    bg-black
                    px-10
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    duration-300
                    hover:bg-gray-800
                    hover:px-12
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
