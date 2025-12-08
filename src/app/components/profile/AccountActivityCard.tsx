export function AccountActivityCard() {
  const items = [
    { title: "Logged in", location: "San Francisco, CA", time: "Nov 21, 2024 10:30 AM" },
    { title: "Password changed", location: "San Francisco, CA", time: "Nov 15, 2024 3:45 PM" },
    { title: "Profile updated", location: "San Francisco, CA", time: "Nov 10, 2024 2:15 PM" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Account Activity
      </h3>

      <div className="space-y-3">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 px-4 py-3 rounded-lg"
          >
            <div>
              <p className="font-medium text-sm text-gray-900 dark:text-white">
                {i.title}
              </p>
              <p className="text-xs text-gray-500">{i.location}</p>
            </div>

            <p className="text-xs text-gray-500">{i.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
