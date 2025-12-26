"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { User, Home, Settings, Kanban, Menu, ShoppingCart, Clock, Mail, FileX, Folder } from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Scrum Board", href: "/scrum", icon: Kanban },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Orders", href: "/orders", icon: ShoppingCart },
  { label: "Coming Soon", href: "/coming-soon", icon: Clock },
  { label: "Email", href: "/email", icon: Mail },
  { label: "404 Error page", href: "/error-404", icon: FileX },
  { label: "Files", href: "/files", icon: Folder },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`
        bg-white dark:bg-gray-900 border-r dark:border-gray-800 h-screen
        flex flex-col transition-all duration-300
        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* HEADER */}
      <div
        className={`
          flex items-center justify-between p-4 border-b dark:border-gray-800
          ${open ? "" : "justify-center"}
        `}
      >
        {/* Logo hides when closed */}
        {open && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-green-main flex items-center justify-center text-white font-bold">
              H
            </div>
            <div>
              <div className="font-semibold text-green-main dark:text-gray-100">
                HUD CRM
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Admin Dashboard
              </div>
            </div>
          </div>
        )}

        {/* ONLY ELEMENT VISIBLE WHEN CLOSED */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MENU — hidden entirely when closed */}
      {open && (
        <nav className="flex-1 space-y-2 p-4">
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
                <Icon size={20} className={isActive ? "text-white" : ""} />
                <span className="text-sm font-medium">{item.label}</span>

                {isActive && (
                  <span className="absolute right-3 w-2 h-2 bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      )}

      {/* FOOTER visible only when open */}
      {open && (
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 p-4">
          v0.1.0
        </div>
      )}
    </aside>
  );
}
