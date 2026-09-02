"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const initialFormData = {
    name: "",
    product: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const payload = {
        platform: "Altius Elstrong form",
        platformEmail: "altus@email.com",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        product: formData.product,
        message: formData.message || "N/A",
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setStatus("Your enquiry has been submitted successfully!");
        setStatusType("success");

        setFormData(initialFormData);
      } else {
        setStatus(data?.message || "Submission failed. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // IMAGE REVEAL
      tl.to(imageWrapperRef.current, {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.65,
        ease: "power3.out",
      })

        // IMAGE SCALE
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
          "-=0.55"
        )

        // RIGHT CONTENT
        .to(
          contentRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.45"
        )

        // EYEBROW
        .to(
          ".form-eyebrow",
          {
            y: 0,
            opacity: 1,
            duration: 0.22,
            ease: "power2.out",
          },
          "-=0.25"
        )

        // HEADING
        .to(
          ".form-heading",
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.1"
        )

        // FORM FIELDS
        .to(
          ".form-field",
          {
            y: 0,
            opacity: 1,
            duration: 0.22,
            stagger: 0.035,
            ease: "power2.out",
          },
          "-=0.12"
        )

        // BUTTON
        .to(
          ".form-submit",
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.08"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-10 md:py-14"
      data-purpose="requirements-section"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* LEFT - IMAGE */}
          <div
            ref={imageWrapperRef}
            className="
              group
              h-[400px]
              overflow-hidden
              rounded-lg
              will-change-transform
              md:h-[520px]
            "
          >
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1668255310325-20c3929913e2?q=80&w=880&auto=format&fit=crop"
              alt="Luxury Table Lamp"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          {/* RIGHT - FORM */}
          <div
            ref={contentRef}
            className="
              relative
              flex
              flex-col
              overflow-hidden
              rounded
              border-4
              border-[#6d8508]
              border-t-[#a8c52a]
              px-5
              py-8
              shadow-[-5px_5px_0px_#4f6205]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:shadow-[-7px_7px_0px_#4f6205]
              active:translate-y-[2px]
              active:shadow-[-3px_3px_0px_#4f6205]
              md:px-8
            "
          >
            {/* DECORATIVE ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={150}
              height={150}
              className="pointer-events-none absolute right-[-15px] top-0 opacity-20 md:right-0"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#85a30f"
                d="M434.452 904.856c0 30.647 24.843 55.49 55.489 55.49h36.993c30.647 0 55.49-24.843 55.49-55.49V886.36H434.452v18.496zm73.986-832.342c-173.66 0-314.44 140.78-314.44 314.44 0 95.368 42.457 180.82 109.499 238.486 41.118 35.365 130.955 223.926 130.955 223.926h147.972s89.893-188.849 130.128-223.219c67.521-57.672 110.326-143.433 110.326-239.193.001-173.659-140.78-314.44-314.44-314.44zm180.101 524.718C653.037 627.509 573.72 812.374 573.72 812.374h-46.785V579.401l87.181-87.181c7.173-7.175 7.173-18.805 0-25.978-7.173-7.173-18.804-7.173-25.978 0l-79.61 79.61-107.895-107.895c-7.225-7.225-18.935-7.225-26.158 0-7.225 7.223-7.225 18.933 0 26.158l112.292 112.292c.981.981 2.05 1.817 3.174 2.531v233.436h-46.785s-79.269-184.61-115.548-215.765c-59.157-50.801-96.618-126.079-96.618-210.094 0-152.986 124.217-277.007 277.447-277.007s277.447 124.021 277.447 277.007c.002 84.358-37.768 159.911-97.345 210.717z"
              />
            </svg>

            {/* HEADING */}
            <div className="relative z-10 mb-8">
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

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6"
            >
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

                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
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
                      focus:border-black
                    "
                  >
                    <option value="">Select Product</option>
                    <option value="Concealed Light">
                      Concealed Light
                    </option>
                    <option value="COB Lens Model">
                      COB Lens Model
                    </option>
                    <option value="LED Slim Panel">
                      LED Slim Panel
                    </option>
                    <option value="Striker">
                      Striker
                    </option>
                    <option value="PC Panel">
                      PC Panel
                    </option>
                  </select>
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

              {/* MESSAGE */}
              <div className="form-field flex flex-col">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-gray-500
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  rows={3}
                  className="
                    resize-none
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

              {/* SUBMIT */}
              <div className="form-submit pt-2">
                <button
                  type="submit"
                  disabled={loading}
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                {/* STATUS MESSAGE */}
                {status && (
                  <p
                    className={`mt-4 text-sm font-medium ${
                      statusType === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}