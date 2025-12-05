"use client";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GreenSpinner } from "../components/ui/GreenSpinner";


export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const TEST_EMAIL = "test@example.com";
  const TEST_PASSWORD = "123456";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === TEST_EMAIL && password === TEST_PASSWORD) {
        setSuccess(true);

        setTimeout(() => {
          router.push("/dashboard");
        }, 800);
      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
    }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border dark:border-gray-800">

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#08E7B7] to-[#11CDAD] flex items-center justify-center text-white text-2xl font-bold">
            H
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-1 mb-6">
          Sign in to your account to continue
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {error && (
            <div className="text-sm text-red-500 bg-red-50 dark:bg-red-500/10 p-2 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 focus:ring-teal-500" />
              Remember me
            </label>
            <a href="#" className="text-teal-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-lg bg-gradient-to-r from-[#08E7B7] to-[#11CDAD] text-white font-semibold hover:opacity-90 transition flex items-center justify-center disabled:opacity-80"
          >
            {loading ? <GreenSpinner /> : "Sign In"}
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-teal-500 hover:underline">
              Sign up
            </a>
          </p>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-xs text-gray-500">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button className="border rounded-lg py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700">
              Google
            </button>
            <button className="border rounded-lg py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700">
              GitHub
            </button>
            <button className="border rounded-lg py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700">
              Twitter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
