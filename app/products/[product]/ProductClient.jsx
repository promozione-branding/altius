"use client";

import React, { useState } from "react";
import Link from "next/link";

import CTA2 from "@/compoents/Home/CTA2";

import {
  LuZap,
  LuBatteryCharging,
  LuShieldCheck,
  LuTimer,
  LuThermometer,
  LuLayers,
} from "react-icons/lu";
import PopupForm from "@/compoents/PopupForm";

const relatedProducts = [
  {
    name: "Cylinder Light",
    href: "/products/cylinder-light",
    image: "/product/CylinderLight1.webp",
  },
  {
    name: "Round Slim Panel",
    href: "/products/round-slim-panel",
    image: "/product/roundslim1.webp",
  },
  {
    name: "Tengo Panel",
    href: "/products/sqaure-tengo-panel",
    image: "/product/tengo1.webp",
  },
  {
    name: "Wall Light",
    href: "/products/wall-light",
    image: "/product/wallLight1.webp",
  },
];

export default function ProductClient({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const [selectedWattage, setSelectedWattage] = useState(
    product?.wattages?.[0]?.value || "",
  );

  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </main>
    );
  }

  const selectedWattageData = product.wattages?.find(
    (item) => item.value === selectedWattage,
  );

  return (
    <>
      <main className="mx-auto mt-25 w-full max-w-[1280px] px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <nav className="mb-8 text-base text-gray-500">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-3">
            <li>
              <Link href="/" className="transition-colors hover:text-black">
                Home
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <span>&gt;</span>

              <Link
                href="/products"
                className="transition-colors hover:text-black"
              >
                Products
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <span>&gt;</span>

              <span className="text-gray-900">{product.name}</span>
            </li>
          </ol>
        </nav>

        {/* =====================================================
            PRODUCT SECTION
        ====================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-5">
          {/* =================================================
      IMAGE GALLERY
  ================================================== */}

          <div className="flex flex-col gap-4 md:col-span-5">
            {/* ================= MAIN IMAGE ================= */}

            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gray-50">
              {product.images?.length > 0 ? (
                <img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={`${product.name} image ${selectedImage + 1}`}
                  className="
            h-auto
            w-auto
            max-h-full
            max-w-full
            object-contain
            animate-wattage-change
          "
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                  No image available
                </div>
              )}
            </div>

            {/* ================= THUMBNAILS ================= */}

            {product.images?.length > 0 && (
              <div className="relative w-full">
                {" "}
                {/* Left Arrow */}{" "}
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("product-thumbnails")
                      ?.scrollBy({ left: -200, behavior: "smooth" });
                  }}
                  className=" absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition hover:bg-gray-50 hover:shadow-lg "
                  aria-label="Previous images"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="m15 18-6-6 6-6" />{" "}
                  </svg>{" "}
                </button>{" "}
                {/* Thumbnails */}{" "}
                <div
                  id="product-thumbnails"
                  className=" flex gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-11 py-1 sm:gap-4 scrollbar-hide "
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {" "}
                  {product.images.map((image, index) => {
                    const isSelected = selectedImage === index;
                    return (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        aria-label={`View image ${index + 1}`}
                        aria-pressed={isSelected}
                        className={` relative h-24 w-24 flex-shrink-0 overflow-hidden border bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#85a30f] focus:ring-offset-2 sm:h-28 sm:w-28 ${isSelected ? "border-[#85a30f] ring-1 ring-[#85a30f]" : "border-gray-200 hover:border-[#85a30f]"} `}
                      >
                        {" "}
                        <img
                          src={image}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className=" h-full w-full object-contain  transition-transform duration-300 hover:scale-105 "
                        />{" "}
                      </button>
                    );
                  })}{" "}
                </div>{" "}
                {/* Right Arrow */}{" "}
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("product-thumbnails")
                      ?.scrollBy({ left: 200, behavior: "smooth" });
                  }}
                  className=" absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition hover:bg-gray-50 hover:shadow-lg "
                  aria-label="Next images"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="m9 18 6-6-6-6" />{" "}
                  </svg>{" "}
                </button>{" "}
              </div>
            )}
          </div>

          {/* =================================================
      PRODUCT DETAILS
  ================================================== */}

          <div className="flex flex-col p-6 shadow-2xl sm:p-8 md:col-span-7 md:p-10">
            {/* ================= TITLE ================= */}

            <div className="mb-4 flex items-start justify-between gap-4">
              <h1 className="inter text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            {/* ================= DESCRIPTION ================= */}

            {product.shortDescription && (
              <p className="mb-7 max-w-xl text-sm leading-6 text-gray-600 sm:text-lg">
                {product.shortDescription}
              </p>
            )}

            {/* ================= KEY FEATURES ================= */}

            {product.features?.length > 0 && (
              <div className="mb-10 border-t border-gray-200 pt-6">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                  Key Features
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.features.map((feature, index) => {
                    const icons = [
                      LuZap,
                      LuTimer,
                      LuShieldCheck,
                      LuLayers,
                      LuBatteryCharging,
                    ];

                    const Icon = icons[index % icons.length];

                    return (
                      <div
                        key={`${feature.title}-${index}`}
                        className="flex items-start gap-3"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-white">
                          <Icon size={21} />
                        </div>

                        <div className="flex min-h-10 items-center">
                          <p className="text-sm font-medium text-gray-900">
                            {feature.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================= WATTAGE ================= */}

            {product.wattages?.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                  Available Wattage
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {product.wattages.map((watt) => {
                    const isSelected = selectedWattage === watt.value;

                    return (
                      <button
                        key={watt.value}
                        type="button"
                        onClick={() => {
                          setSelectedWattage(watt.value);
                        }}
                        aria-pressed={isSelected}
                        className={`
                  relative
                  flex
                  h-[76px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  border
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#85a30f]
                  focus:ring-offset-2
                  ${
                    isSelected
                      ? "border-[#85a30f] bg-[#85a30f] text-white shadow-md"
                      : "border-gray-200 bg-white text-gray-900 hover:border-[#85a30f] hover:shadow-sm"
                  }
                `}
                      >
                        {/* Selected Indicator */}

                        {isSelected && (
                          <span
                            className="
                      absolute
                      right-2.5
                      top-2.5
                      h-2
                      w-2
                      rounded-full
                      bg-white
                    "
                          />
                        )}

                        {/* Wattage */}

                        <span className="text-lg font-semibold">
                          {watt.value}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================= ACTIONS ================= */}

            <div className="mb-8 mt-auto flex flex-col gap-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* ================= GET QUOTE ================= */}

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="
            flex
            h-12
            items-center
            justify-center
            border
            border-black
            px-4
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-black
            transition-all
            duration-300
            hover:border-[#85a30f]
            hover:bg-[#85a30f]
            hover:text-white
          "
                >
                  Get Quote
                </button>

                {/* ================= WHATSAPP ================= */}

                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(
                    `Hello, I am interested in ${product.name}${
                      selectedWattage ? ` (${selectedWattage})` : ""
                    }${
                      selectedWattageData?.price
                        ? ` priced at ₹${selectedWattageData.price}`
                        : ""
                    }.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            border
            border-black
            px-4
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-black
            transition-all
            duration-300
            hover:border-[#85a30f]
            hover:bg-[#85a30f]
            hover:text-white
          "
                >
                  WhatsApp
                </a>
              </div>

              {/* ================= BROCHURE ================= */}

              <a
                href="/brochure/product-brochure.pdf"
                download
                className="
          flex
          h-12
          w-full
          items-center
          justify-center
          bg-black
          px-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white
          transition-all
          duration-300
          hover:bg-[#85a30f]
        "
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRODUCT TABS
        ====================================================== */}

        <section className="mb-20">
          {/* ================= TAB BUTTONS ================= */}

          <div className="mb-10 flex overflow-x-auto border-b border-gray-200">
            <button
              onClick={() => setActiveTab("description")}
              className={`
                flex-shrink-0
                border-b-2
                px-5
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                transition
                sm:px-8
                ${
                  activeTab === "description"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }
              `}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("shipping")}
              className={`
                flex-shrink-0
                border-b-2
                px-5
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                transition
                sm:px-8
                ${
                  activeTab === "shipping"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }
              `}
            >
              Shipping & Return
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`
                flex-shrink-0
                border-b-2
                px-5
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                transition
                sm:px-8
                ${
                  activeTab === "reviews"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }
              `}
            >
              Customer Reviews
            </button>
          </div>

          {/* =================================================
              DESCRIPTION TAB
          ================================================== */}

          {activeTab === "description" && (
            <section className="w-full bg-white py-12 md:py-5">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* ================= LEFT CONTENT ================= */}

                  <div className="space-y-14">
                    {/* PRODUCT OVERVIEW */}

                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-black">
                        Product Overview
                      </h2>

                      <p className="text-sm leading-6 text-black sm:text-base">
                        {product.description}
                      </p>
                    </div>

                    {/* KEY FEATURES */}

                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                        Key Features
                      </h2>

                      <ul className="space-y-4 text-sm leading-6 text-black sm:text-base">
                        {product.features?.map((feature, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#85a30f]" />

                            <span>
                              <strong className="font-medium text-gray-900 underline">
                                {feature.title}:
                              </strong>{" "}
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SPECIFICATIONS */}

                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                        Specifications
                      </h2>

                      <p className="mb-5 text-sm leading-6 text-black sm:text-base">
                        Detailed specifications of this LED lighting product.
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {Object.entries(product.specifications || {}).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="
                              border
                              border-gray-200
                              px-4
                              py-3
                              text-sm
                              text-black
                              transition
                              hover:border-[#85a30f]
                            "
                            >
                              <span className="font-semibold capitalize text-gray-900">
                                {key.replace(/([A-Z])/g, " $1")}:
                              </span>{" "}
                              <span className="text-gray-800">{value}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* WHY CHOOSE */}

                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-black">
                        Why Choose Elstrong?
                      </h2>

                      <p className="mb-6 text-sm leading-6 text-black sm:text-base">
                        Elstrong focuses on delivering reliable,
                        energy-efficient, and thoughtfully designed LED lighting
                        solutions for modern spaces. Our products are developed
                        with performance, durability, and customer satisfaction
                        in mind.
                      </p>

                      <ul className="space-y-4 text-sm leading-6 text-black sm:text-base">
                        {product.whyChoose?.map((item, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#85a30f]" />

                            <span>
                              <strong className="font-medium text-gray-900">
                                {item.title}
                              </strong>{" "}
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ================= RIGHT IMAGE ================= */}

                  <div className="relative lg:sticky lg:top-24 lg:self-start">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                      <img
                        src={product.descriptionImage}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =================================================
              SHIPPING
          ================================================== */}

          {activeTab === "shipping" && (
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-5 text-2xl font-semibold text-gray-900">
                Shipping & Return
              </h2>

              <div className="space-y-5 text-sm leading-6 text-gray-500 sm:text-base">
                <p>
                  Estimate delivery times are 12-26 days for international
                  orders and 3-6 days for orders within the United States.
                </p>

                <p>
                  Products can be returned within 45 days of purchase. Duties
                  and taxes are non-refundable.
                </p>
              </div>
            </div>
          )}

          {/* =================================================
              REVIEWS
          ================================================== */}

          {activeTab === "reviews" && (
            <div className="py-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                Customer Reviews
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                No reviews yet. Be the first to review this product.
              </p>
            </div>
          )}
        </section>

        {/* =====================================================
            RELATED PRODUCTS
        ====================================================== */}

        <section>
          <h2 className="mb-10 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative mb-4 aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute right-4 top-4 bg-[#85a30f] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Sale
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-1 text-lg font-medium text-gray-900 transition-colors group-hover:text-gray-500">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTA2 />

      {open && <PopupForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
