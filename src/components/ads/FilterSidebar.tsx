import PriceRange from "./PriceRange";
import Switch from "./Switch";
import { X } from "lucide-react";
import WeightRange from "./WeightRange";

interface Props {
  onClose?: () => void;
}

export default function   FilterSidebar({ onClose }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">فیلترها</h2>
        {onClose && (
          <button onClick={onClose}>
            <X size={20} />
          </button>
        )}
        <button className="text-sn text-red-600 hidden lg:table">
          حذف فیلترها
        </button>
      </div>

      <input
        type="text"
        placeholder="جستجو..."
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />

      <FilterSection title="شهر">
        {["تهران", "خراسان", "اصفهان", "فارس"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="محدوده قیمت (تومان)">
        <PriceRange />
      </FilterSection>

      <FilterSection title="فروش به صورت">
        {["خرده", "عمده"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </FilterSection>

      <Switch label="عکس‌دار" />
      <Switch label="دارای عکس برند" />

      <FilterSection title="نوع زعفران">
        {["نگین", "سوپر نگین", "سرگل", "پوشال", "دسته"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="کیفیت">
        {["صادراتی", "ممتاز", "درجه یک", "درجه دو"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="سال برداشت">
        <select className="w-full border rounded-lg px-3 py-2 text-sm">
          <option>1404</option>
          <option>1403</option>
        </select>
      </FilterSection>

      <FilterSection title="محدوده وزن (گرم)">
        <WeightRange />
      </FilterSection>

      <FilterSection title="نوع بسته بندی">
        {["خاتم", "فلزی", "پاکتی", "صادراتی", "فله"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </FilterSection>
    </div>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 border-b border-b-gray-300">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
