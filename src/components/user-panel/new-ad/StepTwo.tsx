import Stepper from "./Stepper";
import type { NewAdFormData } from "./types";

interface Props {
  data: NewAdFormData;
  setData: React.Dispatch<React.SetStateAction<NewAdFormData>>;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepTwo({ onNext, onPrev }: Props) {
  return (
    <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
      <Stepper currentStep={2} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border border-yellow-300 rounded-xl p-4 bg-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            <label className="text-sm font-semibold">قیمت بر اساس</label>
            <select className="border rounded-lg px-4 py-2 text-sm bg-gray-100">
              <option>واحد</option>
            </select>
          </div>

          <div className="flex justify-center items-center gap-2">
            <input
              type="number"
              placeholder="مبلغ"
              className="w-2/3 border rounded-lg px-3 py-2 bg-gray-100 text-sm"
            />
            <span>تومان</span>
          </div>
        </div>

        <div className="border border-yellow-300 rounded-xl p-4 bg-white">
          <p className="text-sm font-semibold mb-4">تخفیف (اختیاری)</p>

          <div className="flex items-center gap-2 mb-3">
            <label>مناسبت:</label>
            <input
              type="text"
              placeholder="مثلا شب یلدا"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <label>مقدار:</label>
            <input
              type="number"
              placeholder="10"
              className="w-1/4 border rounded-lg px-3 py-2 bg-gray-100 text-sm"
            />
            <span>درصد</span>
          </div>

          <button className="text-xs px-4 py-1 border rounded-md text-gray-600">
            افزودن
          </button>
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
          onClick={onNext}
          className="border border-purple-600 text-purple-600 px-8 py-2 rounded-lg text-sm hover:bg-purple-50"
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
}
