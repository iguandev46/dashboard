"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Topbar } from "../dashboard/components/Topbar";
import { useTheme } from "next-themes";

const tabs = ["General", "Notifications", "Privacy", "Billing"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");
 const { theme, setTheme } = useTheme();

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
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your application preferences
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">

  {/* Tabs */}
  <div className="inline-flex dark:bg-gray-800 bg-gray-100 gap-1 rounded-lg mb-6 p-1">
    {tabs.map((t) => (
      <button
        key={t}
        onClick={() => setActiveTab(t)}
        className={`
          px-4 py-1.5 rounded-lg text-sm transition whitespace-nowrap
          ${
            activeTab === t
              ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
              : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }
        `}
      >
        {t}
      </button>
    ))}
  </div>

  {/* TAB CONTENT */}
 {activeTab === "General" && <GeneralSettings />}
{activeTab === "Notifications" && <NotificationsSettings />}
{activeTab === "Privacy" && <PrivacySettings />}
{activeTab === "Billing" && <BillingSettings />}

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
        ${on ? "bg-green" : "bg-gray-300 dark:bg-gray-700"}
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


function NotificationsSettings() {
  return (
    <div className="space-y-6 text-sm">
      <div className="font-semibold text-gray-900 dark:text-white">
        Notification Preferences
      </div>

      <NotificationRow
        title="Email Notifications"
        subtitle="Receive notifications via email"
        defaultOn={true}
      />

      <NotificationRow
        title="Push Notifications"
        subtitle="Receive push notifications in browser"
        defaultOn={true}
      />

      <NotificationRow
        title="SMS Notifications"
        subtitle="Receive notifications via SMS"
        defaultOn={false}
      />

      <NotificationRow
        title="Marketing Emails"
        subtitle="Receive promotional content"
        defaultOn={false}
      />
    </div>
  );
}


function NotificationRow({ title, subtitle, defaultOn }: any) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-4">
      <div>
        <div className="font-medium text-gray-900 dark:text-white">
          {title}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {subtitle}
        </div>
      </div>

      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-5 flex items-center rounded-full p-1 transition-all 
          ${on ? "bg-green" : "bg-gray-300 dark:bg-gray-700"}
        `}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow transform transition-all 
            ${on ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}


function BillingSettings() {
  return (
    <div className="space-y-6 text-sm">
      <div className="font-semibold text-gray-900 dark:text-white">
        Billing Information
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">

        {/* Top: Current Plan + Upgrade button */}
        <div className="flex items-start  justify-between mb-4">
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              Current Plan
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Professional – $99/month
            </div>
          </div>

          <button className="px-3 py-1.5 bg-green dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md border border-gray-300 dark:border-gray-600 text-xs">
            Upgrade
          </button>
        </div>

        {/* Next billing date */}
        <div className="flex items-center justify-between py-2 text-gray-700 dark:text-gray-300 text-xs">
          <span>Next billing date</span>
          <span>Dec 21, 2024</span>
        </div>

        {/* Payment method */}
        <div className="flex items-center justify-between py-2 text-gray-700 dark:text-gray-300 text-xs">
          <span>Payment method</span>
          <span>•••• 4242</span>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="w-full px-4 py-3 text-center bg-green dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xs cursor-pointer">
        Manage Billing
      </div>
    </div>
  );
}


function PrivacySettings() {
  return (
    <div className="space-y-6 text-sm">
      <div className="font-semibold text-gray-900 dark:text-white">
        Privacy Settings
      </div>

      {/* Profile Visibility */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-4">
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            Profile Visibility
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Who can see your profile
          </div>
        </div>

        <select className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md outline-none">
          <option>Public</option>
          <option>Friends Only</option>
          <option>Private</option>
        </select>
      </div>

      {/* Show Activity Status */}
      <PrivacyToggleRow
        title="Show Activity Status"
        subtitle="Let others see when you're active"
        defaultOn={true}
      />

      {/* Data Collection */}
      <PrivacyToggleRow
        title="Data Collection"
        subtitle="Allow analytics data collection"
        defaultOn={false}
      />
    </div>
  );
}

function PrivacyToggleRow({ title, subtitle, defaultOn } : {title : string , subtitle: string , defaultOn : boolean }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-4">
      <div>
        <div className="font-medium text-gray-900 dark:text-white">{title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</div>
      </div>

      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-5 flex items-center rounded-full p-1 transition-all 
          ${on ? "bg-green" : "bg-gray-300 dark:bg-gray-700"}
        `}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow transform transition-all 
            ${on ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}
