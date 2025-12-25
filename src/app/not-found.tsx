"use client";

import { Search, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Topbar } from "./dashboard/components/Topbar";
import { useState } from "react";

export default function NotFoundPage() {
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-6 space-y-6">
      {/* TOPBAR */}
      <Topbar
        onToggleTheme={handleToggleTheme}
        isDark={isDark}
        classN="border-b border-gray-200 dark:border-gray-800"
      >
        <div className="relative w-full max-w-sm">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 
            text-sm text-gray-900 dark:text-gray-100 outline-none"
          />
        </div>
      </Topbar>

      {/* CONTENT */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-8 text-center space-y-6">
          {/* 404 */}
          <div className="text-6xl font-bold text-greenMain">404</div>

          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Oops! The page you're looking for doesn't exist.
              It might have been moved or deleted.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-greenMain text-white text-sm font-medium hover:opacity-90"
            >
              <Home size={16} />
              Go to Dashboard
            </Link>

            <button
              onClick={() => history.back()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
              border border-gray-200 dark:border-gray-800 
              text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>

          {/* SEARCH */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
            <p className="text-xs text-gray-500">
              Looking for something specific?
            </p>

            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                placeholder="Search"
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm outline-none"
              />
            </div>

            <p className="text-xs text-gray-500">
              Need help?{" "}
              <a href="#" className="text-greenMain hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
