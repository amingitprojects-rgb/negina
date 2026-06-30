import Stepper from "./Stepper";
import Radio from "./Radio";
import Box from "./Box";
import { ImagePlus } from "lucide-react";
import type {
  NewAdFormData,
  SaffronType,
  QualityType,
  PackagingType,
  SaleType,
} from "./types";

interface Props {
  data: NewAdFormData;
  setData: React.Dispatch<React.SetStateAction<NewAdFormData>>;
  onNext: () => void;
}

const saffronTypes: SaffronType[] = ["نگین", "سرگل", "پوشال", "دسته", "سفید"];
const qualityTypes: QualityType[] = ["درجه یک", "درجه دو", "ممتاز", "صادراتی"];
const packagingTypes: PackagingType[] = ["کریستال", "فلزی", "پاکتی", "جعبه‌ای"];
const saleTypes: SaleType[] = ["خرد", "عمده"];

export default function StepOne({ data, setData, onNext }: Props) {
  return (
    <div className="border border-yellow-300 rounded-2xl bg-[#FFFCF2] p-6">
      <Stepper currentStep={1} />

      <div className="mb-10 grid grid-cols-4 gap-4">
        <UploadBox big />
        {[1, 2, 3, 4].map((i) => (
          <UploadBox key={i} />
        ))}
      </div>

      <Box title="نوع زعفران">
        {saffronTypes.map((item) => (
          <Radio
            key={item}
            label={item}
            checked={data.saffronType === item}
            onChange={() => setData({ ...data, saffronType: item })}
          />
        ))}
      </Box>

      <Box title="کیفیت">
        {qualityTypes.map((item) => (
          <Radio
            key={item}
            label={item}
            checked={data.quality === item}
            onChange={() => setData({ ...data, quality: item })}
          />
        ))}
      </Box>

      <Box title="سال برداشت">
        <select
          className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500"
          value={data.harvestYear}
          onChange={(e) => setData({ ...data, harvestYear: e.target.value })}
        >
          <option>1404</option>
          <option>1403</option>
          <option>1402</option>
        </select>
      </Box>

      <Box title="اطلاعات بسته‌بندی">
        <div className="mb-4">
          <label className="text-sm text-gray-600">وزن زعفران (گرم)</label>
          <input
            type="number"
            className="mt-1 w-40 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
            value={data.weight}
            onChange={(e) => setData({ ...data, weight: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">نوع بسته‌بندی</p>
          <div className="flex gap-6">
            {packagingTypes.map((item) => (
              <Radio
                key={item}
                label={item}
                checked={data.packaging === item}
                onChange={() => setData({ ...data, packaging: item })}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">فروش به صورت</p>
          <div className="flex gap-6">
            {saleTypes.map((item) => (
              <Radio
                key={item}
                label={item}
                checked={data.saleType === item}
                onChange={() => setData({ ...data, saleType: item })}
              />
            ))}
          </div>
        </div>
      </Box>

      <div className="flex justify-center mt-8">
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

function UploadBox({ big }: { big?: boolean }) {
  return (
    <div
      className={`border-2 border-dashed border-yellow-300 rounded-xl
      flex flex-col items-center justify-center text-gray-400
      ${big ? "col-span-4 h-40" : "h-24"}`}
    >
      <ImagePlus size={28} />
      <span className="text-xs mt-1">افزودن عکس</span>
    </div>
  );
}
