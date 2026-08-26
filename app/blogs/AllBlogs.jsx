import React from "react";

const blogs = [
  {
    id: 1,
    title: "Simplify Your Life with Simple Products",
    date: "June 22, 2026",
    comments: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4p5OtzSQ6RWNx8g8yMc7hTHnwUsTFpLySCJ5Z6iSMKucO8aIDrCCmZqzlg0yeNgXIR3rpCCHtF7hwG0V95RdOJ8b2ubXwcgPpNEVeQF58QH6m1LHGq3s9nJe777-CqhU21ePKaUWRf5ABDsu5IOHQind98Zy5d3iVPCWFsn3LVZ1tgUHL-Efk8e32SgwND_59lWQgoVAhLAd5-p3okJeHIVjyyRebh4PotFiuUQk_MD1xIhOsNzyG",
    alt: "Pendant lights",
    excerpt:
      "One may not need charts and graphs at this point. The simplicity of design speaks volumes...",
    slug: "simplify-your-life-with-simple-products",
  },
  {
    id: 2,
    title: "Top Reasons Customers Love It",
    date: "June 22, 2026",
    comments: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs4Ii8oQbi0ASqrtroqv7slKjIZIhBNsPy-EY3xUVqu9NjwSIapey1rHnZJnlQhoxqHtpSixpr2dF6iHCvF8fvveyJ4fTsbs0c2loP4HbfuCzZcAdC44fqu_CwptlhGSUtrtePad0yXkJDus68zaV4I-GWZTVUHmeOZHIvWQf29gQeVqPxw1XjwYP-IrIJRgTV-ZVlmw44sfnPSMR24NZTjyT8TIBN_226jNwHJEKehgMNeHBbfc2z",
    alt: "Modern circular chandelier",
    excerpt:
      "One may not need charts and graphs at this point. Our customers continually express their...",
    slug: "top-reasons-customers-love-it",
  },
  {
    id: 3,
    title: "Real Stories, Real Impact",
    date: "June 22, 2026",
    comments: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFoYvE4IB8gFxYnrPzXll6wokoW1Kkf6XfknnlQF8jh7KPNWCdluAxAHf7oFdoVBfKGv24rPJPoo3YsqM1Tu3tSwqkyDBayT26q4zs2lq3h2IWuaIGtOouDSUr3ozhmEcoxbShaf_3lYIJgjVNG0bH3hFoUx8dQ_EOegxgu9O2R61s_WwWzxbAnAyq3zsfC3EFVgIN0ZRH1VgyaMGdHMe55RPI-HLuq4QNW_sJFu4k-HSo6BrrFfUA",
    alt: "Wireframe pendant lamp",
    excerpt:
      "One may not need charts and graphs at this point. Discover how transforming your space...",
    slug: "real-stories-real-impact",
  },
  {
    id: 4,
    title: "Natural Materials in Modern Lighting",
    date: "June 15, 2026",
    comments: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcMyvu_C7YfGkyyipPShaJ25aSOYE-STAjiiz9-GQMcv0oUW-PKcpMXYUCQfMxzD4NEBw1f1lqjtZzfbkmD7NrigsGvVi3_qZjCExqHC173uOvVe-cwRJwvj4HwZN2tXXfDMW9DVnNNuEYuxRPiFkSlXa2V_yGwZPstr2s_WWKzAWSgoubsrixd96U7mW76nAwJ8gVsvw7ZyKE_eL8u4EDwUk3P5IqlF4okd78UpKz1AtkBZ5y0FXO",
    alt: "Rattan pendant shade",
    excerpt:
      "Bringing organic textures into contemporary spaces creates a warmth that metal and glass...",
    slug: "natural-materials-in-modern-lighting",
  },
  {
    id: 5,
    title: "The Art of Layered Illumination",
    date: "June 10, 2026",
    comments: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe5deFi7QxdHfZU9-QhaqRngULb1dMNSs_setqvHKgctYPEDMoCJ-Zq38Ye_rQ5z0lVqyMOeeMb1b5JkVU7pj3ju_hhb5jsAfr6u3USOh5J64wg-V1JS5H7rnE7JWzH6oaNv2Kfm6qWWv8Ws0BWwyDB3f4Ny1OCA9ywyOXFz2NdjZUh6kU3bYKD1z0lqwmxvvKvmUeafk5kVZl14Z2TQxEClMZ54RnVktjM-s_BykcQns4T7Zwf5Ix",
    alt: "Table lamps",
    excerpt:
      "A single overhead light is rarely enough. Learn how to combine ambient, task, and accent...",
    slug: "the-art-of-layered-illumination",
  },
  {
    id: 6,
    title: "Minimalism: Less is Always More",
    date: "June 05, 2026",
    comments: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmeGqKvJUPdaGd9Ev97cHwhNJ75yzcsNRIbM3TebQ4OJxHWOg4FtZ3OhUrRFfx7J0NZPUQ0d7KoBtArnL3HJ3Jk8SOUCVCvPKjXrRL9dLBiuqRkbgPE7gpzwCgJLskeLNk6Ap7RkVMpd1Fl66eZKSsSEiplbVnFvwHzahweahURjICwIGybZHYDbQWn2d3-u7vOE-ohKxfVV_46CAPt8uB0Wm6XUQlkLBbNIBsbHoXIi2og-1fkzGX",
    alt: "Minimalist floor lamp",
    excerpt:
      "Stripping away the unessential leaves us with pure form and function. Explore our latest...",
    slug: "minimalism-less-is-always-more",
  },
];

export default function AllBlogs() {
  return (
    <main className="w-full bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex h-[400px] items-center justify-center text-center">
        {/* Background */}

        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApYl8nK3QKeYM8cpCvFyWneTF3o8ZJRHGvtEUcNz7GfILd7F83OCyP3ThQ4NWUssZbgttF7EVXXdojPP5TK9qzqHPx4kmsLRvyffUSrP2vpiX5lxKEdcikuhTDFtzBu8l6mFk_7S1oY6rey6lXbeCVARQtOQbinc5RrMuDK0Uf92iWAMsJwv7e_AdltRPNYj_kzDGtQuqAnHSNqo5B0YOZLIiKQWXJxMdF1sz-lJjKTjyLEz6-N_KV"
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

      <section className="mx-auto max-w-7xl px-5 py-6 md:py-12 md:px-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group cursor-pointer"
            >
              {/* Image */}

              <a href={"/blogs"}>
                <div className="mb-6 aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.alt}
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
                {blog.date}

                
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
                <a href={`/blogs/${blog.slug}`}>
                  {blog.title}
                </a>
              </h2>

              {/* Excerpt */}

              <p className="mb-5 text-sm leading-5 text-gray-700">
                {blog.excerpt}
              </p>

              {/* Read More */}

              <a
                href={`/blogs/${blog.slug}`}
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
      </section>
    </main>
  );
}