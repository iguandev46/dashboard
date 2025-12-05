import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const pieData = [
  { name: "New", value: 400 },
  { name: "Returning", value: 300 },
  { name: "Inactive", value: 200 },
  { name: "Churned", value: 100 },
];

const pieColors = ["#0ea5e9", "#22c55e", "#facc15", "#ef4444"];

export function CustomersPieCard({ isAnimationActive = true }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm border dark:border-gray-800">
      <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        Customers
      </h2>

      <div className="flex flex-col min-h-full">
        <div className="w-full flex justify-center" >
          <div
            style={{ width: 180, height: 180 }}
            className="flex justify-center"
          >
            <ResponsiveContainer >
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  isAnimationActive={isAnimationActive}
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {pieData.map((item, i) => (
            <div key={item.name} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: pieColors[i] }}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
              <span className="ml-auto font-medium text-gray-900 dark:text-gray-100">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
