export type ColumnKey = "todo" | "progress" | "review" | "done";

export type Task = {
  id: string;
  title: string;
  desc: string;
  priority: string;
  date: string;
};

export type Column = {
  title: string;
  color: string;
  items: Task[];
};

export type ColumnsState = Record<ColumnKey, Column>;
