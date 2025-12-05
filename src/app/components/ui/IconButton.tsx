export function IconButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
      {children}
    </button>
  );
}
