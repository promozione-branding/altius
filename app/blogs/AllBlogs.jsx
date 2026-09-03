
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH ALL BLOGS
  // ==========================================
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        setBlogs(data.blogs || data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ==========================================
  // CREATE EXCERPT FROM CONTENT
  // ==========================================
  const getExcerpt = (content, maxLength = 150) => {
    if (!content) return "";

    // Remove HTML tags from Jodit content
    const plainText = content
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (plainText.length <= maxLength) {
      return plainText;
    }

    return plainText.substring(0, maxLength) + "...";
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================
  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <main className="w-full bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex h-[400px] items-center justify-center text-center">
        {/* Background */}

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549924327-093737b3bb46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern interior background"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}

        <div className="relative z-10 px-6 text-white">
          <h1 className="mb-5 font-serif text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl">
            Blogs
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] sm:text-sm">
            <a
              href="/"
              className="transition-colors hover:text-[#85a30f]"
            >
              Home
            </a>

            <span className="text-gray-300">›</span>

            <span className="text-gray-300">
              Blogs
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-20 md:py-12">

        {/* =========================
            LOADING
        ========================== */}

        {loading && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="mb-6 aspect-[4/3] bg-gray-200" />

                <div className="mb-3 h-3 w-24 bg-gray-200" />

                <div className="mb-2 h-7 w-4/5 bg-gray-200" />

                <div className="mb-2 h-4 w-full bg-gray-200" />

                <div className="mb-5 h-4 w-3/4 bg-gray-200" />

                <div className="h-3 w-20 bg-gray-200" />
              </div>
            ))}
          </div>
        )}

        {/* =========================
            NO BLOGS
        ========================== */}

        {!loading && blogs.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-gray-500">
              No blogs found.
            </p>
          </div>
        )}

        {/* =========================
            BLOG GRID
        ========================== */}

        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="group cursor-pointer"
              >
                {/* Image */}

                <a
                  href={`/blogs/${blog.permalink}`}
                >
                  <div className="mb-6 aspect-[4/3] overflow-hidden bg-gray-100">
                    {blog.image ? (
                      <Image
                      width={100}
                      height={100}
                        src={blog.image}
                        alt={blog.title || "Blog image"}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                </a>

                {/* Meta */}

                <div
                  className="
                    mb-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-gray-500
                  "
                >
                  {formatDate(blog.date)}
                </div>

                {/* Title */}

                <h2
                  className="
                    mb-3
                    font-serif
                    text-2xl
                    font-bold
                    leading-snug
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-[#85a30f]
                  "
                >
                  <a href={`/blogs/${blog.permalink}`}>
                    {blog.title}
                  </a>
                </h2>

                {/* Excerpt */}

                <p className="mb-5 text-sm leading-5 line-clamp-2 text-gray-700">
                  {blog.metaDescription ||
                    getExcerpt(blog.content)}
                </p>

                {/* Read More */}

                <a
                  href={`/blogs/${blog.permalink}`}
                  className="
                    inline-block
                    border-b-2
                    border-gray-900
                    pb-1
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray-900
                    transition-all
                    duration-300
                    hover:border-[#85a30f]
                    hover:text-[#85a30f]
                  "
                >
                  Read More
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

