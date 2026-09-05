
"use client";

import PopupForm from "@/compoents/PopupForm";
import React, { useState } from "react";
import axios from "axios";
import { FaLightbulb } from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiMail,
  FiArrowUpRight,
  FiSend,
} from "react-icons/fi";

export default function ContactClient() {
  const [open, setOpen] = useState(false);

  // =========================
  // CONTACT FORM STATE
  // =========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove previous status when user starts typing
    if (status) {
      setStatus("");
      setStatusType("");
    }
  };

  // =========================
  // SUBMIT FORM
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const payload = {
        platform: "Altius Elstrong Contact Form",
        platformEmail: "altus@email.com",

        name: formData.name,
        phone: formData.phone,
        email: formData.email,

        product: formData.product || "N/A",

        message: formData.message || "N/A",

        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setStatus("Your message has been sent successfully!");
        setStatusType("success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
      } else {
        setStatus(
          data?.message || "Submission failed. Please try again."
        );
        setStatusType("error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);

      setStatus(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );

      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          HERO / CTA
      ====================================================== */}
      <section className="relative mt-20 bg-gray-300/40 px-6 py-6 md:px-12 md:py-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          transform="rotate(180)"
          viewBox="0 0 512 512"
          width={218}
          height={218}
          className="icon flat-color absolute bottom-0 left-6 size-20 md:size-50"
        >
          <path
            d="M331.19 0h148.327v36.3c0 14.208-11.518 25.727-25.727 25.727h-96.872c-14.208 0-25.727-11.518-25.727-25.727V0h-.001z"
            style={{
              fill: "#3e3b4",
            }}
          />

          <path
            d="M456.77 265.893c-7.403-19.117-19.243-35.204-33.886-47.546V62.028H387.82v135.883c-26.073-9.689-55.653-10.255-83.633.577L282 207.078l85.176 219.986 22.187-8.59c60.749-23.52 90.928-91.832 67.407-152.581z"
            style={{
              fill: "#85a30f",
            }}
          />

          <path
            d="m240.274 261.396 80.129 206.952 54.577-21.132-101.756-262.807-54.577 21.131z"
            style={{
              fill: "#3e3b4",
            }}
          />

          <path
            d="m274.903 263.445 66.818 172.573 41.429-16.041-84.852-219.15-41.429 16.041z"
            style={{
              opacity: 0.24,
              fill: "#3e3b4",
              enableBackground: "new",
            }}
          />

          <path
            d="M169.558 382.68a7.72 7.72 0 0 1-2.776-14.924l29.822-11.484a7.72 7.72 0 0 1 5.548 14.406l-29.822 11.484a7.702 7.702 0 0 1-2.772.518zM100.29 409.354a7.72 7.72 0 0 1-2.776-14.924l33.734-12.991a7.719 7.719 0 0 1 5.548 14.406l-33.734 12.991a7.706 7.706 0 0 1-2.772.518zM125.352 318.671a7.719 7.719 0 0 1-7.671-6.956 7.718 7.718 0 0 1 6.917-8.444l27.415-2.724a7.714 7.714 0 0 1 8.444 6.917 7.718 7.718 0 0 1-6.917 8.444l-27.415 2.724c-.26.025-.518.039-.773.039zM40.193 327.137a7.72 7.72 0 0 1-.754-15.4l39.834-3.96a7.718 7.718 0 1 1 1.527 15.361l-39.834 3.96a8.05 8.05 0 0 1-.773.039zM169.562 467.751a7.718 7.718 0 0 1-4.679-13.861l27.441-20.877a7.72 7.72 0 0 1 9.346 12.286l-27.441 20.877a7.694 7.694 0 0 1-4.667 1.575zM111.399 512a7.718 7.718 0 0 1-4.679-13.861l32.762-24.925a7.718 7.718 0 1 1 9.346 12.286l-32.762 24.925a7.69 7.69 0 0 1-4.667 1.575z"
            style={{
              fill: "#85a30f",
            }}
          />

          <path
            d="M387.823 51.457h35.063v48.027h-35.063z"
            style={{
              opacity: 0.29,
              fill: "#3e3b4",
              enableBackground: "new",
            }}
          />
        </svg>

        <div className="mx-auto flex max-w-[1440px] flex-col items-center py-15 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#85a30f]">
            Contact Our Expert
          </p>

          <h1 className="max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.04em] text-black sm:text-6xl md:text-7xl lg:text-[82px]">
            Let&apos;s Illuminate
            <span className="block text-[#85a30f]">Your Space.</span>
          </h1>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-9 flex items-center justify-center gap-2 rounded-full bg-[#85a30f] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-black md:px-8 md:text-lg"
          >
            Get Lights
            <FaLightbulb />
          </button>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section className="bg-white px-5 py-6 sm:px-8 md:px-12 md:py-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

            {/* =====================================================
                LEFT — CONTACT FORM
            ====================================================== */}
            <div className="shadow-2xl lg:sticky lg:top-24 lg:col-span-7 lg:self-start">
              <div className="rounded-2xl border border-black/[0.07] bg-[#fafafa] p-4 md:p-7">

                {/* Label */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#85a30f]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#85a30f]">
                    Get In Touch
                  </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl">
                  Send Us a{" "}
                  <span className="text-[#85a30f]">Message.</span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-5 text-black sm:text-lg">
                  Have a lighting project in mind? Tell us what you&apos;re
                  looking for and our team will help you find the right
                  lighting solution for your space.
                </p>

                {/* =====================================================
                    FORM
                ====================================================== */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-5 md:space-y-7"
                >

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-black"
                      >
                        Your Name *
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full border-0 border-b border-black bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-black/30 transition-colors duration-300 focus:border-[#85a30f] disabled:opacity-60"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-black"
                      >
                        Your Email *
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full border-0 border-b border-black bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-black/30 transition-colors duration-300 focus:border-[#85a30f] disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-black"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      disabled={loading}
                      className="w-full border-0 border-b border-black bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-black/30 transition-colors duration-300 focus:border-[#85a30f] disabled:opacity-60"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="contact-product"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-black"
                    >
                      Project Type *
                    </label>

                    <select
                      id="contact-product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full border-0 border-b border-black bg-transparent px-0 py-3 text-sm text-black outline-none transition-colors duration-300 focus:border-[#85a30f] disabled:opacity-60"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      <option value="Residential Lighting">
                        Residential Lighting
                      </option>

                      <option value="Commercial Lighting">
                        Commercial Lighting
                      </option>

                      <option value="Architectural Lighting">
                        Architectural Lighting
                      </option>

                      <option value="Outdoor Lighting">
                        Outdoor Lighting
                      </option>

                      <option value="Custom Lighting Solution">
                        Custom Lighting Solution
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-black/50"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your lighting project..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full resize-y rounded-xl border border-black bg-white p-4 text-sm leading-7 text-black outline-none placeholder:text-black/30 transition-colors duration-300 focus:border-[#85a30f] disabled:opacity-60"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#85a30f] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? "Sending..." : "Send Message"}

                      {!loading && (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
                          <FiSend size={14} />
                        </span>
                      )}
                    </button>
                  </div>

                  {/* SUCCESS / ERROR */}
                  {status && (
                    <div
                      className={`rounded-lg px-4 py-3 text-sm font-medium ${
                        statusType === "success"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* =====================================================
                RIGHT SIDE
            ====================================================== */}
            <div className="flex flex-col gap-8 lg:col-span-5">

              {/* MAP */}
              <div className="group relative h-[380px] overflow-hidden rounded-2xl bg-[#eeeeee] sm:h-[450px] lg:h-[500px]">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed"
                  className="absolute inset-0 h-full w-full border-0 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

                {/* Location Badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#85a30f] text-white">
                    <FiMapPin size={19} />
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Visit Us
                    </p>

                    <p className="text-sm font-semibold text-black">
                      New Delhi, India
                    </p>
                  </div>
                </div>

                {/* Open Map */}
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open map"
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:bg-[#85a30f] hover:text-white"
                >
                  <FiArrowUpRight size={18} />
                </a>
              </div>

              {/* CONTACT INFO */}
              <div className="rounded-2xl bg-black p-7 text-white sm:p-9 lg:p-10">

                <div className="mb-8">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#85a30f]">
                    Contact Information
                  </p>

                  <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                    We&apos;re here{" "}
                    <span className="text-[#85a30f]">to help.</span>
                  </h3>

                  <p className="mt-4 text-base leading-6 text-white/80">
                    Whether you need product information, project assistance,
                    or a customized lighting solution, our team is ready to
                    assist you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-7">

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#85a30f]/15 text-[#85a30f]">
                      <FiMapPin size={18} />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-white">
                        Address
                      </h4>

                      <p className="text-base leading-6 text-white/80">
                        F-185, Sector-3, DSIISC, Bawana Industrial Area,
                        <br />
                        New Delhi, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#85a30f]/15 text-[#85a30f]">
                      <FiPhone size={18} />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-white">
                        Phone
                      </h4>

                      <a
                        href="tel:+919650167709"
                        className="text-base text-white/80 transition-colors hover:text-[#85a30f]"
                      >
                        +91 96501 67709
                      </a>
                    </div>
                  </div>

                  {/* Open Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#85a30f]/15 text-[#85a30f]">
                      <FiClock size={18} />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-white">
                        Open Hours
                      </h4>

                      <p className="text-base leading-6 text-white/80">
                        Monday – Friday · 09:30 – 17:30
                        <br />
                        Saturday · 10:00 – 15:00
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#85a30f]/15 text-[#85a30f]">
                      <FiMail size={18} />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-white">
                        Email
                      </h4>

                      <a
                        href="mailto:altiuslightings@gmail.com"
                        className="text-base text-white/80 transition-colors hover:text-[#85a30f]"
                      >
                        altiuslightings@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-9 border-t border-white/10 pt-6">
                  <p className="text-sm leading-5 text-white/75">
                    Looking for a specific LED product or need help choosing
                    the right solution? Get in touch with our lighting experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POPUP FORM
      ====================================================== */}
      {open && (
        <PopupForm
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

