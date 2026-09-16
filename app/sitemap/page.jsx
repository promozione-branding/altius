"use client";

import { categories } from "@/Data/Data";
import Link from "next/link";
import {
  Home,
  Info,
  Mail,
  FileText,
  FolderTree,
  Package,
  ArrowUpRight,
} from "lucide-react";

const mainPages = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Contact Us", href: "/contact", icon: Mail },
  { name: "Blogs", href: "/blogs", icon: FileText },
  { name: "Categories", href: "/categories", icon: FolderTree },
];

const categoryLinks = categories.map((cate) => ({
  name: cate.name,
  slug: cate.slug,
}));

const products = Array.from(
  new Map(
    categories
      .flatMap((cate) => cate.products || [])
      .map((product) => [product.slug, product])
  ).values()
);

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white pt-20 text-gray-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#85a30f]">
            Sitemap
          </p>

         
        </div>

        {/* ================= MAIN PAGES ================= */}
        <div className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <Home className="h-6 w-6 text-[#85a30f]" />

            <h2 className="text-2xl font-bold">
              Main Pages
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {mainPages.map((page) => {
              const Icon = page.icon;

              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex min-w-[180px] items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#85a30f] hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#85a30f]" />

                    <span className="font-medium text-gray-700 group-hover:text-[#85a30f]">
                      {page.name}
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-[#85a30f]" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <FolderTree className="h-6 w-6 text-[#85a30f]" />

            <h2 className="text-2xl font-bold">
              Categories
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categoryLinks.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group flex min-w-[200px] items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#85a30f] hover:shadow-md"
              >
                <span className="font-medium text-gray-700 group-hover:text-[#85a30f]">
                  {category.name}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-[#85a30f]" />
              </Link>
            ))}
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Package className="h-6 w-6 text-[#85a30f]" />

            <h2 className="text-2xl font-bold">
              Products
            </h2>
          </div>

          {/* All Products */}
          <div className="mb-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-[#85a30f] px-5 py-3 font-semibold text-white transition hover:bg-[#718b0b]"
            >
              All Products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Product Boxes */}
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex min-w-[220px] flex-1 basis-[220px] items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#85a30f] hover:shadow-md"
              >
                <span className="font-medium text-gray-700 group-hover:text-[#85a30f]">
                  {product.name}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-[#85a30f]" />
              </Link>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}