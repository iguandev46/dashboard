import { Pencil } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800 text-center">
      <div className="flex justify-center">
        <img
          src="https://i.pravatar.cc/150?img=12"
          className="w-24 h-24 rounded-full object-cover"
          alt="profile"
        />
      </div>

      <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
        John Doe
      </h3>
      <p className="text-sm text-gray-500">Product Manager</p>

      <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-greenMain text-white dark:text-gray-900">
        Premium Member
      </span>

      <button className="mt-4 w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700">
        <Pencil size={16} /> Edit Photo
      </button>
    </div>
  );
}
