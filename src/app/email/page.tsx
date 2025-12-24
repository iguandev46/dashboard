"use client";

import {
  Search,
  Star,
  Send,
  FileText,
  Shield,
  Mail,
  Plus,
  Paperclip,
} from "lucide-react";
import { Topbar } from "../dashboard/components/Topbar";
import { useState } from "react";

const folders = [
  { label: "Inbox", count: 12, active: true, icon: Mail },
  { label: "Starred", count: 3, icon: Star },
  { label: "Sent", count: 45, icon: Send },
  { label: "Drafts", count: 2, icon: FileText },
  { label: "Spam", count: 5, icon: Shield },
];

const emails = [
  {
    name: "John Smith",
    subject: "Q4 Sales Report",
    text: "Hi team, I wanted to share the latest sales figures for the quarter...",
    time: "10:30 AM",
    active: true,
    starred: true,
    attachment: true,
  },
  {
    name: "Sarah Johnson",
    subject: "Project Update - New Features",
    text: "The development team has completed the new dashboard features...",
    time: "9:15 AM",
    attachment: true,
  },
  {
    name: "Marketing Team",
    subject: "Campaign Results",
    text: "Our recent email campaign achieved a 25% open rate...",
    time: "Yesterday",
  },
  {
    name: "Mike Davis",
    subject: "Meeting Notes - Weekly Sync",
    text: "Here are the action items from today’s meeting...",
    time: "Yesterday",
    starred: true,
  },
  {
    name: "Support Team",
    subject: "Customer Feedback Summary",
    text: "This week we received 45 support tickets with an average...",
    time: "2 days ago",
  },
];

export default function EmailPage() {
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
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Email</h1>
          <p className="text-sm text-gray-500">
            Manage your messages and communications
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-greenMain text-white text-sm font-medium">
          <Plus size={16} /> Compose
        </button>
      </div>

      <div className="flex gap-6">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-4">
          <div className="space-y-1">
            {folders.map((f) => (
              <div
                key={f.label}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer
                  ${
                    f.active
                      ? "bg-greenMain text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <f.icon size={16} />
                  {f.label}
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full
                    ${
                      f.active ? "bg-white/20" : "bg-gray-100 dark:bg-gray-800"
                    }`}
                >
                  {f.count}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* EMAIL LIST */}
        <section className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          {emails.map((e, i) => (
            <div
              key={i}
              className={`flex items-center justify-between gap-4 px-6 py-4 
                             border-b border-gray-200 dark:border-gray-800 last:border-0 cursor-pointer
                           ${
                             e.active
                               ? "bg-green-50 dark:bg-green-900/10"
                               : "hover:bg-gray-50 dark:hover:bg-gray-800"
                           }`}
            >
              {/* LEFT */}
              <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                {e.name[0]}
              </div>
              <div className="flex-1">
                <div className="font-medium">{e.name}</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {e.subject}
                </div>
                <div className="text-xs text-gray-500 truncate max-w-xl">
                  {e.text}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4 text-gray-400">
                <span className="text-xs whitespace-nowrap">{e.time}</span>

                {e.starred && (
                  <Star
                    size={16}
                    className="text-greenMain"
                    fill="currentColor"
                  />
                )}

                {e.attachment && <Paperclip size={16} />}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
