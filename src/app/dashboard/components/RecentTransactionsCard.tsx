const orders = [
  { name: "John Anderson", id: "ORD-2025-001", amount: "$2,450", status: "Completed", time: "2 min ago" },
  { name: "Sarah Williams", id: "ORD-2025-002", amount: "$1,230", status: "Pending", time: "15 min ago" },
  { name: "Michael Brown", id: "ORD-2025-003", amount: "$3,890", status: "Completed", time: "1 hour ago" },
  { name: "Emma Davis", id: "ORD-2025-004", amount: "$890", status: "Processing", time: "2 hours ago" },
];

const statusStyles: Record<string, string> = {
  Completed: "text-green-500",
  Pending: "text-yellow-500",
  Processing: "text-blue-500",
  Failed: "text-red-500",
  Cancelled: "text-gray-500",
};

const defaultStatus = "text-purple-500";

export function RecentTransactionsCard() {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm border dark:border-gray-800 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Recent Transactions
      </h2>

      <div className="mt-4 space-y-4">
        {orders.map((o, i) => {
          const statusClass = statusStyles[o.status] || defaultStatus;

          return (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3 last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {o.name}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {o.id}
                </span>
              </div>

              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {o.amount}
                </p>

                <span className={`text-sm font-medium ${statusClass}`}>
                  {o.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
