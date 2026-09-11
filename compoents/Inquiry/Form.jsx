"use client"
import React, { useState } from "react";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  product: "",
  place: "",
  message: "",
};

// Easily modify your products here
const products = [
  "LED Panel Lights",
  "LED Downlights",
  "LED Flood Lights",
  "LED Street Lights",
  "LED High Bay Lights",
  "LED Tube Lights",
  "LED Bulbs",
  "Industrial Lighting",
  "Commercial Lighting",
  "Other",
];

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow ONLY numbers and maximum 10 digits.
    // No Indian-number restriction — any 10 digits are accepted.
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear messages when user starts editing again
    if (error) setError("");
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setSuccess(false);

    // Basic validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.product) {
      setError("Please select a product.");
      return;
    }

    if (!formData.place.trim()) {
      setError("Please enter your place.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please enter your requirement.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        platform: "Altius Elstrong Popup Form",
        platformEmail: "altus@email.com",
        supplierToken: "6a9fb124d936bdc2bb1d6ca5",

        name: formData.name,
        phone: formData.phone,
        email: formData.email || "N/A",
        product: formData.product,
        message: formData.message || "N/A",
        place: formData.place || "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setSuccess(true);

        // Close/reset after 2 seconds
        setTimeout(() => {
          setSuccess(false);
          setFormData(initialFormData);

          if (onClose) {
            onClose();
          }
        }, 2000);
      } else {
        setError(
          data?.message || "Submission failed. Please try again."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-6 sm:py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-lime-50/40 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
          
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
            
            {/* LEFT CONTENT */}
            <div className=" hidden md:flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">

                <div className="absolute top-5 left-80 ">
                    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={158}
    height={158}
    viewBox="0 0 311.633 311.633"

  >
    <path d="M157.727 37.75c-50.524 0-91.632 41.1-91.632 91.624 0 33.772 18.332 64.42 48.004 80.5l-1.7 14.024c0 8.176 4.104 15.4 10.352 19.748-4.396 2.548-7.416 7.376-7.416 12.972 0 5.756 3.188 10.704 7.796 13.184-2.424 2.568-3.94 6.004-3.94 9.804 0 7.896 6.428 14.328 14.328 14.328h.472c-.004.044-.024.08-.024.124 0 9.856 11.084 17.576 25.224 17.576 5.54 0 10.784-1.204 15.16-3.472a3.11 3.11 0 0 0 1.332-4.204 3.11 3.11 0 0 0-4.204-1.332c-3.444 1.78-7.808 2.768-12.288 2.768-10.292 0-18.984-5.192-18.984-11.34 0-.044-.024-.08-.028-.124h41.748c7.896 0 14.328-6.428 14.328-14.328 0-7.008-5.068-12.832-11.724-14.064a3.048 3.048 0 0 0-1.24-.264h-53.628c-4.46 0-8.088-3.884-8.088-8.66 0-4.78 3.628-8.664 8.088-8.664H185.783c4.46 0 8.088 3.884 8.088 8.664 0 2.508 0 2.508-1.748 4.924a3.117 3.117 0 1 0 5.052 3.652c2.716-3.748 2.936-4.392 2.936-8.58 0-8.216-6.428-14.904-14.328-14.904h-49.332c-9.824 0-17.816-7.996-17.844-17.44l1.936-15.78-1.672-3.152c-28.708-14.7-46.536-43.808-46.536-75.96 0-47.084 38.304-85.388 85.392-85.388 47.084 0 85.384 38.304 85.384 85.388 0 32.148-17.832 61.26-46.532 75.972l-1.672 3.156 1.908 15.396c0 4.784-1.892 9.288-5.328 12.672a3.116 3.116 0 0 0-.032 4.408 3.12 3.12 0 0 0 4.408.032c4.64-4.572 7.196-10.648 7.168-17.492l-1.672-13.648c29.66-16.084 47.992-46.728 47.992-80.5 0-50.516-41.104-91.62-91.624-91.62zm-24.204 233.771h48.408c4.46 0 8.088 3.628 8.088 8.088s-3.628 8.088-8.088 8.088h-48.408c-4.46 0-8.088-3.628-8.088-8.088 0-4.459 3.628-8.088 8.088-8.088z" />
    <path d="M195.627 177.769a2.2 2.2 0 0 0-1.04-4.276c-4.808 1.18-10.2-.456-14.416-4.352a.048.048 0 0 0-.02-.02c3.548-4.672 5.24-10.444 4.664-15.988-.312-2.972-1.32-5.004-3.08-6.212-1.66-1.136-3.628-1.312-5.54-.496-2.82 1.204-5.268 4.56-5.824 7.976-.82 5.024.608 10.28 3.864 14.684-2.536 2.276-5.544 3.64-8.672 3.904-3.52.3-7.184-1.08-10.092-3.66 2.324-3.8 3.736-7.808 4.588-11.14 1.012-3.944.5-6.868-1.512-8.692-1.448-1.308-3.332-1.736-5.296-1.216-2.82.752-5.468 3.396-6.44 6.42-1.6 4.94-.484 10.388 3.044 15.008-1.312 1.652-2.856 3.18-4.684 4.464-.248.176-.508.344-.76.504-1.952-5.3-4.5-10.376-7.78-15.156-3.868-5.624-7.572-6.332-10.004-5.912-1.548.252-3.036 1.04-4.436 2.328-2.804 2.596-4.272 6.516-4.012 10.756.288 4.788 2.636 9.22 6.276 11.856 4.78 3.456 11.296 4.172 17.324 2.192 4.944 16.716 4.384 35.608 2.752 54.052a2.196 2.196 0 0 0 2.196 2.392 2.206 2.206 0 0 0 2.188-2.008c1.692-19.112 2.244-38.728-3.072-56.232.636-.36 1.256-.752 1.86-1.176a26.52 26.52 0 0 0 5.212-4.848c3.752 3.172 8.484 4.82 13.02 4.448 4.1-.348 7.992-2.1 11.24-5.016l.008.008c5.296 4.908 12.188 6.924 18.444 5.408zm-68.596-2.784c-2.548-1.844-4.26-5.12-4.464-8.556-.18-2.956.748-5.532 2.612-7.26.74-.684 1.488-1.104 2.16-1.22.144-.02.28-.032.416-.032 2.1 0 4.16 2.524 5.244 4.1 3.132 4.556 5.552 9.428 7.396 14.532-4.7 1.521-9.78 1.024-13.364-1.564zm25.432-9.235c-1.928-3.136-2.468-6.588-1.46-9.696.508-1.58 2.028-3.16 3.388-3.52.18-.048.336-.072.468-.072.352 0 .568.14.732.292.688.624.76 2.168.208 4.34-.668 2.607-1.712 5.679-3.336 8.656zm22.252-10.641c.312-1.904 1.784-4.028 3.212-4.64.256-.112.472-.156.652-.156.28 0 .492.108.672.232.612.42 1.02 1.472 1.192 3.044.42 4.064-.772 8.456-3.224 12.072-2.164-3.268-3.08-7.007-2.504-10.552z" />
    <path d="M179.407 178.958c-8.268 18.016-10.476 37.244-6.772 56.708.528 2.78 4.772 1.604 4.244-1.168-3.464-18.196-1.408-36.46 6.328-53.316 1.172-2.561-2.62-4.801-3.8-2.224zM194.783 61.734c-2.456-1.416-4.676 2.384-2.22 3.8 21.544 12.404 33.632 35.796 31.484 60.532-.248 2.82 4.156 2.804 4.4 0 2.276-26.228-10.876-51.212-33.664-64.332zM225.675 149.149c2.28-4.128 2.964-8.608 2.172-13.24-.476-2.784-4.716-1.604-4.244 1.172.588 3.428-.056 6.816-1.728 9.848-1.372 2.485 2.428 4.704 3.8 2.22zM93.779 90.149c-6.652 10.196-10.204 21.604-10.616 33.768-.096 2.832 4.304 2.828 4.4 0 .388-11.452 3.756-21.948 10.016-31.544 1.548-2.38-2.26-4.587-3.8-2.224zM83.503 134.878c-1 5.444-.056 10.808 2.96 15.476 1.532 2.368 5.344.168 3.8-2.22-2.356-3.644-3.304-7.796-2.516-12.088.508-2.768-3.732-3.957-4.244-1.168zM151.571 16.086V2.125c0-2.832-4.4-2.836-4.4 0v13.96c0 2.832 4.4 2.837 4.4.001zM265.939 55.297l-15.796 10.5c-2.348 1.56-.148 5.376 2.22 3.8l15.796-10.5c2.348-1.56.148-5.376-2.22-3.8zM46.231 81.534c-2.008-2.004-5.12 1.104-3.112 3.112 3.724 3.72 7.448 7.444 11.168 11.168 2.008 2.004 5.12-1.104 3.112-3.112-3.724-3.72-7.444-7.444-11.168-11.168zM93.171 45.018c1.584 2.328 5.4.128 3.8-2.22-2.832-4.16-5.66-8.324-8.496-12.484-1.584-2.328-5.396-.132-3.796 2.22 2.832 4.159 5.664 8.323 8.492 12.484zM210.915 38.549c2.684-3.344 5.364-6.692 8.048-10.036 1.756-2.188-1.34-5.32-3.112-3.112-2.684 3.348-5.364 6.692-8.048 10.036-1.756 2.188 1.34 5.321 3.112 3.112z" />
  </svg>
                </div>
              
              {/* Small badge */}
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-3 py-1.5 text-xs font-semibold text-lime-700">
                <span className="h-2 w-2 rounded-full bg-lime-500" />
                Get a Free Quote
              </div>

              <h2 className="max-w-md text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                Get the Right{" "}
                <span className="text-lime-600">LED Lighting</span>{" "}
                for Your Space
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
                Tell us your requirement and our team will help you find
                the best lighting solution for your space.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                    ✓
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Expert lighting recommendations
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                    ✓
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Solutions tailored to your requirement
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                    ✓
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Quick response from our team
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative p-2 sm:p-6 lg:p-8">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-xl shadow-gray-200/40 sm:p-7">
                
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Tell Us What You Need
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Fill in the details and we'll get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        autoComplete="name"
                        disabled={loading}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Email{" "}
                        <span className="font-normal text-gray-400">
                          (Optional)
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        disabled={loading}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Mobile Number{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter 10 digit number"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        disabled={loading}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                      <p className="mt-1 text-[11px] text-gray-400">
                        Enter any 10-digit mobile number
                      </p>
                    </div>

                    {/* PRODUCT */}
                    <div>
                      <label
                        htmlFor="product"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Select Product{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          disabled={loading}
                          className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 pr-10 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <option value="">
                            Select a product
                          </option>

                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>

                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* PLACE */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="place"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Place <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="place"
                        name="place"
                        type="text"
                        value={formData.place}
                        onChange={handleChange}
                        placeholder="Enter your city / location"
                        autoComplete="address-level2"
                        disabled={loading}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Message / Requirement{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your lighting requirement..."
                        rows={4}
                        disabled={loading}
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-600 px-5 text-sm font-bold text-white shadow-lg shadow-lime-600/20 transition-all hover:-translate-y-0.5 hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-30"
                          />
                          <path
                            d="M21 12a9 9 0 0 0-9-9"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* SUCCESS / ERROR MESSAGE */}
                  <div
                    aria-live="polite"
                    className="mt-3 min-h-[44px]"
                  >
                    {success && (
                      <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                          ✓
                        </div>

                        <div>
                          <p className="font-semibold">
                            Request submitted successfully!
                          </p>
                          <p className="mt-0.5 text-xs text-green-600">
                            Thank you. Our team will contact you shortly.
                          </p>
                        </div>
                      </div>
                    )}

                    {error && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                          !
                        </div>

                        <div>
                          <p className="font-semibold">
                            Unable to submit your request
                          </p>
                          <p className="mt-0.5 text-xs text-red-600">
                            {error}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="mt-2 text-center text-[11px] text-gray-400">
                    Your information is safe with us and will only be used
                    to respond to your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;