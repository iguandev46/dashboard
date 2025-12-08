"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { IconButton } from "@/app/components/ui/IconButton";
import {
  Moon,
  Sun,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { MenuItem } from "./MenuItem";

export function Topbar({
  onToggleTheme,
  isDark,
  children,
  classN
}: {
  onToggleTheme: () => void;
  isDark: boolean;
  children?: ReactNode;
  classN?: string
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`flex items-center justify-between mb-4 ${classN}`}>

      <div className="flex flex-col gap-1">
        {children} 
      </div>

      <div className="flex items-center gap-3">
       
        <IconButton>
          <Bell size={18} />
          <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500 ring-1 ring-white dark:ring-gray-900" />
        </IconButton>

        <IconButton onClick={onToggleTheme}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </IconButton>

        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="text-sm text-left hidden sm:block">
              <div className="font-medium text-gray-900 dark:text-gray-100">
                Dev
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Admin
              </div>
            </div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl shadow-lg overflow-hidden z-50">
              <MenuItem icon={<User size={16} />} label="Profile" href="/profile"/>
              <MenuItem icon={<Settings size={16} />} label="Settings" />
              <div className="h-px bg-gray-100 dark:bg-gray-800 my-1" />
              <MenuItem
                icon={<LogOut size={16} />}
                label="Logout"
                danger
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}