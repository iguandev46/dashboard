"use client";

import { useState } from "react";
import { SegmentedTabs } from "../ui/SegmentedTabs";

export function PersonalInfoCard() {
  const [tab, setTab] = useState<"details" | "security">("details");

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Personal Information
      </h3>

        <SegmentedTabs
      value={tab}
      onChange={setTab}
      tabs={[
        { key: "details", label: "Details" },
        { key: "security", label: "Security" },
      ]}
      className="mb-6"
    />

      {tab === "details" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="First Name" value="John" />
          <Input label="Last Name" value="Doe" />
          <Input label="Email" value="john@example.com" full />
          <Input label="Phone" value="+1 (555) 123-4567" full />
          <Textarea
            label="Bio"
            value="Product manager with 5+ years of experience..."
          />

          <button className="mt-4 w-fit px-4 py-2 bg-greenMain text-white rounded-lg">
            Save Changes
          </button>
        </div>
      )}

      {tab === "security" && (
        <div className="text-sm text-gray-500">
          Security settings coming soon...
        </div>
      )}
    </div>
  );
}


function Input({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        disabled
        value={value}
        className="w-full mt-1 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md text-sm"
      />
    </div>
  );
}

function Textarea({ label, value }: { label: string; value: string }) {
  return (
    <div className="md:col-span-2">
      <label className="text-xs text-gray-500">{label}</label>
      <textarea
        disabled
        value={value}
        className="w-full mt-1 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md text-sm"
      />
    </div>
  );
}
