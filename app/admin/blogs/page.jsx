"use client";

import React, { useEffect, useState } from "react";
import AdminSidebar from "@/compoents/Admin/AdminSidebar";
import { FiEdit2, FiTrash2, FiPlus, FiFileText } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Get all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/blog");

      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await res.json();

      // Handles either { blogs: [] } or directly []
      setBlogs(data.blogs || data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [deletingId]);

  // Delete blog
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
      
        throw new Error(data.message || "Failed to delete blog");
      }

     
    } catch (error) {
      console.error("Delete error:", error);
      alert(error.message || "Failed to delete blog");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="lg:ml-72 p-5 md:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all your blog posts
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#85A30F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#718b0d]"
          >
            <FiPlus size={18} />
            Create New Blog
          </Link>
        </div>

        {/* Blog count */}
        {!loading && (
          <div className="mb-5 text-sm text-gray-500">
            Total Blogs:{" "}
            <span className="font-semibold text-gray-900">{blogs.length}</span>
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center rounded-xl bg-white shadow-sm">
            <div className="text-center">
              <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#85A30F]" />
              <p className="text-sm text-gray-500">Loading blogs...</p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          /* Empty state */
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl bg-white px-5 text-center shadow-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#85A30F]/10">
              <FiFileText size={28} className="text-[#85A30F]" />
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              No blogs found
            </h2>

            <p className="mt-1 max-w-md text-sm text-gray-500">
              You haven't created any blog posts yet.
            </p>

            <Link
              href="/admin/blogs/new"
              className="mt-5 rounded-lg bg-[#85A30F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#718b0d]"
            >
              Create Your First Blog
            </Link>
          </div>
        ) : (
          /* Blog table */
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Blog
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Permalink
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Date
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >
                      {/* Blog */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-4">
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="h-14 w-20 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-gray-100">
                              <FiFileText size={20} className="text-gray-400" />
                            </div>
                          )}

                          <div className="max-w-[350px]">
                            <h3 className="truncate font-semibold text-gray-900">
                              {blog.title}
                            </h3>

                            {blog.metaDescription && (
                              <p className="mt-1 truncate text-xs text-gray-500">
                                {blog.metaDescription}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Permalink */}
                      <td className="px-5 py-4">
                        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                          /{blog.permalink}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4 text-sm text-gray-600">
                        {blog.date
                          ? new Date(blog.date).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "—"}
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          {/* Edit */}
                          <button
                            onClick={() =>
                              router.push(`/admin/blogs/edit/${blog._id}`)
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-[#85A30F] hover:bg-[#85A30F]/10 hover:text-[#85A30F]"
                            title="Edit blog"
                          >
                            <FiEdit2 size={16} />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(blog._id)}
                            disabled={deletingId === blog._id}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete blog"
                          >
                            {deletingId === blog._id ? (
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-200 border-t-red-500" />
                            ) : (
                              <FiTrash2 size={16} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
