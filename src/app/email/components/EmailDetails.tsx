"use client";

import { Reply, Trash2, Paperclip } from "lucide-react";

export function EmailDetails({
  email,
  onBack,
}: {
  email: any;
  onBack: () => void;
}) {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl p-6 space-y-6">
        {/* CARD TOOLBAR (INSIDE CONTENT) */}
        <div className="flex items-center justify-between  pb-4">
          <button
            onClick={onBack}
            className="px-3 py-1.5 rounded-lg border dark:border-gray-800 text-sm"
          >
            ← Back to Inbox
          </button>

          <div className="flex gap-2">
            <button className="p-2 border dark:border-gray-800 rounded-lg">
              <Reply size={16} />
            </button>
            <button className="p-2 border dark:border-gray-800 rounded-lg">
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* EMAIL HEADER */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center font-medium">
              J
            </div>

            <div>
              <div className="font-medium">John Smith</div>
              <div className="text-xs text-gray-500">to: me</div>
            </div>
          </div>

          <span className="text-xs text-gray-500">10:30 AM</span>
        </div>

        {/* SUBJECT */}
        <h2 className="font-semibold">Q4 Sales Report</h2>

        {/* BODY */}
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
          <p>Hi team,</p>
          <p>
            I wanted to share the latest sales figures for the quarter. We
            exceeded our targets by 15%.
          </p>
          <p>
            Best regards,
            <br />
            John
          </p>
        </div>

        {/* ATTACHMENT */}
        <div className="border dark:border-gray-800 rounded-lg p-3 flex items-center gap-3">
          <Paperclip size={16} className="text-greenMain" />
          <div>
            <div className="text-sm font-medium">Q4_Sales_Report.pdf</div>
            <div className="text-xs text-gray-500">2.4 MB</div>
          </div>
        </div>
      </div>

      {/* REPLY */}
      <div className="mt-6 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl p-4 space-y-3">
        <textarea
          placeholder="Type your reply..."
          className="w-full min-h-[100px] rounded-lg bg-gray-100 dark:bg-gray-800 p-3 text-sm outline-none"
        />

        <div className="flex justify-between">
          <button className="px-3 py-2 text-sm border dark:border-gray-800 rounded-lg">
            Attach File
          </button>

          <button className="px-4 py-2 bg-greenMain text-white rounded-lg text-sm">
            Send Reply
          </button>
        </div>
      </div>
    </>
  );
}
