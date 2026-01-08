"use client";

import { X } from "lucide-react";

export function AddRecordModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-5">
        
        {/* HEADER */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Add New Record</h2>
            <p className="text-sm text-gray-500">
              Enter the details for the new data record.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={18} />
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium">Name</label>
            <input
              placeholder="John Doe"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-greenMain"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Email</label>
            <input
              placeholder="john@example.com"
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-greenMain"
            />
          </div>

          <div>
            <label className="text-xs font-medium">Role</label>
            <select className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-greenMain">
              <option>Select role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>User</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium">Status</label>
            <select className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-greenMain">
              <option>Select status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-sm"
          >
            Cancel
          </button>

          <button className="px-4 py-2 rounded-lg bg-greenMain text-white text-sm font-medium hover:opacity-90">
            Add Record
          </button>
        </div>
      </div>
    </div>
  );
}
