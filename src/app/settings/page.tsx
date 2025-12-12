"use client";

import { useState } from "react";

const tabs = ["General", "Notifications", "Privacy", "Billing"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your application preferences
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">

        {/* Tabs */}
        <div className="flex items-center gap-3 mb-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-1.5 text-sm rounded-lg border 
                ${
                  activeTab === t
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black border-transparent"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-transparent"
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {activeTab === "General" && (
          <GeneralSettings />
        )}

        {activeTab !== "General" && (
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Content for <b>{activeTab}</b> will go here.
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------- */
/* GENERAL TAB */
/* -------------------------------------- */

function GeneralSettings() {
  return (
    <div className="space-y-6 text-sm">
      <div className="font-semibold text-gray-900 dark:text-white">
        General Settings
      </div>

      {/* Language */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">
          Language
        </label>
        <select
          className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
        >
          <option>English</option>
          <option>Russian</option>
          <option>Armenian</option>
        </select>
      </div>

      {/* Timezone */}
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">
          Timezone
        </label>
        <select
          className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
        >
          <option>Pacific Time (PST)</option>
          <option>UTC</option>
          <option>GMT</option>
          <option>Europe/Moscow</option>
          <option>Asia/Yerevan</option>
        </select>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            Dark Mode
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Use dark theme
          </div>
        </div>
        <Switch />
      </div>
    </div>
  );
}

/* -------------------------------------- */
/* TOGGLE SWITCH COMPONENT */
/* -------------------------------------- */

function Switch() {
  const [on, setOn] = useState(false);

  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-all 
        ${on ? "bg-green-500" : "bg-gray-300 dark:bg-gray-700"}
      `}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow transform transition-all 
          ${on ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
}
