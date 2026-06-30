import { Clock, Wallet as WalletIcon } from "lucide-react";

export default function WalletPanel() {
  return (
    <div className="space-y-8">
      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">کیف پول من</h2>
        <p className="text-sm text-gray-500 mb-4 md:mb-6">
          درآمد فروش زعفران شما پس از تسویه به کیف پول شما واریز می‌شود.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="border rounded-xl p-4 md:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <WalletIcon size={18} />
                موجودی قابل برداشت
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                45,000,000
                <span className="text-sm font-medium mr-1">تومان</span>
              </div>
            </div>
            <button className="mt-4 md:mt-6 bg-purple-600 text-white py-2 rounded-xl text-sm hover:bg-purple-700 transition">
              افزایش اعتبار +
            </button>
          </div>

          <div className="border rounded-xl p-4 md:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Clock size={18} />
                در انتظار تسویه
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                450,000
                <span className="text-sm font-medium mr-1">تومان</span>
              </div>
            </div>
            <button className="mt-4 md:mt-6 border border-purple-400 text-purple-600 py-2 rounded-xl text-sm hover:bg-purple-50 transition">
              برداشت وجه
            </button>
          </div>
        </div>
      </div>

      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 md:mb-0">
            تاریخچه تراکنش‌ها
          </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {["همه", "فروش", "خرید", "برداشت وجه", "شارژ کیف پول"].map(
              (item) => (
                <button
                  key={item}
                  className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 font-medium">تاریخ</th>
                <th className="p-3 font-medium">مبلغ</th>
                <th className="p-3 font-medium">شرح تراکنش</th>
                <th className="p-3 font-medium">وضعیت</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="p-3">1404/11/25</td>
                <td className="p-3 text-green-600">+150,000</td>
                <td className="p-3">فروش</td>
                <td className="p-3 text-yellow-600">در انتظار</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">1404/11/22</td>
                <td className="p-3 text-red-600">-100,000</td>
                <td className="p-3">برداشت وجه</td>
                <td className="p-3 text-green-600">موفق</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">1404/11/05</td>
                <td className="p-3 text-green-600">+1,000,000</td>
                <td className="p-3">شارژ کیف پول</td>
                <td className="p-3 text-red-600">ناموفق</td>
              </tr>
              <tr>
                <td className="p-3">1404/11/22</td>
                <td className="p-3 text-red-600">-1,000,000</td>
                <td className="p-3">خرید</td>
                <td className="p-3 text-green-600">موفق</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6">
          {["‹", "1", "2", "3", "…", "8", "›"].map((item, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 rounded-md border ${
                item === "1" ? "bg-gray-300" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
