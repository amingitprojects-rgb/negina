import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Search } from "lucide-react";

const PROVINCES = [
  "تهران",
  "خراسان رضوی",
  "اصفهان",
  "فارس",
  "یزد",
  "کرمان",
  "گیلان",
  "گلستان",
  "سمنان",
  "هرمزگان",
];

const ProvincesDropdown: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return PROVINCES;
    return PROVINCES.filter((p) => p.includes(q));
  }, [query]);

  return (
    <div
      className="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-xl p-3 z-50"
      role="menu"
      aria-label="استان‌ها"
    >
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="استان مورد نظر را جستجو کنید…"
          aria-label="جستجوی استان‌ها"
          className="bg-transparent outline-none text-sm flex-1 pr-2 placeholder-gray-400"
        />
      </div>

      <div className="mt-3 max-h-56 overflow-auto">
        {filtered.map((p) => (
          <Link
            to={`/provinces/${encodeURIComponent(p)}`}
            key={p}
            role="menuitem"
            className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700"
          >
            <span>{p}</span>
            <ChevronLeft size={16} className="text-gray-400" />
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="px-3 py-2 text-sm text-gray-500">نتیجه‌ای یافت نشد.</div>
        )}
      </div>
    </div>
  );
};

export default ProvincesDropdown;
