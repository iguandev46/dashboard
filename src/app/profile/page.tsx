"use client";

import { useState } from "react";

import { AccountActivityCard } from "../components/profile/AccountActivityCard";
import { PersonalInfoCard } from "../components/profile/PersonalInfoCard";
import { ProfileCard } from "../components/profile/ProfileCard";
import { Topbar } from "../dashboard/components/Topbar";
import { Search } from "lucide-react";

export default function ProfilePage() {
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-6 space-y-6">
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
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Profile
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your profile and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <ProfileCard />
        <div className="xl:col-span-2">
          <PersonalInfoCard />
        </div>
      </div>

      <AccountActivityCard />
    </div>
  );
}
