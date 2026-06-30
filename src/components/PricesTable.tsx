import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ArrowDown, LineChartIcon } from "lucide-react";

const chartData24 = [
  { time: "09:00", price: 13000000 },
  { time: "10:00", price: 12800000 },
  { time: "11:00", price: 12650000 },
  { time: "12:00", price: 12720000 },
  { time: "13:00", price: 12680000 },
];
const chartDataWeek = [
  { time: "شنبه", price: 13100000 },
  { time: "یکشنبه", price: 13200000 },
  { time: "دوشنبه", price: 12900000 },
  { time: "سه‌شنبه", price: 12850000 },
  { time: "چهارشنبه", price: 13000000 },
];
const chartDataMonth = [
  { time: "هفته ۱", price: 12800000 },
  { time: "هفته ۲", price: 13100000 },
  { time: "هفته ۳", price: 12950000 },
  { time: "هفته ۴", price: 13080000 },
];

const tabs = [
  { key: "24h", label: "۲۴ ساعت اخیر" },
  { key: "week", label: "هفته گذشته" },
  { key: "month", label: "ماه گذشته" },
];

export default function PricesTable() {
  const [activeTab, setActiveTab] = useState("24h");

  const getChartData = () => {
    switch (activeTab) {
      case "week":
        return chartDataWeek;
      case "month":
        return chartDataMonth;
      default:
        return chartData24;
    }
  };

  return (
    <div className="relative mt-20 overflow-hidden">

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-white px-8 py-3 rounded-full shadow-xl text-gray-800 font-bold text-lg">
          logo
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center px-4">
        <div className="flex justify-center items-center mb-8 gap-2 px-4 py-2 rounded-3xl text-sm bg-yellow-100 text-yellow-600 shadow-md">
          <LineChartIcon />
          <p>تحلیل بازار</p>
        </div>

        <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="flex justify-center gap-3 mb-6">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
                  activeTab === t.key
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
                {Number(13250000).toLocaleString("fa-IR")} ریال
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                قیمت ۱ گرم زعفران نگین
              </p>
              <p className="text-sm text-gray-400 mt-1">
                معادل ۱ مثقال (۴٫۶۸ گرم)
              </p>
            </div>

            <div className="w-full md:w-1/2 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={getChartData()}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="time" />
                  <YAxis hide />
                  <Tooltip
                    formatter={(value) =>
                      value.toLocaleString("fa-IR") + " ریال"
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-3 text-center border-t pt-6 mt-8 text-sm">
            <div>
              <p className="text-red-500 font-bold flex items-center justify-center gap-1">
                ۲٫۵۲٪ <ArrowDown size={18} />
              </p>
              <span className="text-gray-500">تغییرات</span>
            </div>
            <div>
              <p className="font-bold text-blue-900">
                {Number(13176000).toLocaleString("fa-IR")} ریال
              </p>
              <span className="text-gray-500">بالاترین قیمت</span>
            </div>
            <div>
              <p className="font-bold text-blue-900">
                {Number(13041000).toLocaleString("fa-IR")} ریال
              </p>
              <span className="text-gray-500">پایین‌ترین قیمت</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
