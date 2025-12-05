import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const weeklyData = [
  { day: "Mon", value: 70 },
  { day: "Tue", value: 90 },
  { day: "Wed", value: 75 },
  { day: "Thu", value: 100 },
  { day: "Fri", value: 85 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 60 },
];

export function WeeklyActivityCard() {
  return (
  <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm border dark:border-gray-800 h-full">
      <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-gray-100">Weekly Activity</h2>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} >
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <Tooltip />
            <Bar dataKey="value" fill="#09e8b8"  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}