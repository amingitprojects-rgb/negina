import { ChevronDown } from "lucide-react";

export default function Support() {
  return (
    <div className="space-y-8">
      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h2 className="font-semibold text-gray-800 mb-4">پشتیبانی</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3">موضوع</th>
                <th className="p-3">وضعیت</th>
                <th className="p-3">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "پرداخت",
                  status: "پاسخ داده شده",
                  date: "1402/12/10",
                },
                {
                  title: "ثبت آگهی",
                  status: "در انتظار پاسخ",
                  date: "1402/12/09",
                },
                {
                  title: "مشکل حساب",
                  status: "پاسخ داده شده",
                  date: "1402/12/08",
                },
                { title: "سایر", status: "بسته شده", date: "1402/12/05" },
              ].map((item, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h3 className="font-semibold text-gray-800 mb-4">سوالات متداول</h3>

        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((q) => (
            <details
              key={q}
              className="group bg-[#FFF7D6] rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-sm font-medium">
                چطور آگهی خود را پرداخت کنیم؟
                <ChevronDown className="transition group-open:rotate-180" />
              </summary>
              <p className="text-xs text-gray-600 mt-3 leading-6">
                برای پرداخت آگهی، پس از ثبت اطلاعات، به درگاه بانکی منتقل
                می‌شوید و پس از پرداخت موفق، آگهی شما فعال می‌شود.
              </p>
            </details>
          ))}
        </div>
      </div>

      <p className="my-12 text-md text-gray-500 leading-5">
        اگر در سوالات متداول راه حلی برای مشکلتان نمی یابید میتوانید با ارسال
        تیکت درخواست خود را ارسال نمایید.
      </p>

      <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
        <h3 className="font-semibold text-gray-800 mb-6">
          ارسال پیام پشتیبانی
        </h3>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-600 mb-1 block text-right">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                className="w-full border rounded-xl p-3 text-sm bg-white"
              />
            </div>

            <div>
              <label className="text-xs text-gray-600 mb-1 block text-right">
                ایمیل
              </label>
              <input
                type="email"
                className="w-full border rounded-xl p-3 text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block text-right">
              موضوع
            </label>
            <input
              type="text"
              className="w-full border rounded-xl p-3 text-sm bg-white"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block text-right">
              متن پیام
            </label>
            <textarea
              rows={5}
              className="w-full border rounded-xl p-3 text-sm resize-none bg-white"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <label className="px-4 py-2 border rounded-lg text-sm cursor-pointer bg-white">
                choose file
                <input type="file" className="hidden" />
              </label>
              <span className="text-xs text-gray-500">No file chosen</span>
            </div>
            <p className="text-xs text-gray-500 leading-5">
              پسوند های مجاز: pdf, txt, zip, png, jpeg, gif, jpg
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 bg-primary text-white rounded-xl text-sm"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
