import Link from "next/link";

export function MenuItem({
  icon,
  label,
  href,
  danger,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  danger?: boolean;
  onClick?: () => void;
}) {
  const baseStyle = `
    w-full flex items-center gap-2 px-4 py-2 text-sm transition text-left
    ${
      danger
        ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
    }
  `;

  if (href) {
    return (
      <Link href={href} className={baseStyle}>
        {icon}
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyle}>
      {icon}
      {label}
    </button>
  );
}
