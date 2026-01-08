"use client";

import {
  Search,
  Upload,
  Download,
  Plus,
  Filter,
  RefreshCcw,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { AddRecordModal } from "../components/ui/AddRecordModal";
import { Topbar } from "../dashboard/components/Topbar";

const stats = [
  {
    title: "Total Records",
    value: "5,234",
    color: "text-greenMain",
  },
  {
    title: "Active",
    value: "4,123",
    color: "text-green-500",
  },
  {
    title: "Inactive",
    value: "1,111",
    color: "text-yellow-500",
  },
  {
    title: "Updated Today",
    value: "234",
    color: "text-blue-500",
  },
];

const records = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    records: 1234,
    date: "Nov 20, 2024",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Manager",
    status: "Active",
    records: 2341,
    date: "Nov 19, 2024",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "User",
    status: "Inactive",
    records: 567,
    date: "Nov 18, 2024",
  },
  {
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "Manager",
    status: "Active",
    records: 890,
    date: "Nov 17, 2024",
  },
  {
    name: "Tom Brown",
    email: "tom@example.com",
    role: "User",
    status: "Active",
    records: 345,
    date: "Nov 16, 2024",
  },
];

export default function DataManagementPage() {
  const [open, setOpen] = useState(false);
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
      <AddRecordModal open={open} onClose={() => setOpen(false)} />
      <div className="p-6 space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Data Management</h1>
            <p className="text-sm text-gray-500">
              Manage and organize your data records
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn-secondary">
              <Upload size={16} /> Import
            </button>
            <button className="btn-secondary">
              <Download size={16} /> Export
            </button>
            <button className="btn-primary" onClick={() => setOpen(true)}>
              <Plus size={16} /> Add Record
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4"
            >
              <div>
                <p className="text-xs text-gray-500">{s.title}</p>
                <p className={`text-lg font-semibold ${s.color}`}>{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TABLE CARD */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-4">
          {/* SEARCH + ACTIONS */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full ">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                placeholder="Search records..."
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="icon-btn">
                <Filter size={16} />
              </button>
              <button className="icon-btn">
                <RefreshCcw size={16} />
              </button>
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium cursor-pointer">
              All Records
            </span>
            <span className="px-3 py-1 rounded-full text-xs cursor-pointer">
              Active
            </span>
            <span className="px-3 py-1 rounded-full text-xs cursor-pointer">
              Inactive
            </span>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b dark:border-gray-800">
                <tr className="text-left text-xs text-gray-500">
                  <th className="py-3 px-2">Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Records</th>
                  <th>Last Updated</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {records.map((r) => (
                  <tr
                    key={r.email}
                    className="border-b last:border-0 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-3 px-2 font-medium">{r.name}</td>
                    <td>{r.email}</td>
                    <td>
                      <span className="px-2 py-0.5 rounded-full border text-xs">
                        {r.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium
                        ${
                          r.status === "Active"
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30"
                            : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td>{r.records}</td>
                    <td className="text-gray-500 text-xs">{r.date}</td>
                    <td className="text-right">
                      <div className="flex justify-end gap-3">
                        <Pencil
                          size={16}
                          className="cursor-pointer text-gray-400 hover:text-greenMain"
                        />
                        <Trash2
                          size={16}
                          className="cursor-pointer text-gray-400 hover:text-red-500"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
