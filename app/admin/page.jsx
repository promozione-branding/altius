
"use client";

import React from "react";
import {
    FiFileText,
    FiMessageSquare,
    FiPackage,
    FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import AdminSidebar from "@/compoents/Admin/AdminSidebar";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 lg:flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <main className="min-w-0 flex-1 pt-16 lg:pt-0">
                <div className="p-5 md:p-8">
                    {/* Welcome Header */}
                    <div className="mb-8 overflow-hidden rounded-2xl bg-[#85A30F] p-6 text-white shadow-sm md:p-8">
                        <div className="max-w-3xl">
                            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white/70">
                                Admin Dashboard
                            </p>

                            <h1 className="text-3xl font-bold md:text-4xl">
                                Welcome to Elstrong
                            </h1>

                            <p className="mt-2 text-lg font-medium text-white/90">
                                by Altius Lighting
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">
                                Manage your blogs 
                            </p>
                        </div>
                    </div>

                  

                    {/* Brand Section */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#85A30F]">
                                    ELSTRONG
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                                    Lighting Management System
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                                    Keep your Elstrong by Altius Lighting
                                    website content updated and organized
                                    through the admin panel.
                                </p>
                            </div>

                            <Link
                                href="/"
                                target="_blank"
                                className="inline-flex w-fit items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#85A30F]"
                            >
                                View Website
                                <FiArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

