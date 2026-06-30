import { Plus } from "lucide-react";

export default function MyAdsPage() {
  return (
    <div className="border border-yellow-300 rounded-2xl p-6 bg-white">
      <h2 className="text-sm text-gray-700 mb-6 text-right">آگهی‌های من</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-40 border border-yellow-200 rounded-xl bg-white"
          />
        ))}

        <button
          className="h-40 border border-yellow-200 rounded-xl
          flex flex-col items-center justify-center gap-2
          text-gray-500 hover:bg-yellow-50 transition"
        >
          <Plus size={36} />
          <span className="text-xs">افزودن آگهی</span>
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="border border-purple-600 text-purple-600
          px-6 py-2 rounded-lg text-sm hover:bg-purple-50"
        >
          آگهی‌های بیشتر
        </button>
      </div>
    </div>
  );
}
