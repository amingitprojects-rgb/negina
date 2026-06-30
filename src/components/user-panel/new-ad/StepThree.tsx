import Stepper from "./Stepper";

interface Props {
  onSubmit: () => void;
  onPrev: () => void;
}

export default function StepThree({ onSubmit, onPrev }: Props) {
  return (
    <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
      <Stepper currentStep={3} />

      <div className="border border-yellow-300 rounded-xl bg-white p-6 mb-8">
        <p className="text-sm font-semibold mb-4">وضعیت</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm">استان:</label>
            <select
              disabled
              className="border rounded-lg px-3 py-2 text-sm bg-gray-100"
            >
              <option>خراسان رضوی</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm">شهر:</label>
            <select
              disabled
              className="border rounded-lg px-3 py-2 text-sm bg-gray-100"
            >
              <option>مشهد</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="text-sm border border-gray-500 px-8 py-2 rounded-lg text-gray-700"
        >
          مرحله قبل
        </button>

        <button
          onClick={onSubmit}
          className="border border-purple-600 text-purple-600 px-10 py-2 rounded-lg text-sm hover:bg-purple-50 transition"
        >
          ثبت آگهی
        </button>
      </div>
    </div>
  );
}
