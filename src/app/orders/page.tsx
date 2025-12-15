"use client";

import { Search, Filter, Download, Eye } from "lucide-react";
import { useMemo, useState } from "react";
import { SegmentedTabs } from "../components/ui/SegmentedTabs";
import { Topbar } from "../dashboard/components/Topbar";
import { useTheme } from "next-themes";

/* ---------------- TYPES ---------------- */

type OrderStatus =
  | "All"
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Canceled";

type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  items: number;
  total: string;
  payment: string;
  status: Exclude<OrderStatus, "All">;
};

/* ---------------- DATA ---------------- */

const orders: Order[] = [
  {
    id: "#ORD-2024-001",
    customer: "John Doe",
    email: "john@example.com",
    date: "Nov 20, 2024",
    items: 3,
    total: "$234.50",
    payment: "Credit Card",
    status: "Delivered",
  },
  {
    id: "#ORD-2024-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "Nov 19, 2024",
    items: 5,
    total: "$456.00",
    payment: "PayPal",
    status: "Shipped",
  },
  {
    id: "#ORD-2024-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "Nov 18, 2024",
    items: 2,
    total: "$189.99",
    payment: "Credit Card",
    status: "Processing",
  },
  {
    id: "#ORD-2024-004",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    date: "Nov 17, 2024",
    items: 7,
    total: "$567.80",
    payment: "Bank Transfer",
    status: "Pending",
  },
  {
    id: "#ORD-2024-005",
    customer: "Tom Brown",
    email: "tom@example.com",
    date: "Nov 16, 2024",
    items: 4,
    total: "$345.20",
    payment: "Credit Card",
    status: "Delivered",
  },
  {
    id: "#ORD-2024-006",
    customer: "Emily Davis",
    email: "emily@example.com",
    date: "Nov 15, 2024",
    items: 1,
    total: "$123.45",
    payment: "PayPal",
    status: "Canceled",
  },
];

/* ---------------- PAGE ---------------- */

export default function OrdersPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<OrderStatus>("All");
  const { theme, setTheme } = useTheme();

  /* ✅ MINIMAL FILTERING */
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchesStatus = status === "All" || o.status === status;

      const q = query.toLowerCase();
      const matchesQuery =
        o.id.toLowerCase().includes(q) ||
        o.customer.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q);

      return matchesStatus && matchesQuery;
    });
  }, [query, status]);
  
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  return (
    <div className="p-6 space-y-6">
      <Topbar
        onToggleTheme={toggleTheme}
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Orders</h1>
          <p className="text-sm text-gray-500">
            Manage and track customer orders
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border bg-white dark:bg-gray-900">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border bg-white dark:bg-gray-900">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white dark:bg-gray-900 border rounded-xl p-4 space-y-4">
        {/* SEARCH */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by order ID, customer name or email..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm outline-none"
          />
        </div>

        {/* ✅ TABS */}
        <SegmentedTabs<OrderStatus>
          value={status}
          onChange={setStatus}
          tabs={[
            { key: "All", label: "All Orders" },
            { key: "Pending", label: "Pending" },
            { key: "Processing", label: "Processing" },
            { key: "Shipped", label: "Shipped" },
            { key: "Delivered", label: "Delivered" },
            { key: "Canceled", label: "Canceled" },
          ]}
        />

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-3 text-left">Order ID</th>
                <th className="text-left">Customer</th>
                <th className="text-left">Date</th>
                <th className="text-left">Items</th>
                <th className="text-left">Total</th>
                <th className="text-left">Payment</th>
                <th className="text-left">Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="py-4 font-medium">{o.id}</td>

                  <td>
                    <div className="font-medium">{o.customer}</div>
                    <div className="text-xs text-gray-500">{o.email}</div>
                  </td>

                  <td>{o.date}</td>
                  <td>{o.items}</td>
                  <td className="text-greenMain font-medium">{o.total}</td>
                  <td>{o.payment}</td>

                  <td>
                    <StatusBadge status={o.status} />
                  </td>

                  <td>
                    <Eye size={16} className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STATUS BADGE ---------------- */

function StatusBadge({ status }: { status: Order["status"] }) {
  const styles: Record<Order["status"], string> = {
    Delivered: "bg-green-100 text-green-600",
    Shipped: "bg-blue-100 text-blue-600",
    Processing: "bg-purple-100 text-purple-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Canceled: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
}
