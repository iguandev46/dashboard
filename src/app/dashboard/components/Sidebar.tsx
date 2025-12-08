"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {  User, Home, Settings, Users } from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    label: "Profile",
    href: "/profile",
    icon:  User,
  },
  {
    label: "Users",
    href: "/users",
    icon: Users,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-green p-4">
        <div className="w-10 h-10 rounded-2xl bg-green-main flex items-center justify-center text-white font-bold">
          H
        </div>
        <div>
          <div className="font-semibold text-green dark:text-gray-100">HUD CRM</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Admin Dashboard</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative flex items-center gap-3 p-3 rounded-xl
                transition-all
                ${isActive
                  ? "bg-green-main text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              <Icon size={18} className={isActive ? "text-white" : ""} />

              <span className={`text-sm font-medium`}>
                {item.label}
              </span>

             
              {isActive && (
                <span className="absolute right-3 w-2 h-2 bg-white rounded-full"></span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 p-4">v0.1.0</div>
    </aside>
  );
}
