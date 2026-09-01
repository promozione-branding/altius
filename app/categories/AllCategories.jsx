
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    title: "Ceiling Lights",
    slug: "ceiling-lights",
    image: "/categories/ceiling-lights.webp",
  },
  {
    title: "Pendant Lights",
    slug: "pendant-lights",
    image: "/categories/pendant-lights.webp",
  },
  {
    title: "Wall Lights",
    slug: "wall-lights",
    image: "/categories/wall-lights.webp",
  },
  {
    title: "Table Lamps",
    slug: "table-lamps",
    image: "/categories/table-lamps.webp",
  },
  {
    title: "Floor Lamps",
    slug: "floor-lamps",
    image: "/categories/floor-lamps.webp",
  },
  {
    title: "LED Collection",
    slug: "led-collection",
    image: "/categories/led-collection.webp",
  },
];

export default function AllCategories() {
  return (
    <section className="w-full bg-white px-4 mt-25 py-14 sm:px-6 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#85a30f]">
            Our Collections
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
            Shop by Category
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore our curated collection of luxury lighting, designed to
            elevate your space with illuminated sophistication.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              className="group relative block overflow-hidden bg-gray-100"
            >
              {/* Equal Image Size */}
              <div className="relative aspect-[5/5] w-full overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/85" />

                {/* Card Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7">
                  <div className="flex items-end justify-between gap-4">

                    {/* Text */}
                    <div>
                      <h2 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                        {category.title}
                      </h2>

                      <div className="mt-2 overflow-hidden">
                        <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 transition-all duration-500 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                          Explore Collection
                        </span>
                      </div>
                    </div>

                    {/* React Icon Arrow */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[#85a30f] group-hover:bg-[#85a30f]">
                      <FiArrowUpRight
                        size={20}
                        className="transition-transform duration-500 group-hover:rotate-45"
                      />
                    </div>

                  </div>
                </div>

                {/* Hover Border */}
                <div className="pointer-events-none absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-white/40" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

