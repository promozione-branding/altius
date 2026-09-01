"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      /*
        Replace this section with your actual API.

        Example:

        const response = await fetch("/api/inquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      */

      // Temporary delay to simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);

      // Automatically close after 2 seconds
      setTimeout(() => {
        setSuccess(false);

        setFormData({
          name: "",
          phone: "",
          email: "",
          product: "",
          message: "",
        });

        onClose();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget && !loading) {
          onClose();
        }
      }}
    >
      {/* ================= POPUP ================= */}
      <div className="relative w-full max-w-[650px] max-h-[90vh] overflow-y-auto bg-white p-2 shadow-2xl">
        {/* Inner Border */}
        <div className="relative w-full max-w-[650px] bg-white py-2 px-3 shadow-2xl">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:bg-slate-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close"
          >
            <X size={17} />
          </button>

          {/* ================= SUCCESS ================= */}
          {success ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2
                  size={38}
                  className="text-green-600"
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="text-2xl font-bold uppercase tracking-wide text-black">
                Thank You!
              </h2>

              <div className="mx-auto mt-3 h-[1px] w-12 bg-black" />

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-800">
                Your enquiry has been submitted successfully.
                <br />
                Our team will contact you shortly.
              </p>

              <p className="mt-5 text-xs font-medium text-slate-600">
                This window will close automatically...
              </p>
            </div>
          ) : (
            <>
              {/* ================= HEADING ================= */}
              <div className="mb-7 pr-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-black">
                  Get In Touch
                </p>

                <div className="mx-auto mt-3 h-[1px] w-12 bg-black" />

                <h2 className="mt-5 text-2xl font-bold uppercase leading-tight text-black sm:text-3xl">
                  Send Your Enquiry
                </h2>

                <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-slate-800 sm:text-sm">
                  Fill in the details below and our team will get back to you
                  shortly.
                </p>
              </div>

              {/* ================= FORM ================= */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-11 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="h-11 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-11 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black"
                    />
                  </div>

                  {/* Product */}
                  <div>
                    <label
                      htmlFor="product"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Product *
                    </label>

                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="h-11 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition focus:border-black"
                    >
                      <option value="">Select Product</option>

                      <option value="Concealed Light">Concealed Light</option>

                      <option value="COB Lens Model">COB Lens Model</option>

                      <option value="LED Slim Panel">LED Slim Panel</option>

                      <option value="Striker">Striker</option>

                      <option value="PC Panel">PC Panel</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none border border-slate-200 bg-white px-3 py-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 flex h-12 w-full items-center justify-center bg-[#85a30f] px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>

              {/* Bottom Text */}
              <p className="mt-4 text-center text-[11px] text-slate-800">
                Our team will contact you regarding your enquiry.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
