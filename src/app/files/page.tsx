"use client";

import {
  Search,
  Folder,
  FileText,
  Image,
  Video,
  Archive,
  Star,
  Grid,
  List,
  Upload,
  FolderPlus,
} from "lucide-react";
import { JSX, useMemo, useState } from "react";
import { SegmentedTabs } from "../components/ui/SegmentedTabs";
import { Topbar } from "../dashboard/components/Topbar";
import { useTheme } from "next-themes";

type FileItem = {
  name: string;
  type: "folder" | "pdf" | "image" | "video" | "zip" | "doc";
  size?: string;
  date: string;
  starred?: boolean;
};

type FileFilter = "all" | "recent" | "starred";

const files: FileItem[] = [
  { name: "Documents", type: "folder", date: "Nov 20, 2024" },
  { name: "Images", type: "folder", date: "Nov 19, 2024" },
  { name: "Projects", type: "folder", date: "Nov 18, 2024" },
  {
    name: "Q4_Sales_Report.pdf",
    type: "pdf",
    size: "2.4 MB",
    date: "Nov 17, 2024",
  },
  {
    name: "presentation.pptx",
    type: "doc",
    size: "5.8 MB",
    date: "Nov 16, 2024",
    starred: true,
  },
  {
    name: "budget_2024.xlsx",
    type: "doc",
    size: "1.2 MB",
    date: "Nov 15, 2024",
  },
  {
    name: "meeting_recording.mp4",
    type: "video",
    size: "156 MB",
    date: "Nov 14, 2024",
  },
  {
    name: "logo_design.png",
    type: "image",
    size: "847 KB",
    date: "Nov 13, 2024",
    starred: true,
  },
  {
    name: "project_archive.zip",
    type: "zip",
    size: "45 MB",
    date: "Nov 12, 2024",
  },
];

export default function FileManagerPage() {
  const [view, setView] = useState<"grid" | "list">("list");
  const [filter, setFilter] = useState<FileFilter>("all");
  const { theme, setTheme } = useTheme();

  const filteredFiles = useMemo(() => {
    if (filter === "starred") return files.filter((f) => f.starred);
    if (filter === "recent") return files.slice(0, 4); // simple recent logic
    return files;
  }, [filter]);
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">File Manager</h1>
          <p className="text-sm text-gray-500">
            Organize and manage your files
          </p>
        </div>

        <div className="flex gap-2">
          <button className="btn-secondary">
            <FolderPlus size={16} /> New Folder
          </button>
          <button className="btn-primary">
            <Upload size={16} /> Upload Files
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4">
        <Stat title="Total Files" value="1,234" icon={<FileText size={18} />} />
        <Stat title="Total Size" value="45.8 GB" icon={<Archive size={18} />} />
        <Stat title="Folders" value="156" icon={<Folder size={18} />} />
        <Stat title="Starred" value="23" icon={<Star size={18} />} />
      </div>

      {/* FILES CONTAINER */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        {/* SEARCH + VIEW */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="relative w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Search files and folders..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 text-sm outline-none"
            />
          </div>

          <div className="flex gap-1">
            <button
              onClick={() => setView("list")}
              className={`icon-btn ${view === "list" && "active"}`}
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setView("grid")}
              className={`icon-btn ${view === "grid" && "active"}`}
            >
              <Grid size={16} />
            </button>
          </div>
        </div>

        {/* SEGMENTED TABS BELOW SEARCH */}
        <div className="px-4 pb-4">
          <SegmentedTabs<FileFilter>
            value={filter}
            onChange={setFilter}
            tabs={[
              { key: "all", label: "All files" },
              { key: "recent", label: "Recent" },
              { key: "starred", label: "Starred" },
            ]}
          />
        </div>

        {/* CONTENT */}
        {view === "list" ? (
          <ListView files={filteredFiles} />
        ) : (
          <GridView files={filteredFiles} />
        )}
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: JSX.Element;
}) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-greenMain/10 text-greenMain">
        {icon}
      </div>
    </div>
  );
}

function ListView({ files }: { files: FileItem[] }) {
  return (
    <div className="p-4 space-y-2">
      {files.map((f, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-5 py-3
          rounded-lg border border-gray-200 dark:border-gray-800
          bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <div className="flex items-center gap-3">
            <FileIcon type={f.type} />
            <div>
              <div className="text-sm font-medium">{f.name}</div>
              <div className="text-xs text-gray-500">
                {f.size ? `${f.size} • ` : ""}
                Modified {f.date}
              </div>
            </div>
          </div>

          {f.starred && (
            <Star size={16} className="text-greenMain" fill="currentColor" />
          )}
        </div>
      ))}
    </div>
  );
}

function GridView({ files }: { files: FileItem[] }) {
  return (
    <div className="p-4 grid grid-cols-5 gap-4">
      {files.map((f, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 dark:border-gray-800
          bg-white dark:bg-gray-900 p-4 text-center hover:shadow-sm"
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <FileIcon type={f.type} size={32} />
              {f.starred && (
                <Star
                  size={14}
                  className="absolute -top-1 -right-1 text-greenMain"
                  fill="currentColor"
                />
              )}
            </div>
            <div className="mt-2 text-sm font-medium truncate w-full">
              {f.name}
            </div>
            <div className="text-xs text-gray-500">{f.size ?? f.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FileIcon({
  type,
  size = 20,
}: {
  type: FileItem["type"];
  size?: number;
}) {
  const map: Record<string, JSX.Element> = {
    folder: <Folder size={size} className="text-greenMain" />,
    pdf: <FileText size={size} className="text-blue-500" />,
    doc: <FileText size={size} className="text-indigo-500" />,
    image: <Image size={size} className="text-green-500" />,
    video: <Video size={size} className="text-purple-500" />,
    zip: <Archive size={size} className="text-yellow-500" />,
  };
  return map[type];
}
