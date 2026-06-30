export default function UserDashboard() {
  return (
    <div className="space-y-8">
      <div className="h-64 border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h2 className="text-lg font-bold text-gray-600 mb-3">مشخصات من</h2>
      </div>

      <div className="h-56 border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h2 className="text-lg font-bold text-gray-600 mb-12">تیکت‌های من</h2>
          <span className="text-gray-400 text-2xl"> هنوز تیکتی ارسال نکرده‌اید</span>
      </div>

      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h2 className="text-sm text-gray-600 mb-4">آگهی‌های من</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="h-28 border border-yellow-200 rounded-xl bg-white"></div>
          <div className="h-28 border border-yellow-200 rounded-xl bg-white"></div>
          <div className="h-28 border border-yellow-200 rounded-xl bg-white flex flex-col items-center justify-center text-gray-400">
            <span className="text-4xl leading-none">+</span>
            <span className="text-xs mt-1">افزودن آگهی</span>
          </div>
        </div>

        <button className="px-6 py-2 text-sm border border-purple-400 text-purple-600 rounded-xl">
          آگهی‌های بیشتر
        </button>
      </div>
    </div>
  );
}
