export default function Authentication() {
  return (
    <div className="border border-yellow-300 rounded-2xl bg-white p-6 md:p-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">احراز هویت</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2 text-right">
              نام
            </label>
            <input
              type="text"
              defaultValue="محمد فواد"
              className="w-full bg-[#FFFBEA] border border-yellow-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2 text-right">
              نام خانوادگی
            </label>
            <input
              type="text"
              defaultValue="برزکوهی"
              className="w-full bg-[#FFFBEA] border border-yellow-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2 text-right">
            شماره تماس
          </label>

          <div className="flex justify-start">
            <input
              type="text"
              defaultValue="09223198741"
              className="w-full md:w-1/2 bg-[#FFFBEA] border border-yellow-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2 text-right">
            کد ملی
          </label>

          <div className="flex justify-start">
            <input
              type="text"
              placeholder="کد ملی خود را وارد کنید"
              className="w-full md:w-1/2 bg-[#FFFBEA] border border-yellow-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-yellow-400 placeholder:text-gray-400"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
