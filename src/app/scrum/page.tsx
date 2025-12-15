"use client";

import { useState } from "react";
import { initialColumns } from "./data";
import { Plus, MoreVertical, Search } from "lucide-react";
import { ColumnKey, ColumnsState, Task } from "./types";
import { Topbar } from "../dashboard/components/Topbar";

export default function ScrumBoard() {
  const [columns, setColumns] = useState<ColumnsState>(initialColumns);
  const [isDark, setIsDark] = useState(false);

  
  const [draggedItem, setDraggedItem] = useState<{
    from: ColumnKey;
    item: Task;
  } | null>(null);

  // ✅ DRAG START
  const handleDragStart = (from: ColumnKey, item: Task) => {
    setDraggedItem({ from, item });
  };

  // ✅ DROP
  const handleDrop = (to: ColumnKey) => {
    if (!draggedItem) return;

    const { from, item } = draggedItem;
    if (from === to) return;

    setColumns((prev) => {
      const newFromItems = prev[from].items.filter(
        (i) => i.id !== item.id
      );

      const newToItems = [...prev[to].items, item];

      return {
        ...prev,
        [from]: { ...prev[from], items: newFromItems },
        [to]: { ...prev[to], items: newToItems },
      };
    });

    setDraggedItem(null);
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-6 space-y-6">
        <Topbar
        onToggleTheme={handleToggleTheme}
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
      {/* ✅ HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Scrum Board
          </h1>
          <p className="text-sm text-gray-500">
            Manage your tasks with drag-and-drop kanban board
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-greenMain text-white text-sm">
          <Plus size={16} /> New Task
        </button>
      </div>

      {/* ✅ BOARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {Object.entries(columns).map(([key, col]) => {
          const columnKey = key as ColumnKey;

          return (
            <div
              key={columnKey}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 border dark:border-gray-800"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(columnKey)}
            >
              {/* ✅ COLUMN HEADER */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${col.color}`} />
                  <span className="font-medium text-sm">
                    {col.title}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
                    {col.items.length}
                  </span>
                </div>
                <Plus size={16} />
              </div>

              {/* ✅ CARDS */}
              <div className="space-y-4">
                {col.items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() =>
                      handleDragStart(columnKey, item)
                    }
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700 cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <MoreVertical size={16} />
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between mt-3 text-xs">
                      <span
                        className={`px-2 py-0.5 rounded-full ${
                          item.priority === "high"
                            ? "bg-red-100 text-red-600"
                            : item.priority === "medium"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {item.priority}
                      </span>

                      <span className="text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
