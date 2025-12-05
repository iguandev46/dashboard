import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 3000, expenses: 2000 },
  { month: "Feb", revenue: 4500, expenses: 2300 },
  { month: "Mar", revenue: 4200, expenses: 2400 },
  { month: "Apr", revenue: 5600, expenses: 2600 },
  { month: "May", revenue: 6400, expenses: 2800 },
  { month: "Jun", revenue: 7200, expenses: 3000 },
];

export function RevenueChartCard() {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm border dark:border-gray-800">
      <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-gray-100">
        Revenue Overview
      </h2>

      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#34D399"
              fill="#34D399"
              fillOpacity={0.4}
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#60A5FA"
              fill="#60A5FA"
              fillOpacity={0.35}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
