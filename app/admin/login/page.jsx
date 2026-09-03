"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    // Simulate checking
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (password === "PB@123" && email === "altiuslightings@gmail.com") {
      document.cookie = "admin-token=secret123; path=/";
      router.push("/admin");
    } else {
      alert("Wrong password!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-black">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#85A30F]">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-600" size={20} />

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-600" size={20} />

            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="w-full pl-10 pr-12 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              disabled={loading}
              className="absolute right-3 top-3.5 text-gray-600 hover:text-gray-800 disabled:opacity-50"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#85A30F] text-white py-3 rounded-xl font-semibold hover:bg-black transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Checking...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-center text-sm text-gray-900">
            © {new Date().getFullYear()} Inquiry Bazaar Pvt Ltd.
          </p>
        </form>
      </div>
    </div>
  );
}
