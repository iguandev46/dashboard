"use client";

import { Check, Search } from "lucide-react";
import { Topbar } from "../dashboard/components/Topbar";
import { useState } from "react";

export default function PricingPage() {
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-8">
      <Topbar
        onToggleTheme={handleToggleTheme}
        isDark={isDark}
        classN="border-b border-gray-200 dark:border-gray-800 "
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
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold">Pricing Plans</h1>
        <p className="text-sm text-gray-500 mt-1">
          Choose the perfect plan for your business needs
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* STARTER */}
        <PricingCard
          title="Starter"
          subtitle="Perfect for small teams getting started"
          price="$29"
          features={[
            "Up to 10 users",
            "5GB storage",
            "Basic analytics",
            "Email support",
            "24/7 access",
          ]}
        />

        {/* PROFESSIONAL (POPULAR) */}
        <PricingCard
          title="Professional"
          subtitle="Best for growing businesses"
          price="$99"
          popular
          features={[
            "Up to 50 users",
            "50GB storage",
            "Advanced analytics",
            "Priority support",
            "Custom integrations",
            "API access",
          ]}
        />

        {/* ENTERPRISE */}
        <PricingCard
          title="Enterprise"
          subtitle="For large organizations"
          price="$299"
          features={[
            "Unlimited users",
            "Unlimited storage",
            "Enterprise analytics",
            "24/7 phone support",
            "Dedicated account manager",
            "Custom development",
            "SLA guarantee",
          ]}
        />
      </div>
    </div>
  );
}

/* ---------------- COMPONENT ---------------- */

function PricingCard({
  title,
  subtitle,
  price,
  features,
  popular = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden
      bg-white dark:bg-gray-900
      ${
        popular
          ? "border-greenMain shadow-md"
          : "border-gray-200 dark:border-gray-800"
      }`}
    >
      {/* FULL WIDTH POPULAR BAR */}
      {popular && (
        <div className="bg-greenMain text-white text-xs font-medium text-center py-2">
          Most Popular
        </div>
      )}

      <div className="p-6">
        {/* TITLE */}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">{subtitle}</p>

        {/* PRICE */}
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-gray-500">/month</span>
        </div>

        {/* BUTTON */}
        <button
          className={`w-full py-2 rounded-lg text-sm font-medium mb-6
          ${
            popular
              ? "bg-greenMain text-white"
              : "border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          Get Started
        </button>

        {/* FEATURES */}
        <ul className="space-y-3 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check size={16} className="text-greenMain" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
