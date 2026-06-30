import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function AdCard() {
  return (
    <Link to="/products/1" className="block">
      <div
        dir="rtl"
        className="
        w-[85%] m-auto lg:w-full
        bg-white
        border border-gray-200
        rounded-2xl
        p-3 sm:p-4
        transition
        hover:shadow-md
      "
      >
        <div
          className="
        bg-[#F1F1F1]
        rounded-xl
        h-28 sm:h-40 md:h-44
        flex items-center justify-center
      "
        >
          <svg
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            fill="none"
            stroke="#1f1f1f"
          >
            <rect
              x="15"
              y="20"
              width="65"
              height="55"
              rx="12"
              strokeWidth="4"
            />
            <circle cx="35" cy="38" r="8" strokeWidth="4" />
            <path d="M22 70 L42 48 L55 62 L78 45" strokeWidth="4" />
          </svg>
        </div>

        <div className="mt-3 text-right">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="text-sm sm:text-lg font-bold text-gray-900 leading-6">
              زعفران ممتاز
            </h3>

            <p className="text-[11px] sm:text-sm text-gray-500">
              عمده | <span className="text-gray-700">25 گرم</span>
            </p>
          </div>

          <div className="flex items-center gap-1 text-gray-500 mt-1">
            <MapPin size={14} />
            <p className="text-[11px] sm:text-sm">تهران</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <Button
            size="sm"
            className="
            bg-linear-to-r from-purple-500 to-purple-600
            text-[11px] sm:text-sm
            px-3 sm:px-4
            h-auto py-1.5
            rounded-xl
            whitespace-nowrap
            active:scale-95
          "
          >
            افزودن +
          </Button>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1">
              <span
                className="
              bg-yellow-400
              text-white
              text-[9px] sm:text-xs
              px-2 py-0.5
              rounded-full
              font-semibold
            "
              >
                15%
              </span>

              <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">
                15,000,000
              </span>
            </div>

            <div className="text-[10px] sm:text-sm text-gray-400 mt-0.5">
              <span className="line-through decoration-2 decoration-red-500">
                17,000,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
