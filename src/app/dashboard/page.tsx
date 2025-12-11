"use client";

import { Sidebar } from "./components/Sidebar";
import { RecentTransactionsCard } from "./components/RecentTransactionsCard";
import { CustomersPieCard } from "./components/CustomersPieCard";
import { WeeklyActivityCard } from "./components/WeeklyActivityCard";
import { RevenueChartCard } from "./components/RevenueChartCard";
import { Topbar } from "./components/Topbar";
import { StatsCard } from "./components/StatsCard";
import { useTheme } from "next-themes";

export default function DashboardPage() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="flex">
        <main className="flex-1 p-6">
          <Topbar onToggleTheme={toggleTheme} isDark={isDark}>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Dashboard Overview
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back! Here's what's happening
              </span>
            </div>
          </Topbar>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatsCard title="Total Revenue" value="$124,563" change="+12.5%" />
            <StatsCard title="Active Users" value="8,234" change="+8.2%" />
            <StatsCard title="Total Orders" value="1,425" change="-3.1%" />
            <StatsCard title="Page Views" value="45,231" change="+15.5%" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <RevenueChartCard />
            </div>
            <div>
              <CustomersPieCard />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 auto-rows-[1fr]">
            <div className="lg:col-span-2 h-full">
              <WeeklyActivityCard />
            </div>

            <div className="lg:col-span-3 h-full">
              <RecentTransactionsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
