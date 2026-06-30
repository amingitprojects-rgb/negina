import { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import AdCard from "@/components/ads/AdCard";
import FilterSidebar from "@/components/ads/FilterSidebar";
import SortDropdown from "@/components/ads/SortDropdown";
import Button from "@/components/ui/Button";

export default function AdsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openDropBox, setOpenDropBox] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="hidden lg:flex justify-center items-center gap-2 pb-2">
          <div className="flex justify-center items-center gap-2">
            <SlidersHorizontal size={18} />
            <h3>مرتب سازی بر اساس:</h3>
          </div>

          <div className="flex justify-center items-center gap-4 text-gray-600 text-sm">
            <button>کمترین قیمت</button>
            <button>بیشترین قیمت</button>
            <button>پرفروش ترین</button>
            <button>بیشترین تخفیف</button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 lg:hidden mb-4">
          <button
            onClick={() => setOpenFilter(true)}
            className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm"
          >
            <Filter size={18} />
            فیلترها
          </button>

          <button
            onClick={() => setOpenDropBox(true)}
            className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="flex gap-6">
          <div className="hidden lg:block w-[320px] shrink-0">
            <FilterSidebar />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {Array.from({ length: 18 }).map((_, i) => (
                <AdCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {openFilter && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpenFilter(false)}
          />

          <div className="w-[85%] max-w-[360px] bg-white h-full overflow-y-auto p-4 shadow-xl animate-slideIn">
            <FilterSidebar onClose={() => setOpenFilter(false)} />
          </div>
        </div>
      )}

      {openDropBox && (
        <div className="fixed inset-0 z-50 flex justify-center items-end lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpenDropBox(false)}
          />

          <div className="relative w-full bg-white rounded-t-2xl p-4 shadow-xl animate-slideUp">
            <SortDropdown />
          </div>
        </div>
      )}

      <Button className="my-8">صفحه بعد</Button>
    </div>
  );
}
