import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connect } from "@/Database/db";
import Blog from "@/models/blog";

// =====================================================
// SEO METADATA
// =====================================================

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    await connect();

    const blog = await Blog.findOne({
      permalink: slug,
    }).lean();

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "This blog does not exist.",
      };
    }

    const title = blog.metaTitle || blog.title;
    const description = blog.metaDescription || "";

    return {
      title,
      description,

      openGraph: {
        title,
        description,
        type: "article",
        images: blog.image
          ? [
              {
                url: blog.image,
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ]
          : [],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: blog.image ? [blog.image] : [],
      },
    };
  } catch (error) {
    console.error("Blog metadata error:", error);

    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
    };
  }
}

// =====================================================
// BLOG PAGE
// =====================================================

export default async function BlogPage({ params }) {
  const { slug } = await params;

  await connect();

  const blog = await Blog.findOne({
    permalink: slug,
  }).lean();

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen mt-25 bg-[#f8f8f6] text-gray-900">

      {/* =====================================================
          TOP / BREADCRUMB
      ====================================================== */}

      <section className="mx-auto max-w-[1200px] px-5 pt-8 md:px-8 md:pt-10">
        <div className="flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-gray-500">

          <Link
            href="/"
            className="transition-colors hover:text-[#85a30f]"
          >
            Elstrong
          </Link>

          <span>/</span>

          <Link
            href="/blogs"
            className="transition-colors hover:text-[#85a30f]"
          >
            Blogs
          </Link>

          <span>/</span>

          <span className="max-w-[250px] truncate text-gray-400">
            {blog.title}
          </span>

        </div>
      </section>

      {/* =====================================================
          BLOG HEADER
      ====================================================== */}

      <section className="mx-auto max-w-[1200px] px-5 pt-7 md:px-8 md:pt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end">

          {/* LEFT */}

          <div>

            {/* Category / Meta */}

            <div className="mb-4 flex flex-wrap items-center gap-4 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-500">

              <span className="bg-gray-200 px-3 py-1.5 text-gray-700">
                Lighting & Design
              </span>

            

              <span>
                {formatDate(blog.date)}
              </span>

            </div>

            {/* Title */}

            <h1
              className="
                max-w-[850px]
                font-serif
                text-4xl
                font-medium
                leading-[0.98]
                tracking-[-0.03em]
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              {blog.title}
            </h1>

            {/* Description */}

           

          </div>

          {/* RIGHT AUTHOR */}

          <div className="lg:pb-1">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600">
                AL
              </div>

              <div>
                <p className="text-[10px] md:text-base font-semibold uppercase tracking-[0.12em] text-gray-900">
                  Elstrong
                </p>

                <p className="mt-1 text-[9px] md:text-sm text-gray-500">
                  Altius Lighting
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}

     {/* =====================================================
    IMAGE LEFT + CONTENT RIGHT
====================================================== */}

<section className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">

  <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">

    {/* LEFT — BLOG IMAGE */}

    <aside className="lg:sticky lg:top-10 lg:self-start">

      {blog.image ? (
        <div className="w-full overflow-hidden bg-gray-200">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-auto w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/5] items-center justify-center bg-gray-200 text-sm text-gray-400">
          No image
        </div>
      )}

      <p className="mt-3 text-[9px] uppercase tracking-[0.12em] text-gray-800">
        Elstrong — Altius Lighting
      </p>

    </aside>


    {/* RIGHT — BLOG CONTENT */}

    <article
      className="
        blog-content
        max-w-[780px]
        text-[14px]
        md:text-base
        leading-7
        text-gray-800
      "
      dangerouslySetInnerHTML={{
        __html: blog.content || "",
      }}
    />

  </div>

</section>

      {/* =====================================================
          BACK TO BLOGS
      ====================================================== */}

      <section className="border-t border-gray-200">

        <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">

          <Link
            href="/blogs"
            className="
              inline-flex
              border-b
              border-gray-900
              pb-1
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              transition-colors
              hover:border-[#85a30f]
              hover:text-[#85a30f]
            "
          >
            ← Back to Blogs
          </Link>

        </div>

      </section>

    </main>
  );
}

// =====================================================
// DATE FORMATTER
// =====================================================

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}