"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiSave,
  FiImage,
  FiX,
} from "react-icons/fi";
import AdminSidebar from "@/compoents/Admin/AdminSidebar";

const JoditEditor = dynamic(
  () => import("jodit-react"),
  {
    ssr: false,
  }
);

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [permalink, setPermalink] = useState("");
  const [date, setDate] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // =========================
  // Get Blog
  // =========================
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/blog/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();

        // Supports:
        // { blog: {...} }
        // OR directly {...}
        const blog = data.blog || data;

        setTitle(blog.title || "");
        setPermalink(blog.permalink || "");

        // Format date for input[type="date"]
        if (blog.date) {
          setDate(
            new Date(blog.date)
              .toISOString()
              .split("T")[0]
          );
        }

        setMetaTitle(blog.metaTitle || "");
        setMetaDescription(blog.metaDescription || "");
        setContent(blog.content || "");

        if (blog.image) {
          setPreview(blog.image);
        }
      } catch (error) {
        console.error("Fetch blog error:", error);
        alert("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // =========================
  // Image Change
  // =========================
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  // =========================
  // Remove New Image
  // =========================
  const removeImage = () => {
    setImage(null);

    // If you want to keep old image,
    // don't remove preview here.
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter blog title");
      return;
    }

    if (!content.trim()) {
      alert("Please enter blog content");
      return;
    }

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("id", id);
      formData.append("title", title);
      formData.append("permalink", permalink);
      formData.append("date", date);
      formData.append("metaTitle", metaTitle);
      formData.append(
        "metaDescription",
        metaDescription
      );
      formData.append("content", content);

      // Only send image if user selected a new one
      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Failed to update blog"
        );
      }

      alert("Blog updated successfully");

      router.push("/admin/blogs");
    } catch (error) {
      console.error("Update blog error:", error);

      alert(
        error.message || "Failed to update blog"
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // Loading
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-4 border-gray-200 border-t-[#85A30F]" />

            <p className="text-sm text-gray-500">
              Loading blog...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
        <AdminSidebar/>
      <main className="p-5 md:p-8 lg:ml-72">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <Link
            href="/admin/blogs"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#85A30F]"
          >
            <FiArrowLeft size={16} />
            Back to Blogs
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Blog
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Update your blog post and SEO information.
            </p>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-6xl"
        >
          {/* BASIC INFORMATION */}
          <div className="mb-6 rounded-xl bg-white p-5 shadow-sm md:p-7">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Basic Information
            </h2>

            <div className="grid gap-6">
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Blog Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  placeholder="Enter blog title"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#85A30F] focus:ring-2 focus:ring-[#85A30F]/10"
                />
              </div>

              {/* Permalink */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Permalink
                </label>

                <div className="flex overflow-hidden rounded-lg border border-gray-200 focus-within:border-[#85A30F]">
                  <span className="flex items-center bg-gray-50 px-3 text-sm text-gray-400">
                    /blog/
                  </span>

                  <input
                    type="text"
                    value={permalink}
                    onChange={(e) =>
                      setPermalink(
                        e.target.value
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                      )
                    }
                    className="w-full px-3 py-3 text-sm outline-none"
                    placeholder="my-blog-post"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Publish Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#85A30F]"
                />
              </div>
            </div>
          </div>

          {/* ================= SEO ================= */}
          <div className="mb-6 rounded-xl bg-white p-5 shadow-sm md:p-7">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              SEO Settings
            </h2>

            <div className="space-y-6">
              {/* Meta title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Meta Title
                </label>

                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) =>
                    setMetaTitle(e.target.value)
                  }
                  placeholder="Enter SEO title"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#85A30F]"
                />
              </div>

              {/* Meta description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Meta Description
                </label>

                <textarea
                  rows={4}
                  value={metaDescription}
                  onChange={(e) =>
                    setMetaDescription(
                      e.target.value
                    )
                  }
                  placeholder="Enter SEO description"
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#85A30F]"
                />
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="mb-6 rounded-xl bg-white p-5 shadow-sm md:p-7">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Blog Content
            </h2>

            <JoditEditor
              value={content}
              onBlur={(newContent) =>
                setContent(newContent)
              }
              config={{
                readonly: false,
                height: 500,
                placeholder:
                  "Write your blog content...",
              }}
            />
          </div>

          {/* ================= IMAGE ================= */}
          <div className="mb-6 rounded-xl bg-white p-5 shadow-sm md:p-7">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Blog Thumbnail
            </h2>

            {preview ? (
              <div className="relative max-w-md overflow-hidden rounded-xl border border-gray-200">
                <img
                  src={preview}
                  alt="Blog thumbnail"
                  className="h-56 w-full object-cover"
                />

                {image && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
                  >
                    <FiX size={18} />
                  </button>
                )}
              </div>
            ) : (
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 px-5 py-12 transition hover:border-[#85A30F] hover:bg-[#85A30F]/5">
                <FiImage
                  size={35}
                  className="mb-3 text-gray-400"
                />

                <span className="text-sm font-medium text-gray-700">
                  Click to upload thumbnail
                </span>

                <span className="mt-1 text-xs text-gray-400">
                  PNG, JPG or WEBP
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}

            {/* Change image */}
            {preview && (
              <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#85A30F] hover:text-[#85A30F]">
                <FiImage size={16} />
                Change Image

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#85A30F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#718b0d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Updating...
                </>
              ) : (
                <>
                  <FiSave size={17} />
                  Update Blog
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
