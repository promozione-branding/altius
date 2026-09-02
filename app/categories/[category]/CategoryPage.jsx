"use client"
import PopupForm from "@/compoents/PopupForm";
import Link from "next/link";
import { useState } from "react";

export default function CategoryPage({ categoryData }) {
     const [open, setOpen] = useState(false);

  const products = categoryData.products || [];


  return (
    <main className="mt-25 bg-[#f8f8f5] text-[#171714]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mx-auto grid min-h-[80vh] max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 md:px-12 lg:grid-cols-12 lg:px-16 lg:py-16">
        {/* Content */}

        <div className="flex flex-col justify-center lg:col-span-5 lg:pr-16">
          <span className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#77776f]">
            Premium LED Lighting
          </span>

          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[76px]">
            {categoryData.name}
          </h1>

          <div className="mt-8 h-px w-16 bg-[#171714]" />

          <p className="mt-8 max-w-lg text-base leading-7 text-[#686861] md:text-lg">
            {categoryData.description}
          </p>

          <div className="mt-10">
            <a
              href="#collection"
              className="group inline-flex items-center gap-5 border border-[#171714] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-[#171714] hover:text-white"
            >
              Explore Collection
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Hero Image */}

        <div className="group relative h-[55vh] min-h-[450px] overflow-hidden bg-[#e9e9e4] lg:col-span-7 lg:h-[78vh]">
          <img
            src={categoryData.image}
            alt={categoryData.name}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute bottom-6 left-6 border border-white/40 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white">
              Collection 2026
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          COLLECTION HEADER
      ====================================================== */}

      <section
        id="collection"
        className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-10 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="flex flex-col justify-between gap-8 border-b border-[#d9d9d2] pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#85857d]">
              Curated Selection
            </span>

            <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] md:text-5xl">
              Selected Works
            </h2>
          </div>

          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#85857d]">
            {products.length} {products.length === 1 ? "Product" : "Products"}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}

      <section className="mx-auto max-w-[1600px] px-5 pb-10 sm:px-8 md:px-12 lg:px-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block h-full max-w-[360px]"
              >
                {/* Product Image */}

                <div className="relative aspect-[4/4] overflow-hidden bg-[#ededE8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                  />

                  {/* Hover Overlay */}

                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/[0.04]" />

                  {/* View Product */}

                  <div className="absolute bottom-5 left-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="bg-white px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em]">
                      View Product →
                    </span>
                  </div>
                </div>

                {/* Product Info */}

                <div className="mt-5 px-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl tracking-[-0.02em]">
                      {product.name}
                    </h3>

                    {/* <span className="text-sm text-[#686861]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span> */}
                  </div>

                  {/* <p className="mt-2 text-xs leading-5 text-[#85857d]">
                    {product.shortDescription}
                  </p> */}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-[#85857d]">
              No products available in this category.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="mx-auto max-w-[1600px] px-5 py-6 text-center  md:py-14">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#85857d]">
          Need assistance?
        </span>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
          Find the right light for your space.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#686861] md:text-base">
          Speak with our lighting specialists for help choosing the right
          fixture, finish and illumination for your project.
        </p>

        <div className="mt-9">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-5 bg-[#171714] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#33332f]"
          >
            Contact Our Team
            <span>→</span>
          </button>
        </div>
      </section>

        {open && (
        <PopupForm
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </main>
  );
}
