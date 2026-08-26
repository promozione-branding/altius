"use client";

import React, { useMemo, useState } from "react";
import {
  FiSliders,
  FiX,
} from "react-icons/fi";

export default function AllProductClient({ products = [] }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // =====================================================
  // GET UNIQUE CATEGORIES FROM PRODUCTS
  // =====================================================

  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.categoryName)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  // =====================================================
  // CATEGORY TOGGLE
  // Only ONE category can be selected
  // =====================================================

  const toggleCategory = (category) => {
    setSelectedCategory((prev) =>
      prev === category ? null : category
    );
  };

  // =====================================================
  // CLEAR FILTER
  // =====================================================

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  // =====================================================
  // FILTER PRODUCTS
  // =====================================================

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products.filter(
      (product) =>
        product.categoryName === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <main className="flex-grow w-full mt-10 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-20 flex flex-col md:flex-row gap-10 lg:gap-16">

      {/* =====================================================
          DESKTOP SIDEBAR
      ====================================================== */}

      <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-12 sticky top-32 h-fit">

        {/* Heading */}

        <div className="mb-4">

          <h1 className="text-5xl lg:text-6xl font-light leading-[0.95] tracking-tight mb-4">
            The
            <br />

            <span className="text-[#85a30f] font-semibold">
              Collection
            </span>
          </h1>

          <p className="text-base text-gray-800 max-w-xs leading-6">
            Explore our complete range of architecturally
            inspired lighting fixtures.
          </p>

        </div>

        {/* Category Filter */}

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          toggleCategory={toggleCategory}
          clearFilters={clearFilters}
        />

      </aside>

      {/* =====================================================
          PRODUCT AREA
      ====================================================== */}

      <div className="w-full md:w-3/4 flex flex-col">

        {/* =====================================================
            MOBILE HEADER
        ====================================================== */}

        <div className="md:hidden mt-5 mb-10 flex flex-col gap-6">

          <h1 className="text-4xl font-light tracking-tight">
            The Collection
          </h1>

          <div className="flex justify-between items-center border-b border-gray-200 pb-4">

            {/* Filter Button */}

            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="text-xs uppercase tracking-[0.18em] flex items-center gap-2"
            >

              <FiSliders size={16} />

              Filters

              {selectedCategory && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-[10px]">
                  1
                </span>
              )}

            </button>

            {/* Product Count */}

            <span className="text-xs text-gray-500">
              {filteredProducts.length} Products
            </span>

          </div>

        </div>

        {/* =====================================================
            DESKTOP CONTROLS
        ====================================================== */}

        <div className="hidden md:flex justify-between items-end mb-10 border-b border-gray-200 pb-4">

          <span className="text-sm text-gray-500">

            {selectedCategory ? (
              <>
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1
                  ? "product"
                  : "products"}{" "}
                in{" "}
                <span className="text-black font-medium">
                  {selectedCategory}
                </span>
              </>
            ) : (
              <>
                Showing 1-{filteredProducts.length} of{" "}
                {products.length} products
              </>
            )}

          </span>

        </div>

        {/* =====================================================
            ACTIVE CATEGORY FILTER
        ====================================================== */}

        {selectedCategory && (

          <div className="flex flex-wrap items-center gap-2 mb-8">

            <span className="text-xs uppercase tracking-widest text-gray-400 mr-2">
              Filtered:
            </span>

            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 text-xs hover:border-black transition-colors"
            >

              {selectedCategory}

              <FiX size={12} />

            </button>

            <button
              type="button"
              onClick={clearFilters}
              className="text-xs underline underline-offset-4 ml-2 text-gray-500 hover:text-black"
            >
              Clear all
            </button>

          </div>

        )}

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 lg:gap-x-7 gap-y-14">

            {filteredProducts.map((product) => (

              <a
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-4 cursor-pointer"
              >

                {/* Product Image */}

                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">

                  <img
                    src={
                      product.image ||
                      product.images?.[0] ||
                      "/placeholder.webp"
                    }
                    alt={product.name}
                    loading="lazy"
                    className="
                      object-cover
                      w-full
                      h-full
                      group-hover:scale-105
                      transition-transform
                      duration-700
                      ease-out
                    "
                  />

                </div>

                {/* Product Info */}

                <div className="flex flex-col items-center text-center">

                  <h2 className="text-base lg:text-lg font-medium">
                    {product.name}
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    {product.categoryName}
                  </p>

                </div>

              </a>

            ))}

          </div>

        ) : (

          /* =====================================================
              NO PRODUCTS
          ====================================================== */

          <div className="py-24 text-center">

            <p className="text-lg mb-4">
              No products found.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                border-b
                border-black
                pb-1
              "
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>

      {/* =====================================================
          MOBILE FILTER DRAWER
      ====================================================== */}

      {mobileFilterOpen && (

        <div className="fixed inset-0 z-[100] md:hidden">

          {/* Overlay */}

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFilterOpen(false)}
          />

          {/* Drawer */}

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white p-6 overflow-y-auto">

            {/* Drawer Header */}

            <div className="flex justify-between items-center mb-10">

              <div>

                <h2 className="text-xl font-medium">
                  Filters
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                  Select a product category
                </p>

              </div>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  border
                  border-gray-200
                  rounded-full
                  hover:border-black
                  transition-colors
                "
              >
                <FiX size={18} />
              </button>

            </div>

            {/* Category Filter */}

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              toggleCategory={toggleCategory}
              clearFilters={clearFilters}
            />

            {/* Apply Button */}

            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="
                mt-10
                w-full
                bg-black
                text-white
                py-4
                text-xs
                uppercase
                tracking-[0.2em]
                hover:bg-[#85a30f]
                transition-colors
              "
            >
              View {filteredProducts.length} Products
            </button>

          </div>

        </div>

      )}

    </main>
  );
}

/* =========================================================
   CATEGORY FILTER
========================================================= */

function CategoryFilter({
  categories,
  selectedCategory,
  toggleCategory,
  clearFilters,
}) {
  return (
    <div className="flex flex-col gap-6">

      {/* Heading */}

      <div>

        <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-5">
          Category
        </h3>

        {/* Categories */}

        <ul className="space-y-3 text-base text-gray-500">

          {categories.map((category) => {

            const isSelected =
              selectedCategory === category;

            return (

              <li key={category}>

                <label
                  className={`
                    flex
                    items-center
                    gap-3
                    cursor-pointer
                    transition-colors
                    ${
                      isSelected
                        ? "text-black"
                        : "hover:text-black"
                    }
                  `}
                >

                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() =>
                      toggleCategory(category)
                    }
                    className="
                      w-4
                      h-4
                      rounded-none
                      border-gray-300
                      text-black
                      focus:ring-black
                      cursor-pointer
                    "
                  />

                  {category}

                </label>

              </li>

            );

          })}

        </ul>

      </div>

      {/* Clear */}

      {selectedCategory && (

        <button
          type="button"
          onClick={clearFilters}
          className="
            text-left
            text-xs
            uppercase
            tracking-[0.18em]
            text-gray-500
            hover:text-black
            transition-colors
          "
        >
          Clear all filters
        </button>

      )}

    </div>
  );
}