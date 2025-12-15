"use client";

type TabOption<T extends string> = {
  key: T;
  label: string;
};

type SegmentedTabsProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  tabs: TabOption<T>[];
  className?: string;
};

export function SegmentedTabs<T extends string>({
  value,
  onChange,
  tabs,
  className = "",
}: SegmentedTabsProps<T>) {
  return (
    <div
      className={`inline-flex gap-1 rounded-lg p-1
      bg-gray-100 dark:bg-gray-800 ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`
            px-4 py-1.5 rounded-lg text-sm transition whitespace-nowrap
            ${
              value === tab.key
                ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
