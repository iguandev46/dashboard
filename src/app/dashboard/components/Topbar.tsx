import { IconButton } from "@/app/components/ui/IconButton";
import { Moon, Sun, Bell } from "lucide-react";

export function Topbar({
  onToggleTheme,
  isDark,
}: {
  onToggleTheme: () => void;
  isDark: boolean;
}) {
  return (
    <header className="flex items-center justify-between mb-4">
      {/* Left Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Dashboard Overview
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Notification Icon */}
        <IconButton>
          <Bell size={18} />
          {/* Optional: red dot for unread notifications */}
          <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500 ring-1 ring-white dark:ring-gray-900" />
        </IconButton>

        {/* Theme toggle */}
        <IconButton onClick={onToggleTheme}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </IconButton>

        {/* Profile */}
        <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="text-sm">
            <div className="font-medium text-gray-900 dark:text-gray-100">Dev</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
