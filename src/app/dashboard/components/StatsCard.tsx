export function StatsCard({ title, value, change }: { title: string; value: string; change: string }) {
  const positive = change.startsWith("+");
  return (
    <div className="bg-white dark:bg-gray-900 p-4 py-8 rounded-lg shadow-sm border dark:border-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</h3>
        <span className={`text-sm ${positive ? "text-green-500" : "text-rose-500"}`}>{change}</span>
      </div>
    </div>
  );
}
