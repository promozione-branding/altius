"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Add your API / email submission here
  };

  return (
    <section
      className="bg-white py-6 md:py-16"
      data-purpose="requirements-section"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* =========================
              LEFT - IMAGE
          ========================== */}
          <div className="group overflow-hidden rounded-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvUCZvBXzjIxGYlbGcwYkxfCpdN_N8MwIl39hgPNzAbL0Oz0LXxhnLmPWYQQAn2bi3RSGv-BDiScOGIreqBDTr91nwWAHsGDHuT8zC9irS_KCUPimIet2dw98hY817vzyMpi8B-_BXLS-1ugMm0HvjtlXf-2iC4opLHwpHl3br_K8NEnoC3AmrtdA7SFGV2mNIk55ZMljWQUo6zh0sD4nfexKC-XNMglS7mA0IxeKmlijDvUP5Qr91"
              alt="Luxury Table Lamp"
              className="
                h-full
                min-h-[450px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          {/* =========================
              RIGHT - FORM
          ========================== */}
          <div className="flex flex-col">

            {/* Heading */}
            <div className="mb-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Get in touch
              </span>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Send your requirements
              </h2>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Product */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>

                {/* Product */}
                <div className="flex flex-col">
                  <label
                    htmlFor="product"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Product
                  </label>

                  <input
                    id="product"
                    name="product"
                    type="text"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9999999999"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="
                    bg-black
                    px-10
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    duration-300
                    hover:bg-gray-800
                    hover:px-12
                  "
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}