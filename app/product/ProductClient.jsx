"use client";

import CTA from "@/compoents/Home/CTA";
import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaMinus,
  FaPlus,
  FaTruck,
  FaUndo,
  FaClock,
  FaTimes,
} from "react-icons/fa";

const productImages = ["/led.webp"];

const relatedProducts = [
  {
    name: "Outdoor Light",
    price: "$70.00",
    oldPrice: "$80.00",
    image: "/OutdoorLight.webp",
  },
  {
    name: "Flood Light",
    price: "$50.00",
    oldPrice: "$60.00",
    image: "/FloodLight.webp",
  },
  {
    name: "Flood Light",
    price: "$40.00",
    oldPrice: "$50.00",
    image: "/FloodLight.webp",
  },
  {
    name: "Downlight Led",
    price: "$40.00",
    oldPrice: "$50.00",
    image: "/COBLEDDownlight.webp",
  },
];

export default function ProductClient() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [showPurchase, setShowPurchase] = useState(true);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <>
      {" "}
      <main className="mx-auto w-full max-w-[1280px] mt-20 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        {/* =====================================================
          BREADCRUMB
      ====================================================== */}
        <nav className="mb-8 text-base text-gray-500">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-3">
            <li>
              <a href="#" className="transition-colors hover:text-black">
                Home
              </a>
            </li>

            <li className="flex items-center gap-2">
              <span>&gt;</span>
              <a href="#" className="transition-colors hover:text-black">
                Products
              </a>
            </li>

            <li className="flex items-center gap-2">
              <span>&gt;</span>
              <span className="text-gray-900">Led Light</span>
            </li>
          </ol>
        </nav>

        {/* =====================================================
          PRODUCT SECTION
      ====================================================== */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
          {/* =================================================
            IMAGE GALLERY
        ================================================== */}
          <div className="flex flex-col gap-4 md:col-span-7">
            {/* Main Image */}
            <div className="relative flex aspect-square h-150 w-full items-start justify-center overflow-hidden ">
              <img
                src={productImages[selectedImage]}
                alt="Ambient Glow"
                className="h-auto w-auto object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                  aspect-square
                  overflow-hidden
                  bg-gray-50
                  border
                  transition-all
                  ${
                    selectedImage === index
                      ? "border-[#85a30f]"
                      : "border-transparent hover:border-gray-300"
                  }
                `}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
            PRODUCT DETAILS
        ================================================== */}
          <div className="flex flex-col pt-2 md:col-span-5 md:pl-6 md:pt-0 lg:pl-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                LED LIGHT
              </h1>
            </div>

            {/* <p className="mb-6 text-2xl font-medium text-gray-900">
            $60.00
          </p> */}

            <p className="mb-8 text-sm leading-6 text-black sm:text-base">
              Illuminate your space with the minimalist elegance of the Ambient
              Glow pendant. Crafted with a refined matte finish and designed to
              cast a soft, welcoming light, it is the perfect centerpiece for
              modern dining and living areas.
            </p>

            {/* Actions */}
            <div className="mb-8 flex flex-col gap-4">
              {/* WhatsApp + Get Quote */}
              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp */}

                {/* Get Quote */}
                <button
                  onClick={() => {
                    console.log("Get Quote");
                  }}
                  className="
        flex h-12
        items-center
        justify-center
        border border-black
        px-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-black
        transition
        hover:bg-gray-100
      "
                >
                  Get Quote
                </button>

                <a
                  href="https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20your%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex h-12
        items-center
        justify-center
        gap-2
        border border-black
        px-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-black
        transition
        hover:bg-gray-100
      "
                >
                  WhatsApp
                </a>
              </div>

              {/* Download Brochure */}
              <a
                href="/brochure/product-brochure.pdf"
                download
                className="
      flex h-12
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
      transition
      hover:bg-[#85a30f]
    "
              >
                Download Brochure
              </a>
            </div>

            {/* Shipping */}
            {/* =====================================================
    KEY FEATURES
====================================================== */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                Key Features
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Wattage */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-sm font-semibold text-white">
                    W
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Wattage</p>
                    <p className="text-sm font-medium text-gray-900">12W LED</p>
                  </div>
                </div>

                {/* Energy Efficiency */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-white">
                    ⚡
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Energy Efficiency</p>
                    <p className="text-sm font-medium text-gray-900">
                      High Efficiency
                    </p>
                  </div>
                </div>

                {/* Warranty */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-white">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Warranty</p>
                    <p className="text-sm font-medium text-gray-900">2 Years</p>
                  </div>
                </div>

                {/* Lifespan */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-white">
                    ⏱
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Lifespan</p>
                    <p className="text-sm font-medium text-gray-900">
                      50,000+ Hours
                    </p>
                  </div>
                </div>

                {/* Color Temperature */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-white">
                    K
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Color Temperature</p>
                    <p className="text-sm font-medium text-gray-900">
                      3000K / 4000K / 6500K
                    </p>
                  </div>
                </div>

                {/* Material */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#85a30f] text-white">
                    ◇
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Material</p>
                    <p className="text-sm font-medium text-gray-900">
                      Premium Aluminium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
          PRODUCT TABS
      ====================================================== */}
        <section className="mb-20">
          {/* Tab Buttons */}
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

          {/* Description */}
          {activeTab === "description" && (
            <section className="w-full bg-white py-12 md:py-5">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* MAIN GRID */}
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* ================= LEFT CONTENT ================= */}
                  <div className="space-y-14">
                    {/* PRODUCT OVERVIEW */}
                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-black">
                        Product Overview
                      </h2>

                      <p className="mb-6 text-sm leading-6 text- black sm:text-base">
                        Designed to deliver bright, consistent, and
                        energy-efficient illumination, our LED lights combine
                        modern design with reliable performance. They are ideal
                        for residential, commercial, and architectural lighting
                        applications.
                      </p>

                      <p className="text-sm leading-6 text-black sm:text-base">
                        With advanced LED technology and premium construction,
                        these lights provide excellent illumination while
                        maintaining low power consumption and long-lasting
                        performance.
                      </p>
                    </div>

                    {/* KEY FEATURES */}
                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                        Key Features
                      </h2>

                      <ul className="space-y-4 text-sm leading-6 text-black sm:text-base">
                        {[
                          {
                            title: "Energy Efficient:",
                            text: "Advanced LED technology provides excellent brightness while consuming less energy.",
                          },
                          {
                            title: "Long Lifespan:",
                            text: "High-quality LED components offer reliable performance for thousands of operating hours.",
                          },
                          {
                            title: "Premium Build:",
                            text: "Durable materials and effective heat management ensure dependable everyday performance.",
                          },
                          {
                            title: "Multiple Options:",
                            text: "Available in different wattages, designs, and color temperatures.",
                          },
                          {
                            title: "Low Maintenance:",
                            text: "Designed for consistent lighting performance with minimal maintenance requirements.",
                          },
                        ].map((feature, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#85a30f]" />

                            <span>
                              <strong className="font-medium underline text-gray-900">
                                {feature.title}
                              </strong>{" "}
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* APPLICATIONS */}
                    <div>
                      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                        Applications
                      </h2>

                      <p className="mb-5 text-sm leading-6 text-black sm:text-base">
                        Our LED lighting solutions are suitable for a wide range
                        of residential, commercial, and architectural
                        environments.
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[
                          "Homes & Apartments",
                          "Offices & Workspaces",
                          "Retail Stores",
                          "Hotels & Restaurants",
                          "Showrooms",
                          "Architectural Projects",
                          "Commercial Buildings",
                          "Interior Lighting",
                        ].map((application, index) => (
                          <div
                            key={index}
                            className="
                  border border-gray-200
                  px-4 py-3
                  text-sm text-black
                  transition
                  hover:border-[#85a30f]
                  
                "
                          >
                            {application}
                          </div>
                        ))}
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
                        {[
                          {
                            title: "Reliable Quality:",
                            text: "Products designed for consistent and dependable lighting performance.",
                          },
                          {
                            title: "Energy Savings:",
                            text: "Efficient LED technology helps reduce energy consumption and operating costs.",
                          },
                          {
                            title: "Modern Designs:",
                            text: "Contemporary lighting solutions created to complement different interior and architectural styles.",
                          },
                          {
                            title: "Long-Term Performance:",
                            text: "Durable construction and quality components provide long-lasting value.",
                          },
                        ].map((item, index) => (
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
                        src="https://images.unsplash.com/photo-1659612534697-3edc1892db46?q=80&w=1074&auto=format&fit=crop"
                        alt="LED Light"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Shipping */}
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

          {/* Reviews */}
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
            {relatedProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-4 aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
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
                    {product.name}
                  </h3>

                  {/* <p className="text-sm text-gray-500">
                  <span className="mr-2 text-black">
                    {product.price}
                  </span>

                  <span className="line-through">
                    {product.oldPrice}
                  </span>
                </p> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <CTA />
    </>
  );
}
