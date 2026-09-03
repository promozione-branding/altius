
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Menu, X, ImagePlus, ArrowLeft, Save } from "lucide-react";

import AdminSidebar from "@/compoents/Admin/AdminSidebar";

const JoditEditor = dynamic(
    () => import("jodit-react"),
    { ssr: false }
);

export default function Page() {
    const router = useRouter();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");
    const [preview, setPreview] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content.trim()) {
            alert("Please enter blog content.");
            return;
        }

        setLoading(true);

        try {
            const fd = new FormData(e.currentTarget);

            fd.append("content", content);

            const res = await fetch("/api/blog", {
                method: "POST",
                body: fd,
            });

            const data = await res.json();
          

            if (res.ok) {
                router.push("/admin/blogs");
            } else {
                alert(data?.message || "Failed to save blog.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Sidebar */}
           <AdminSidebar/>

            {/* Main Area */}
            <div className="flex-1 min-w-0">

                {/* Mobile Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:justify-end">

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
                    >
                        {sidebarOpen ? (
                            <X size={25} />
                        ) : (
                            <Menu size={25} />
                        )}
                    </button>

                </header>

                {/* Content */}
                <main className="p-4 sm:p-6 lg:p-8">

                    {/* Page Header */}
                    <div className="mx-auto mb-6 max-w-4xl">

                        <button
                            type="button"
                            onClick={() => router.push("/admin/blogs")}
                            className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#85A30F]"
                        >
                            <ArrowLeft size={17} />
                            Back to Blogs
                        </button>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#85A30F]">
                                Blog Management
                            </p>

                            <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                                Create New Blog
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Create and publish a new blog for Elstrong by
                                Altius Lighting.
                            </p>
                        </div>

                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto max-w-4xl"
                    >

                        {/* Basic Information */}
                        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                            <div className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Basic Information
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Add the main information about your blog.
                                </p>
                            </div>

                            {/* Title */}
                            <div className="mb-5">
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Blog Title
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter blog title"
                                    required
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#85A30F] focus:ring-2 focus:ring-[#85A30F]/10"
                                />
                            </div>

                            {/* Permalink + Date */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Permalink
                                    </label>

                                    <div className="flex items-center overflow-hidden rounded-xl border border-gray-300 focus-within:border-[#85A30F] focus-within:ring-2 focus-within:ring-[#85A30F]/10">
                                        <span className="hidden bg-gray-50 px-3 text-sm text-gray-400 sm:block">
                                            /blog/
                                        </span>

                                        <input
                                            type="text"
                                            name="permalink"
                                            placeholder="your-blog-url"
                                            required
                                            className="w-full px-4 py-3 text-sm text-gray-900 outline-none"
                                        />
                                    </div>

                                    <p className="mt-1.5 text-xs text-gray-400">
                                        Use lowercase words separated by
                                        hyphens.
                                    </p>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Publish Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#85A30F] focus:ring-2 focus:ring-[#85A30F]/10"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* SEO */}
                        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                            <div className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    SEO Settings
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Optimize your blog for search engines.
                                </p>
                            </div>

                            {/* Meta Title */}
                            <div className="mb-5">
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Meta Title
                                </label>

                                <input
                                    type="text"
                                    name="metaTitle"
                                    placeholder="Enter SEO meta title"
                                    maxLength={60}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#85A30F] focus:ring-2 focus:ring-[#85A30F]/10"
                                />

                                <p className="mt-1.5 text-xs text-gray-400">
                                    Recommended: 50–60 characters.
                                </p>
                            </div>

                            {/* Meta Description */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Meta Description
                                </label>

                                <textarea
                                    name="metaDescription"
                                    placeholder="Write a short SEO-friendly description..."
                                    rows={4}
                                    maxLength={160}
                                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#85A30F] focus:ring-2 focus:ring-[#85A30F]/10"
                                />

                                <p className="mt-1.5 text-xs text-gray-400">
                                    Recommended: 150–160 characters.
                                </p>
                            </div>

                        </div>

                        {/* Content Editor */}
                        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                            <div className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Blog Content
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Write and format your blog content.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-300">

                                <JoditEditor
                                    value={content}
                                    tabIndex={1}
                                    onChange={(newContent) =>
                                        setContent(newContent)
                                    }
                                />

                            </div>

                        </div>

                        {/* Thumbnail */}
                        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                            <div className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Blog Thumbnail
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Upload an attractive image for your blog.
                                </p>
                            </div>

                            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8 transition hover:border-[#85A30F] hover:bg-[#85A30F]/5">

                                <ImagePlus
                                    size={35}
                                    className="mb-3 text-gray-400"
                                />

                                <span className="text-sm font-semibold text-gray-700">
                                    Click to upload thumbnail
                                </span>

                                <span className="mt-1 text-xs text-gray-400">
                                    PNG, JPG, WEBP up to 5MB
                                </span>

                                <input
                                    type="file"
                                    name="image"
                                    accept="image/png,image/jpeg,image/webp"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                            </label>

                            {/* Preview */}
                            {preview && (
                                <div className="mt-5">

                                    <p className="mb-2 text-sm font-semibold text-gray-700">
                                        Preview
                                    </p>

                                    <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-gray-200">

                                        <img
                                            src={preview}
                                            alt="Blog thumbnail preview"
                                            className="h-52 w-full object-cover"
                                        />

                                    </div>

                                </div>
                            )}

                        </div>

                        {/* Submit */}
                        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                            <button
                                type="button"
                                onClick={() =>
                                    router.push("/admin/blogs")
                                }
                                disabled={loading}
                                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#85A30F] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save size={17} />
                                        Publish Blog
                                    </>
                                )}
                            </button>

                        </div>

                    </form>
                </main>
            </div>
        </div>
    );
}

