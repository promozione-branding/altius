
"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import axios from "axios";

export default function PopupForm({ isOpen, onClose }) {
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Prevent background scrolling
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

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const payload = {
        platform: "Altius Elstrong Popup Form",
        platformEmail: "altus@email.com",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        product: formData.product,
        message: formData.message || "N/A",
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setSuccess(true);

        // Close popup after 2 seconds
        setTimeout(() => {
          setSuccess(false);
          setFormData(initialFormData);
          onClose();
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

  const handleClose = () => {
    if (loading) return;

    setSuccess(false);
    setError("");
    setFormData(initialFormData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget && !loading) {
          handleClose();
        }
      }}
    >
      {/* POPUP */}
      <div className="relative max-h-[95vh] w-full max-w-[620px] overflow-hidden bg-white p-2 shadow-2xl">
        <div className="relative w-full bg-white px-4 py-3 sm:px-5 sm:py-4">

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:bg-slate-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close"
          >
            <X size={17} />
          </button>

          {/* SUCCESS */}
          {success ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2
                  size={34}
                  className="text-green-600"
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="text-2xl font-bold uppercase tracking-wide text-black">
                Thank You!
              </h2>

              <div className="mx-auto mt-2 h-[1px] w-12 bg-black" />

              <p className="mt-4 max-w-md text-sm leading-5 text-slate-800">
                Your enquiry has been submitted successfully.
                <br />
                Our team will contact you shortly.
              </p>

              <p className="mt-4 text-xs font-medium text-slate-600">
                This window will close automatically...
              </p>
            </div>
          ) : (
            <>
              {/* HEADING */}
              <div className="mb-5 pr-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-black">
                  Get In Touch
                </p>

                <div className="mx-auto mt-2 h-[1px] w-10 bg-black" />

                <h2 className="mt-3 text-xl font-bold uppercase leading-tight text-black sm:text-2xl">
                  Send Your Enquiry
                </h2>

                <p className="mx-auto mt-2 max-w-md text-xs leading-4 text-slate-800">
                  Fill in the details below and our team will get back to you
                  shortly.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Name *
                    </label>

                    <input
                      id="popup-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="h-10 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black disabled:bg-slate-50"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="popup-phone"
                      className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Phone *
                    </label>

                    <input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      disabled={loading}
                      className="h-10 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black disabled:bg-slate-50"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="popup-email"
                      className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Email *
                    </label>

                    <input
                      id="popup-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="h-10 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black disabled:bg-slate-50"
                    />
                  </div>

                  {/* PRODUCT */}
                  <div>
                    <label
                      htmlFor="popup-product"
                      className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Product *
                    </label>

                    <select
                      id="popup-product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="h-10 w-full border border-slate-200 bg-white px-3 text-sm text-black outline-none transition focus:border-black disabled:bg-slate-50"
                    >
                      <option value="">Select Product</option>
                      <option value="Concealed Light">
                        Concealed Light
                      </option>
                      <option value="COB Lens Model">
                        COB Lens Model
                      </option>
                      <option value="LED Slim Panel">
                        LED Slim Panel
                      </option>
                      <option value="Striker">
                        Striker
                      </option>
                      <option value="PC Panel">
                        PC Panel
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="popup-message"
                      className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="popup-message"
                      name="message"
                      rows={2}
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full resize-none border border-slate-200 bg-white px-3 py-2.5 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-black disabled:bg-slate-50"
                    />
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 flex h-11 w-full items-center justify-center bg-[#85a30f] px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>

                {/* ERROR MESSAGE */}
                {error && (
                  <p className="mt-3 text-center text-xs font-medium text-red-600">
                    {error}
                  </p>
                )}
              </form>

              {/* BOTTOM TEXT */}
              <p className="mt-3 text-center text-[10px] text-slate-800">
                Our team will contact you regarding your enquiry.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
